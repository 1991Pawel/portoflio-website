import React from 'react';
import styled from 'styled-components';
import ProjectList from './ProjectList';

const ProjectListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

class Project extends React.Component {
  state = {
    repo: '',
    isLoading: true,
    error: false,
  };

  componentDidMount() {
    this.fetchRepos();
  }

  fetchRepos = () => {
    fetch('https://api.github.com/users/1991Pawel/repos')
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          repo: data,
          isLoading: false,
        }),
      )
      .catch((error) => this.setState({ error, isLoading: false }));
  };

  render() {
    const { isLoading, error, repo } = this.state;
    return (
      <ProjectListWrapper>
        {isLoading && <p>Ładuje zawartość</p>}
        {error && <p>wystąpił błąd</p>}
        {!isLoading && !error && <ProjectList repo={repo} />}
      </ProjectListWrapper>
    );
  }
}

export default Project;
