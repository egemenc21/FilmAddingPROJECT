class Storage {
  static addFilmsToStorage(newFilm) {
    let films = this.getFilmsFromStorage();
    films.push(newFilm);
    localStorage.setItem("films", JSON.stringify(films));
    
  }

  static getFilmsFromStorage() {
    let films;
    if (localStorage.getItem("films") === null) {
      films = [];
    } else {
      films = JSON.parse(localStorage.getItem("films"));
    }
    return films;
  }
  static removeFilmFromStorage(element) {
    let films = this.getFilmsFromStorage();
    const text =
      element.parentElement.previousElementSibling.previousElementSibling
        .textContent;
    
    films.forEach(function (film, index) {
      if (text ===  film.title) {
        films.splice(index, 1);
      }
    });
    localStorage.setItem("films",JSON.stringify(films)); //kalan filmleri yeniden atama

  }
  static removeAllFilmsFromStorage(){
    localStorage.removeItem("films");
  }
}
