function Article(title, author) {
    this.title = title;
    this.author = author;
  };
  
  Article.prototype.summary = () => {
    return `${this.title} by ${this.author || 'anonymous'}`;
  }
  
  
  Article.prototype.summaryNoArrow = function() {
    return `${this.title} by ${this.author || 'anonymous'}`;
  }
  
  const a = new Article('A day in the life of a function','Jay Script');
  
  console.log(a.summary())

  // more gotchas at https://codepen.io/jb-tellez/pen/RjbRYX