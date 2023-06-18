let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  //Part 1
  const h1 = document.querySelector("#main-title") 
  h1.innerHTML = "DOM Toretto" 


  // Part 2
  const body = document.querySelector("body")
  body.style.backgroundColor = "coral"

  // Part 3
  const ul =  document.querySelector('#favorite-things');
  const li =  document.querySelectorAll('#favorite-things li');

  ul.removeChild(li[li.length - 1])

  // Part 4
  const div =  document.querySelectorAll('.special-title');
  for (let i = 0; i < div.length; i++ ) {
    div[i].style.fontSize = '2rem';
  }

  //Part 5
  const pastRaces =  document.querySelector('#past-races');
  const liPast =  document.querySelectorAll('#past-races li');

  let arr = []
  for (i = 0; i < liPast.length; i++){
    arr.push(liPast[i].innerHTML)
  }
  let theIndex = arr.indexOf("Chicago")
  console.log(arr[3])
  for (let i = 0; i < arr.length; i++){
    if (arr[i] == "Chicago"){
      pastRaces.removeChild(liPast[theIndex])
      console.log(theIndex)
    }
  }

  //Part 6 
  const newli = document.createElement('li');
  newli.innerHTML = 'Miami'

  pastRaces.append(newli)

  // Part 7
  const newDiv = document.createElement('div')
  const mainDiv = document.querySelector('.main')
  const newH1 = document.createElement('h1')
  const newP = document.createElement('p')
  newDiv.classList.add('blog-post', 'purple')

  newH1.innerHTML = 'Miami'
  newP.innerHTML = "I ran from the cops after I won and juked their ass and they fell supidly"
  
  mainDiv.appendChild(newDiv)
  newDiv.append(newH1)
  newDiv.append(newP)

  // Part 8
  const quoteTitle = document.querySelector('#quote-title')
  quoteTitle.addEventListener('click', function(){
    randomQuote()
  })
  // Part 9
  const blogPosts = this.querySelectorAll('.blog-post')
  for (let item of blogPosts){
    item.addEventListener('mouseout', function(){
      item.classList.toggle('red')
    })
    item.addEventListener('mouseentyer', function(){
      item.classList.toggle('purple')
    })
    
    }

  });