export default class GitHubAPI {
  constructor() {
    this.baseUrl = 'https://api.github.com';
  }

  async getRepos(username = this.required('username')) {
    return await fetch(`${this.baseUrl}/users/${username}/repos`)
      .then((response) => response.json())
      .catch(() => ({ status: 'error', msg: 'Error on fetching repos' }));
  }

  required(param) {
    throw new Error(`${param} is required`);
  }
}
