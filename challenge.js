let counter = document.querySelector("#counter")
let buttonPlus = document.getElementById("+")
let buttonMinus = document.getElementById("-")
let likeButton = document.getElementById("<3")
let likesUL = document.body.querySelector("ul")
let buttonPause = document.querySelector("#pause")
let isPause = false
let likesCounter = 0
let likesHash = {};
let commentForm = document.querySelector("form")
// let buttonSubmit = document.querySelector("#submit")


document.addEventListener("DOMContentLoaded", () => {

  let time = setInterval(setTime, 1000)
  // setInterval(setTime, 1000)
  time;

  let counter1 = 0
  function setTime() {
    counter1++;
    counter.innerHTML = counter1;
  }

  buttonPlus.addEventListener("mousedown", (e) => {
    if (buttonPause.innerHTML === "resume") {
      e.preventDefault()
    } else {
      counter1 = ++counter.innerHTML
    }
  })

  buttonMinus.addEventListener("mousedown", (e) => {
    if (buttonPause.innerHTML === "resume") {
      e.preventDefault()
    } else {
      counter1 = counter1 - 1
      counter.innerHTML = counter1
    }
  })

  likeButton.addEventListener("mousedown", (e) => {
    if (buttonPause.innerHTML === "resume") {
      e.preventDefault()
    } else {

      let selectedList = null
      if (document.getElementById(`${counter1}`)) {
        selectedList = document.getElementById(`${counter1}`)
      } else {
        let newList = document.createElement("li")
        newList.setAttribute("id", `${counter1}`)
        likesUL.append(newList)

        selectedList = document.getElementById(`${counter1}`)
      }

        likesHash[counter1] = likesHash[counter1] ? likesHash[counter1] + 1 : 1
        selectedList.innerText = `${counter1} has been liked ${likesHash[counter1]} times`
      }
    })

    buttonPause.addEventListener("mousedown", () => {
      if (pause.innerHTML === "resume") {
        time = setInterval(setTime, 1000)
        pause.innerHTML = "pause"
      } else {
        clearInterval(time)
        time = 0
        pause.innerHTML = "resume"
      }
    })

    commentForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const commentContent = e.target.querySelector('[name="comment-content"]').value
      const commentParent = document.querySelector("#list")

      if (commentContent !== "") {
        const commentText = document.createElement('li')
        commentText.innerHTML = commentContent
        commentParent.append(commentText)
      } else {
        null
      }
    })

})
