

export function createMarkup(arr) {
    return arr
      .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
      <li class="gallery-item">
        <div class="gallery">
         <a class="gallery-link" href="${largeImageURL}">
         <img class="gallery-image"
           src="${webformatURL}"
           alt="${tags}"
          />
         </a>
         
        <ul class="card-description">
          <li class="description">Likes <span class="accent">${likes} </span></li>
          <li class="description">Views <span class="accent">${views} </span></li>
          <li class="description">Comments <span class="accent">${comments} </span></li>
          <li class="description">Downloads <span class="accent">${downloads} </span></li>
        </ul>
        </div>
      </li>
      `).join("");
  }