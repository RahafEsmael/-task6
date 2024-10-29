fetch("https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/")
      .then( Array => Array.json()) 
      .then( Array => con(Array))
  
  let featured = document.getElementById('FEATURED')
 
    function con(Array){
     for (let index = 45; index > 41; index--) {
        console.log(Array);
            featured.innerHTML =`
            <div class="flex-column">
            <img src=${Array[45].url}
            <h2>${Array[45].title}</h2>
            <p>${Array[45].author}</p>
            </div>
            <div class="flex-column">
            <img src=${Array[44].url}
            <h2>${Array[44].title}</h2>
            <p>${Array[44].author}</p>
            </div>
            <div class="flex-column">
            <img src=${Array[43].url}
            <h2>${Array[43].title}</h2>
            <p>${Array[43].author}</p>
            </div>
            <div class="flex-column">
            <img src=${Array[42].url}
            <h2>${Array[42].title}</h2>
            <p>${Array[42].author}</p>
            </div>`
          }}  

          fetch('https://wolnelektury.pl/api/books/studnia-i-wahadlo/')
          .then( res => res.json()) 
          .then( res => bestSelling(res))
      
      let Best = document.getElementById('best');

      function bestSelling(res) {
        
          Best.innerHTML =`
          <div class="flex-column">
            <img src=${res.url}
            <h2>${res.title}</h2>
            <p>${res.name.author}</p>
            </div>`
        }
        fetch("https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/")
      .then( Arr => Arr.json()) 
      .then( Arr => PopularBooks(Arr))
  
  let Popular = document.getElementById('popular')
 
    function PopularBooks(Arr){
     for (let index = 0; index > Arr.length; index++) {
        console.log(Arr);
        Popular.innerHTML +=`
            <div class="flex-column">
            <img src=${Arr[index].url}
            <h2>${Arr[index].title}</h2>
            <p>${Arr[index].author}</p>
            </div>
            `
          }}  
      