var items = document.querySelectorAll(".ul li a");

items.forEach((item) => {
  item.addEventListener("click", () => {
    items.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
  });
});

var imgArray = [
  "./images/1-manu_default.jpg",
  "./images/2-manu_default.jpg",
  "./images/3-manu_default.jpg",
  "./images/4-manu_default.jpg",
  "./images/1-manu_default.jpg",
  "./images/2-manu_default.jpg",
];
var originalImgArray = [
  "./images/1.1-manu_default.jpg",
  "./images/2.1-manu_default.jpg",
  "./images/3.1-manu_default.jpg",
  "./images/4.1-manu_default.jpg",
  "./images/1.1-manu_default.jpg",
  "./images/2.1-manu_default.jpg",
];

function changImage(index, img) {
  img.setAttribute("src", imgArray[index - 1]);
}
function OriginalImage(index, img) {
  img.setAttribute("src", originalImgArray[index - 1]);
}

function setInStorage(image, title, price, description, rating) {
  window.localStorage.setItem("image", image);
  window.localStorage.setItem("title", title);
  window.localStorage.setItem("price", price);
  window.localStorage.setItem("description", description);
  window.localStorage.setItem("rating", rating);
}
var cards = document.querySelector(".cards");
var url = "https://fakestoreapi.com/";
var products = [];
var best = document.getElementById("best");
var newIn = document.getElementById("newIn");

var b = 0;

best.addEventListener("click", function (event) {
  b = 1;
  event.preventDefault();
  renderProducts();
});
newIn.addEventListener("click", function (event) {
  b = 0;
  event.preventDefault();

  renderProducts();
});
Popular.addEventListener("click", function (event) {
  b = 3;
  event.preventDefault();

  renderProducts();
});

var xhr = new XMLHttpRequest();
xhr.open("get", `${url}products`);

xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    products = JSON.parse(xhr.responseText);
    console.log(products);
    renderProducts();
  }
};

xhr.send();

function renderProducts() {
  cards.innerHTML = "";
  var img;
  var title;

  let startIndex;
  if (b == 0) {
    startIndex = 0;
  } else if (b == 1) {
    startIndex = 3;
  } else {
    startIndex = 4;
  }
  let endIndex = 8;

  for (let index = startIndex; index < endIndex; index++) {
    if (products[index].category == "jewelery" && products[index].id % 2 == 0) {
      img = "./images/tea3.jpg";
      title = "Green Tea Paradise";
    } else if (
      products[index].category == "men's clothing" &&
      products[index].id % 2 == 0
    ) {
      img = "./images/tea1.jpg";
      title = "NYBG X Tea Forte Jubilee";
    } else {
      img = "./images/tea4.jpg";
      title = "Jade Orchid Green Tea";
    }

    cards.innerHTML += `
      <div class="card" style="width: 18rem; min-height: 45vh;">
        <img src="${img}" class="card-img-top w-100 " alt="..." style="height: 30vh;">
        <div class="card-body">
          <h5 class="card-title">${products[index].rating.rate}<i id="starIcon" class="fa-solid fa-star"></i></h5>
          <p class="card-text">${title}</p>
          <div class="d-flex justify-content-between align-items-center w-100">
            <p>${products[index].price}$</p>
            <a href="product.html" onclick="setInStorage('${img}','${title}','${products[index].price}', '${products[index].description}', '${products[index].rating.rate}')" style="color: black;" > <i id="shoppingCart" class="fa-solid fa-bag-shopping"></i></a>
          </div>
        </div>
      </div>
    `;
  }
}
var flag = localStorage.getItem("flag");
var modal_body_shopping = document.querySelector(".modal-body-shopping");
var arr = [];
// var index = 0;

// console.log(arr);

// var img = localStorage.getItem("image");
// var titleCard = localStorage.getItem("title");
// var price = localStorage.getItem("price");
// var counter = localStorage.getItem("counter");
var arrayStorage = JSON.parse(localStorage.getItem("arrayStorage"));
console.log(arrayStorage);
var sumTotal = 0;
var totalPrice = document.querySelector(".totalPrice");
function prove() {
  for (let index = 0; index < arrayStorage.length; index++) {
    var countPrice = arrayStorage[index].counter * arrayStorage[index].price;
    modal_body_shopping.innerHTML += `
   <div class="row">
                          <div class="col-4">
                            <div class="image h-100">
                              <img
                                src="${arrayStorage[index].img}"
                                class="img-fluid h-100"
                                alt=""
                              />
                            </div>
                          </div>
                          <div class="col-8">
                            <div class="details d-flex flex-column">
                             <div class=" d-flex justify-content-around">
                              <p class="fw-bold">${arrayStorage[index].title}</p>
                              <i class="fa-solid fa-trash fs-6" onclick="deleteFun(this.index)"></i>   </div> 
  
                              <div class="xnumbers d-flex justify-content-around">
                                <p>x1</p>
                                <p>x${arrayStorage[index].counter}</p>
                                <p>Total</p>
                                  </div>
                              <div
                                class="factDetails d-flex justify-content-around"
                              >
                                <p>${arrayStorage[index].price}</p>
                                <p>${countPrice}</p>
                                <p>${countPrice}</p>
                              </div>
                            </div>
                          </div>
                        </div><hr>
   `;
    sumTotal += countPrice;
    totalPrice.innerHTML = sumTotal + "$";
    var produstNum = document.querySelector(".Products-num p");
    produstNum.innerHTML = arrayStorage.length;
  }
  sumTotal = 0;
}
prove();

function deleteFun(i) {
  arrayStorage.splice(i, 1);
  localStorage.setItem("arrayStorage", JSON.stringify(arrayStorage));
  modal_body_shopping.innerHTML = "";
  sumTotal = 0;
  totalPrice.innerHTML = sumTotal.toFixed(2);

  prove();
}

// ------------------------------------
var wishList = JSON.parse(localStorage.getItem("wishList"));
var modal_body_whislist = document.querySelector(".modal-body-whislist");

function whish() {
  for (let i = 0; i < wishList.length; i++) {
    modal_body_whislist.innerHTML += `
     <div class="row">
                            <div class="col-4">
                              <div class="image h-100">
                                <img
                                  src="${wishList[i].img}"
                                  class="img-fluid h-100"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div class="col-8">
                               <div class="d-flex justify-content-around align-items-center h-100">
                                <p class="fw-bold">${wishList[i].title}</p>
                                <i class="fa-solid fa-heart fs-6" onclick="deleteFav(this.index)"></i> 
                                  </div> </div>
                          </div><hr>
     `;
  }
}

whish();

function deleteFav(i) {
  wishList.splice(i, 1);
  localStorage.setItem("wishList", JSON.stringify(wishList));
  modal_body_whislist.innerHTML = "";
  whish();
}

// ----------------------------
