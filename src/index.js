import "./style.css";
import services from "./services/services";
import template from "./template/template.handlebars";

const refs = {
  news: document.querySelector("#news"),
  form: document.querySelector("#form")
};

services
  .fetchNews()
  .then(data => {
    const renderToHtml = data.articles
      .map(elem => {
        return template(elem);
      })
      .join("");

    refs.news.insertAdjacentHTML("beforeend", renderToHtml);
  })
  .catch(error => console.error(error));

const handleSearch = e => {
  e.preventDefault();
  refs.news.innerHTML = "";
  const [input, btn] = e.target.elements;
  console.log(input.value);
  services
    .fetchNews(input.value)
    .then(data => {
      const renderToHtml = data.articles
        .map(elem => {
          return template(elem);
        })
        .join("");

      refs.news.insertAdjacentHTML("beforeend", renderToHtml);
    })
    .catch(error => console.error(error));
};

refs.form.addEventListener("submit", handleSearch);
