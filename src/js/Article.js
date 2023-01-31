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
  }
}