const cardBody = document.querySelector(".card-body");
const filmList = document.getElementById("films");

class UI {
  static addFilmToUI(newFilm) {
    filmList.innerHTML += `
      <tr>
         <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
         <td>${newFilm.title}</td>
         <td>${newFilm.director}</td>
         <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
      </tr>
    `;
  }

  static clearInputs(el1, el2, el3) {
    el1.value = " ";
    el2.value = " ";
    el3.value = " ";
  }

  static displayMessage(message, type) {
    const div = document.createElement("div");
    div.className = `alert alert-${type}`;
    div.textContent = message;
    cardBody.appendChild(div);
    setInterval(() => {
      div.remove();
    }, 1000);
  }

  static loadAllFilms(films) {
    films.forEach(function (film) {
      UI.addFilmToUI(film);
    });
  }
  static deleteFilmFromUI(element) {
    element.parentElement.parentElement.remove();
  }
  static removeAllFilmsFromUI() {
    // filmList.innerHTML = "";
    while (filmList.firstElementChild !== null) {
      filmList.firstElementChild.remove();
    }
  }
}
