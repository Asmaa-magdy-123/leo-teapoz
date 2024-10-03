var counter = document.querySelector(".counter");
function counterMinus() {
  var count = Number(counter.innerHTML);
  if (count > 1) counter.innerHTML = count - 1;
}
function counterPlus() {
  var count = Number(counter.innerHTML);
  counter.innerHTML = count + 1;
}
var ProductsNum = document.querySelector(".Products-num p");
var addCart = document.querySelector(".addcart");
function addToCart() {
  var arrayStorage = localStorage.getItem("arrayStorage");
  localStorage.setItem("counter", counter.innerHTML);


  arrayStorage = arrayStorage ? JSON.parse(arrayStorage) : [];
  arrayStorage.push({
    img: localStorage.getItem("image"),
    title: localStorage.getItem("title"),
    price: localStorage.getItem("price"),
    counter: localStorage.getItem("counter"),
  });

  localStorage.setItem("arrayStorage", JSON.stringify(arrayStorage));

  ProductsNum.innerHTML = Number(ProductsNum.innerHTML) + 1;

  // localStorage.setItem("flag", "yes");
}

function addToWishList(){
  var wishList = localStorage.getItem("wishList");

  wishList = wishList ? JSON.parse(wishList) : [];
  wishList.push({
    img: localStorage.getItem("image"),
    title: localStorage.getItem("title"),
  });

  localStorage.setItem("wishList", JSON.stringify(wishList));

}



var productTitle = document.querySelector(".details h1");
var productPrice = document.querySelector(".details span");
var productImage = document.querySelector(".imgContainer img");

productImage.setAttribute("src", localStorage.getItem("image"));
productTitle.innerHTML = localStorage.getItem("title");
productPrice.innerHTML = "$" + localStorage.getItem("price") + "  ";

function groupBtnsFun(el) {
  var groupBtnPara = document.getElementById("groupBtnPara");

  if (el.innerHTML === "Description") {
    groupBtnPara.innerHTML = localStorage.getItem("description");
    console.log("Updated content for Description:", groupBtnPara.innerHTML);
  } else if (el.innerHTML === "Rate") {
    groupBtnPara.innerHTML =
      localStorage.getItem("rating") +
      '<i id="starIcon" class="fa-solid fa-star"></i>';
    console.log("Updated content for Rate:", groupBtnPara.innerHTML);
  } else if (el.innerHTML === "Reviews") {
    groupBtnPara.innerHTML = "No customer reviews for the moment.";
    console.log("Updated content for Reviews:", groupBtnPara.innerHTML);
  }
}
var input = document.querySelector(".formNav input");
var inputArray = [
  "w",
  "h",
  "a",
  "t",
  " ",
  "a",
  "r",
  "e",
  " ",
  "y",
  "o",
  "u",
  " ",
  "l",
  "o",
  "o",
  "k",
  "i",
  "n",
  "g",
  " ",
  "f",
  "o",
  "r",
  "?",
];
index = 0;
setInterval(() => {
  if (index < inputArray.length) input.placeholder += inputArray[index++];
  else {
    input.placeholder = "";
    index = 0;
  }
}, 100);
