/* eslint-disable no-unused-vars */
import axios from 'axios'

const Card = (article) => {
  const cardDiv = document.createElement('div')
    const headLineDiv = document.createElement('div')
    const authorDiv = document.createElement('div')
      const imageDiv = document.createElement('div')
        const authPhoto = document.createElement('img')
      const authName = document.createElement('span')

  //adding classes
  cardDiv.classList.add('card')
  headLineDiv.classList.add('headline')
  authorDiv.classList.add('author')
  imageDiv.classList.add('img-container')
  //adding textContent
  headLineDiv.textContent = article.headline
  authPhoto.src = article.authorPhoto
  authName.textContent = `By ${article.authorName}`
  //adding hierarchy
  cardDiv.appendChild(headLineDiv)
  cardDiv.appendChild(authorDiv)
    authorDiv.appendChild(imageDiv)
      imageDiv.appendChild(authPhoto)
      authorDiv.appendChild(authName)
 //adding eventListners
 cardDiv.addEventListener('click', () => { 
  console.log(headLineDiv)
 })

  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of keys and their attributes must match the provided markup exactly!
  // The text inside keys will be set using their `textContent` property (NOT `innerText`).
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
  return cardDiv
}

const cardAppender = (selector) => {
  const cardTab = document.querySelector(selector)

  axios
  .get("https://lambda-times-api.herokuapp.com/articles")
  .then(response => {
    const articles = response.data.articles;
    for(const article in articles){
      articles[article].forEach(i => cardTab.appendChild(Card(i)))
        }
      })
    


  // didn't get this last part Task 6. Is there a better way to do for each?
  //   keys.forEach((key) => {
  //     response.data.articles[key].forEach((article) => {
  //       cardTab.appendChild(Card(article))
  //     })
  //   })
  // })
  .catch(error => console.log(error))




  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the key in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
