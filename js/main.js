const main = document.getElementsByTagName("main").item(0);
const URLMain = "https://fakestoreapi.com/products/";


function getData(){
     fetch(URLMain)
     .then((response) =>{
         console.log(response);
         response.json().then((res)=>{
             // console.log(res.length);
             // console.log(res[0].title);
             createCards(res);
         });

     })
     .catch((err) =>{
         main.insertAdjacentHTML("beforeend", 
             `<div class="alert alert-danger role= "alert">
                  ${err.message}
             </div>`);
     })

  }//getData
getData();

function createCards(products) {
  // Verificamos que 'products' sea un arreglo y que no esté vacío
 
    products.forEach((product) => {
      main.insertAdjacentHTML(
        "beforeend",
        `<div class="card" style="width: 18rem;">
           <img src="${product.image}" class="card-img-top" alt="${product.title}">
           <div class="card-body">
             <h5 class="card-title">${product.title}</h5>
             <p class="card-text">${product.description}</p>
             <a href="#" class="btn btn-primary">Ir a algún lado</a>
           </div>
         </div>`
      );
    });
  }

getData();
  
