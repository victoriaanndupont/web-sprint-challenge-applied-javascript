import axios from "axios"

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const card1 = document.createElement('div')
  const headline1 = document.createElement('div')
  const author1 = document.createElement('div')
  const imageContainer = document.createElement('div')
  const image = document.createElement('img')
  const authorName1 = document.createElement('span')

  card1.classList.add('card')
  headline1.classList.add('headline')
  author1.classList.add('author')
  imageContainer.classList.add('img-container')

headline1.textContent = article

  card1.appendChild(headline1)
  card1.appendChild(author1)
  author1.appendChild(imageContainer)
  imageContainer.appendChild(image)
  author1.appendChild(authorName1)
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  axios.get('https://lambda-times-api.herokuapp.com/articles')
  .then((res)=>{
    console.log(res.data)
  })
}

export { Card, cardAppender }
