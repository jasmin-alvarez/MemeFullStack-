// <!-- Worked with House Cass and my House Hayden 
// Kiany,Kevin S , Kevin C, Alief, Jerry,Khorally , Rodas,Tamika,Guth etc.  -->



var thumbs = document.getElementsByClassName("thumbs");
var trash = document.getElementsByClassName("fa-trash-o");

//       element.addEventListener('click', function(e){
//         // a eventListener is added when user clicks on the thumbs..
//         // depending on what thumbs is clicked is what it will do
//         // else if statements used for this 
//         // if user clicks on thumbs up than it will fetch the app.put in routes.js
//         // it will update to one the value as indicated in routes.js 
//         // then it vice verse for the thumbs down as will .. 

Array.from(thumbs).forEach(function(element) {
      element.addEventListener('click', function(e){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const src = this.parentNode.parentNode.childNodes[3].getAttribute("src")
        const value = parseFloat(this.parentNode.parentNode.childNodes[7].innerText)
        if(e.target.classList.contains("fa-thumbs-up")){
             fetch('messages', {
              method: 'put',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({
                 'name': name,
                 'src': src,
                 'value':value,
                 'thumbsUp': "yeah",
                 'thumbsDown': ""
                  })
             })
             .then(response => {
               if (response.ok) return response.json()
             })
             .then(data => {
               window.location.reload(true)
             })
      }else if (e.target.classList.contains("fa-thumbs-down")){
            fetch('messages', {
              method: 'put',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({
                  'name': name,
                  'src': src,
                  'value':value,
                  'thumbsUp': "",
                  'thumbsDown': "yeah"
                  })
            })
            .then(response => {
              if (response.ok) return response.json()
            })
            .then(data => {
              window.location.reload(true)
            })
      }

      });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});









// /client side javascript

// const heart = document.querySelectorAll(".heart");
// const trash = document.getElementsByClassName("fa-trash");


// Array.from(heart).forEach(function(element) {
//   element.addEventListener('click', function(){
//     let heart = this.parentNode.parentNode.childNodes[11].innerText
//     const id = this.parentNode.parentNode.childNodes[17].dataset.id
//     console.log(typeof(id))
//     console.log(this.parentNode.parentNode.childNodes[17].dataset.id)
//     console.log(id)
//     let fav = this.parentNode.parentNode.childNodes[15].childNodes[0].style.color
//     console.log(fav,'fav')
//     console.log(heart, typeof(heart))
//     if (heart === '0'){
//       heart = 1
//     }else{
//       heart = 0
//     }
//     if (fav === 'rgb(0, 0, 0)'){
//       fav = "red"
//     }else{
//       fav = '#000'
//     }
//     fetch('/messages', {
//       method: 'put',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify({
//         'heart': heart,
//         'fav': fav,
//         'id': id
//       })
//     })
//     .then(response => {
//       if (response.ok) return response.json()
//     })
//     .then(data => {
//       console.log(data)
//       window.location.reload(true) //reload page
//     })
//   });
// });

// Array.from(trash).forEach(function(element) {
//   element.addEventListener('click', function(){
//     const id = this.parentNode.parentNode.childNodes[17].dataset.id
//     fetch('/messages', {
//       method: 'delete',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         'id': id
//       })
//     }).then(function (response) {
//       window.location.reload()
//     })
//   });
// });
























