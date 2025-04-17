const main = document.getElementsByTagName("main").item(0);
let mainProds = document.getElementById("mainProds");
const ulMenu = document.getElementById("ulMenu");
const URLMain = "https://fakestoreapi.com/products/";


function getData(cat){
     console.log("URL: ",URLMain+cat);
     const options = {"method": "GET"};
     fetch(URLMain+cat, options)
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


function getCategories(){
  const options = {"method": "GET"};
  fetch(URLMain +"categories/", options)
  .then((response) =>{
      response.json().then((res)=>{
        //console.log("categories:", res);
        res.forEach((cat)=> {
          ulMenu.insertAdjacentHTML("afterbegin",
          `<li><a class="dropdown-item" style= "cursor:pointer;" onclick="getData('category/${(cat.replace("'", "%27"))}');" >${cat}</a></li>`);
        });
      });

  })
  .catch((err) =>{
      main.insertAdjacentHTML("beforeend", 
          `<div class="alert alert-danger role= "alert">
               ${err.message}
          </div>`);
  })

}//getCategories

getCategories();
getData("");

function createCards(products) {
  // Verificamos que 'products' sea un arreglo y que no esté vacío
    //console.log(products.length);
    mainProds.innerHTML= "";
    products.forEach(product => {
      console.log(product.id, product.title, product.price);
      mainProds.insertAdjacentHTML("beforeend",
        `<div class="card col">
           <img src="${product.image}" class="card-img-top" alt="${product.title}">
           <div class="card-body">
             <h5 class="card-title">${product.title}</h5>
             <p class="card-text">${product.description.slice()}</p>
             <a href="#" class="btn btn-primary"> Go somewhere </a>
           </div>
         </div>`
      );
    });
  }