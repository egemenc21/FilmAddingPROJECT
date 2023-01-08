const form = document.getElementById("film-form");
const titleEl = document.getElementById("title");
const directorEl = document.getElementById("director");
const urlEl = document.getElementById("url");
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearBtn = document.getElementById("clear-films");

eventListeners();

function eventListeners() {
  form.addEventListener("submit", addFilm);
  document.addEventListener("DOMContentLoaded", function () {
    let films = Storage.getFilmsFromStorage();
    UI.loadAllFilms(films);
  });
  secondCardBody.addEventListener("click", deleteFilm);
  clearBtn.addEventListener("click",removeAllFilms);
}
function addFilm(e) {
  const title = titleEl.value;
  const director = directorEl.value;
  const url = urlEl.value;

  if (title === "" || director === "" || url === "") {
    UI.displayMessage("Lutfen bos birakmayiniz...", "danger");
  } else {
    const newFilm = new Film(title, director, url);
    UI.addFilmToUI(newFilm);
    Storage.addFilmsToStorage(newFilm);
    UI.displayMessage("Ekleme islemi basarili...", "success");
  }
  UI.clearInputs(titleEl, directorEl, urlEl);


  e.preventDefault();
}
function deleteFilm(e) {
  if (e.target.id === "delete-film") {
    UI.deleteFilmFromUI(e.target);
    Storage.removeFilmFromStorage(e.target);
    UI.displayMessage("Silme islemi basarili...", "success");

  }
  
}
function removeAllFilms(){
  UI.removeAllFilmsFromUI();
  Storage.removeAllFilmsFromStorage();
}
