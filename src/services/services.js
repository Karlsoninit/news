export default {
  defaultApi: "https://newsapi.org/v2/everything?",
  key: "7c3a37959eb94dc390f27c80ee3fa21b",
  fetchNews(name, page = 1) {
    return fetch(
      this.defaultApi + `q=${name}&apiKey=` + this.key + `&page=${page}`
    ).then(response => {
      console.log(response);
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    });
  }
};
