import axios from "axios"

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  const topics1 = document.createElement('div')
  const tab1 = document.createElement('div')
  const tab2 = document.createElement('div')
  const tab3 = document.createElement('div')
  const tab4 = document.createElement('div')
  const tab5 = document.createElement('div')

  topics1.classList.add('topics')
  tab1.classList.add('tab')
  tab2.classList.add('tab')
  tab3.classList.add('tab')
  tab4.classList.add('tab')
  tab5.classList.add('tab')

  // topics.forEach(topic => {
    tab1.textContent = topics[0]
    tab2.textContent = topics[1]
    tab3.textContent = topics[2]
    tab4.textContent = topics[3]
    tab5.textContent = topics[4]
    console.log(tab1)
    console.log(tab2)
    console.log(tab3)
    
    topics1.appendChild(tab1)
    topics1.appendChild(tab2)
    topics1.appendChild(tab3)
    topics1.appendChild(tab4)
    topics1.appendChild(tab5)

    return topics1
  // });

}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  const tabs = document.querySelector(selector)
  axios.get('https://lambda-times-api.herokuapp.com/topics').then((res) =>{
    const tab = Tabs(res.data.topics)
    tabs.appendChild(tab)
    console.log(res.data)
  }).catch((err => console.log(err))
)
console.log(tabs)
}

export { Tabs, tabsAppender }
