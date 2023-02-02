export class Article {
  constructor({ id, title, urlToImage, tags, ...rest}) {
    this.id = id;
    this.title = title;
    this.urlToImage = urlToImage;
    this.tags = tags;
  }

  //Article generator
  generateArticle() {
    let template = '';
    let article = document.createElement('article');
    article.className = 'strategy block-shadowed';
    article.setAttribute('data-id', this.id);

    this.urlToImage &&
    (template += `<img class='strategy__image' src=${this.urlToImage} alt='strategy'>`);

    if(this.title || this.tags) {
      template += `<div class='strategy__content>`;

      this.title &&
      (template += `<h3 class='strategy__name'>${this.title}</h3>`);

      template+= `</div>`;
    }
  }
}