import './helpers/globalFunctions.js';
import BaseModal from './components/modals/BaseModal.js';
import Tooltip from "./components/common/Tooltip.js";

// info: Инициализация глобальных для приложения компонентов, функций или событий
document.addEventListener('DOMContentLoaded', (event) => {

    // info: Если находимся в режиме локальной разработки,
    //  отображаем в углу виджет со списком страниц для удобной навигации между ними.
    if (window?.APP?.mode === 'development') {
        const pages = [
            'index',
            'catalog',
        ];

        import('./helpers/pagesWidget.js').then(module => {
            if (module) {
                module.default(pages);
            }
        });
    }

    // info: Функция для получения файла svg-спрайта и его вставки в DOM.
    //if (window?.APP?.svgSpritePath) {
       // (async () => {
           // try {
              //  const response = await fetch(window.APP.svgSpritePath);
               // const sprite = await response.text();
               // const SVGContainer = document.getElementById('__SVG-container__');

               // if (sprite || !response) {
                   // SVGContainer.innerHTML = sprite;
                   // SVGContainer.querySelector('style')
                    //    ?.remove();
               // } else {
                   // new Error('sprite loading error');
              //  }
           // } catch (error) {
             //   throw error;
          //  }
      //  })();
    //}

   // document.querySelectorAll('.js-open-modal').forEach((modal) => {
       // modal.addEventListener('click', BaseModal.showModal.bind(this, modal.dataset.modalId, {}))
   // })

   // document.querySelectorAll('.js-tooltip').forEach((element) => new Tooltip({
       // element: element,
       // showOnClick: true,
        //placement: 'bottom'
    //}))
});


//  Функция для списка фильмов

function handleFormSubmit(e) {
    e.preventDefault () //предотвращает отправку формы

    const title = document.querySelector('#title').value; // document.querySelector('#title') находит элемент на странице с идентификатором title. Это может быть, например, текстовое поле ввода (<input>), текстовая область (<textarea>) или другой элемент формы. А .value получает текущее значение этого элемента. Если это текстовое поле, то value будет содержать текст, который пользователь ввел в это поле.Таким образом, переменная title будет содержать текст, введенный пользователем в элемент с идентификатором title.
    const genre = document.querySelector('#genre').value;
    const releaseYear = document.querySelector('#releaseYear').value;
    const isWatched = document.querySelector('#isWatched').checked; //document.querySelector('#isWatched') находит элемент на странице с идентификатором isWatched.).checked возвращает true, если чекбокс или радиокнопка выбраны (отмечены), и false, если они не выбраны.Таким образом, переменная isWatched будет содержать логическое значение (true или false), указывающее, был ли выбран чекбокс с идентификатором isWatched



const film = {  //Создаем обьект
    title,
    genre,
    releaseYear,
    isWatched,
}

addFilmToLocalStorage(film)  //Вызываем функцию и передаем ей аргумент фильм
}

function addFilmToLocalStorage(film) {
    const films = JSON.parse(localStorage.getItem('films')) || []; //JSON.parse — метод для преобразования строки JSON в объекты JavaScript. 
    films.push(film) //Добавляем в films  film из аргумента
    localStorage.setItem('films', JSON.stringify(films)) // stringify-Этот метод преобразует JavaScript-объект или массив в строку в формате JSON. В данном случае, если films — это массив или объект, JSON.stringify(films) создаст строку, представляющую этот массив или объект в формате JSON. Это необходимо, потому что localStorage может хранить только строки. localStorage.setItem('films', ...):Этот метод сохраняет данные в локальном хранилище браузера. Он принимает два аргумента: первый — это ключ (в данном случае 'films'), под которым будут храниться данные, а второй — это значение, которое будет сохранено (в данном случае строка JSON, полученная из JSON.stringify(films)).Таким образом, эта строка кода сохраняет массив или объект films в локальном хранилище браузера под ключом 'films'. При следующем вызове localStorage.getItem('films') вы сможете получить эту строку и преобразовать её обратно в массив или объект с помощью JSON.parse().

    renderTable();
}

function renderTable() {  //функция по логике добавления фильмов в нашу таблицу
    const films = JSON.parse(localStorage.getItem('films')) || []  // Эта строка получает массив фильмов из локального хранилища, преобразует его из строки JSON в массив. Если данных нет, то films будет пустым массивом.

    const filmTableBody = document.querySelector('#film-tbody') // Здесь мы находим элемент таблицы с идентификатором film-tbody, который будет использоваться для добавления строк с фильмами.
    filmTableBody.innerHTML = ""  //Эта строка очищает содержимое таблицы, чтобы избежать дублирования данных при повторном вызове функции.


    films.forEach((film) => {  // Метод forEach перебирает каждый элемент массива films. Для каждого фильма выполняется функция, которая создает новую строку таблицы.
        const row = document.createElement('tr');  //Создается новый элемент строки таблицы (<tr>).
        row.innerHTML = `  
        <td>${film.title}</td>  
        <td>${film.genre}</td>
        <td>${film.releaseYear}</td>
        <td>${film.isWatched ? "Да" : "Нет"}</td>
        `;  // Здесь мы задаем содержимое строки. Используются шаблонные строки (обрамленные обратными кавычками ), чтобы вставить данные о фильме: - ${film.title} — название фильма. - ${film.genre} — жанр фильма. - ${film.releaseYear} — год выпуска фильма. - ${film.isWatched ? "Да" : "Нет"} — если фильм просмотрен, отображается "Да", иначе "Нет".8. **filmTableBody.appendChild(row);**: - Эта строка добавляет созданную строку (row) в тело таблицы (filmTableBody).Таким образом, функция renderTable() отвечает за отображение списка фильмов в таблице, очищая предыдущие данные и добавляя новые строки с информацией о каждом фильме.
        filmTableBody.appendChild(row);
    })

}

document.querySelector('#film-form').addEventListener("submit", handleFormSubmit)  // Добавляем обработчик события отправки формы, который вызывает функцию handleFormSubmit

renderTable() //Вызываем функцию renderTable для первоначального отображения фильмов в таблице