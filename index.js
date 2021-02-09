
      /* EXERCISE 1
      Write a function for changing the title of the document in something else.
      */

      function changeTitle(newTitle){
        let title = document.createElement('title')
        title.innerText = 'Title of the document'
        document.querySelector('head').appendChild(title)
      }

      /* EXERCISE 2
      Write a function for changing the class of the title of the page in "myHeading".
      */

      function addClassToTitle(){
        document.querySelector('h1').classList.add("myHeading")
      }

      /* EXERCISE 3
      Write a function for changing the text of only the p which are children of a div.
      */

      function changePcontent(){
        let parapgraphs = document.querySelectorAll('div p') 
        for (let i = 0; i < parapgraphs.length; i++) {
          parapgraphs[i].innerText = 'Paragraph text changed using the changePcontent function'
        }
      }

      /* EXERCISE 4
      Write a function for changing the destination of every link to https://www.google.com
      */

      function changeUrls() {
        let links = document.querySelectorAll('a')
        for (let i = 0; i < links.length; i++) {
          links[i].setAttribute('href', 'https://www.google.com')
        }
      }

       /* EXERCISE 5
       Write a function for adding a new item in the second list.
       */

      function addToTheSecond(content){
        let newItem = document.createElement('li')
        newItem.innerText = "New item added"
        let secondList = document.querySelector('#secondList')
        secondList.appendChild(newItem)
      } 

      /* EXERCISE 6
      Write a function for adding a second paragraph to the div.
      */

      function addParagraph(content){
        let div = document.querySelectorAll('div')[0]
        let addedParagraph = document.createElement('p')
        addedParagraph.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        div.appendChild(addedParagraph)
      }

      /* EXERCISE 7
      Write a function for making the first UL disappear.
      */

      function firstUlDisappear() {
        let firstUl = document.querySelector('#firstList')
        firstUl.style.display = 'none'
      }

      /* EXERCISE 8
      Write a function for making the background of every UL green.
      */

      function paintItGreen(){
        let everyUl = document.getElementsByTagName('ul')
        for(let i = 0; i < everyUl.length; i++) {
          everyUl[i].style.backgroundColor = 'green'
        }
      }

      /* EXERCISE 9
      Make the heading of the page change color every time the user clicks on it.
      */

      function makeItClickable(){
        let header = document.querySelector('h1')
        header.onclick = function () {
          let randomNumber = Math.floor(Math.random() * 0xfffff * 1000000).toString(16);
          let randomColor = "#" + randomNumber.slice(0,6);
          header.style.color = randomColor;
        }
      }

      /* EXERCISE 10
      Change the footer text with something else when the user clicks on it.
      */

      function changeFooterText(){
        let footerText = document.querySelector('footer')
        footerText.onclick = function () {
          footerText.innerText = "Footer text has been changed by clicking on it"
        }
      }

      /* EXERCISE 11
      Attach an event listener to the input field in the page for console logging its value just after any keystroke.
      */
      
      let inputField = document.querySelector('#input-field')

      inputField.onkeypress = function (event) {
        console.log(event);
      }
// };
      /* EXERCISE 12
      Create a new welcome alert message when the page successfully loads.
      */

      window.onload = function(){
        alert("Page has successfully loaded")
        makeItClickable()
        changeFooterText()
      }

      /* EXERCISE 13
      Use HTML5 tags to divide the content of the page in a more semantic way.
      */