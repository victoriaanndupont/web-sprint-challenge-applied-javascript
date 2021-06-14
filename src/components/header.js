const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const header1 = document.createElement('div')
  const date1 = document.createElement('span')
  const title1 = document.createElement('h1')
  const temp1 = document.createElement('span')

  header1.classList.add('header')
  date1.classList.add('date')
  title1.classList.add('title')
  temp1.classList.add('temp')

  header1.textContent = `Date: ${date}`
  title1.textContent = `${title}`
  temp1.textContent = `Temp: ${temp}`


  header1.appendChild(date1)
  header1.appendChild(title1)
  header1.appendChild(temp1)
//console.log(header1)
  return header1
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
 const head = document.querySelector(selector)
 
 const info = Header('Lambda', '2/22/2020', '70°')
 
  head.appendChild(info)
  console.log(head)

  console.log(info)
}

export { Header, headerAppender }
