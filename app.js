const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img: "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

var card = document.getElementById("menuCard");
card.classList.add("menu-items");
card.classList.add("col-12")


const koreaMenu = menu.filter((food) => food.category == "Korea");
console.log(koreaMenu);

const japanMenu = menu.filter((food) => food.category == "Japan");
console.log(japanMenu);

const chinaMenu = menu.filter((food) => food.category == "China");
console.log(chinaMenu);

var buttonList = document.getElementById("btnCnt");
buttonList.classList.add("btn-container");
var allBtn = document.createElement("button");
var koreaBtn = document.createElement("button");
var jpnBtn = document.createElement("button");
var chnBtn = document.createElement("button");

allBtn.classList.add("btn-item");
koreaBtn.classList.add("btn-item");
jpnBtn.classList.add("btn-item");
chnBtn.classList.add("btn-item");

function allMenu(){
  menu.map((food) => {
    var image = document.createElement("img");
    var title = document.createElement("span");
    var price = document.createElement("span");
    var content = document.createElement("p");

    image.classList.add("photo");
    title.classList.add("menu-title");
    title.classList.add("col-6");
    price.classList.add("col-6");
    price.classList.add("menu-price");
    content.classList.add("menu-info");

    image.src = food.img;
    title.innerHTML = food.title;
    price.innerHTML = food.price;
    content.innerHTML = food.desc;


    var allMenuList = document.createElement("div");

    allMenuList.appendChild(image);
    allMenuList.appendChild(title);
    allMenuList.appendChild(price);
    allMenuList.appendChild(content);
    allMenuList.classList.add("col-6");
    allMenuList.classList.add("allmenu");

    card.appendChild(allMenuList);
  });
}
allMenu();



allBtn.onclick = function () {
  card.innerHTML = "";
  allMenu();
};

koreaBtn.onclick = function () {
  card.innerHTML = "";

  koreaMenu.map((food) => {
    var image = document.createElement("img");
    var title = document.createElement("p");
    var price = document.createElement("p");
    var content = document.createElement("p");

    image.classList.add("photo");
    title.classList.add("menu-title");
    content.classList.add("menu-info");

    image.src = food.img;
    title.innerHTML = food.title;
    price.innerHTML = food.price;
    content.innerHTML = food.desc;

    image.classList.add("col-6");

    var koreaMenuList = document.createElement("div");

    koreaMenuList.appendChild(image);
    koreaMenuList.appendChild(title);
    koreaMenuList.appendChild(price);
    koreaMenuList.appendChild(content);
    koreaMenuList.classList.add("col-6");

    card.appendChild(koreaMenuList);
  });
};

jpnBtn.onclick = function () {
  card.innerHTML = "";

  japanMenu.map((food) => {
    var image = document.createElement("img");
    var title = document.createElement("p");
    var price = document.createElement("p");
    var content = document.createElement("p");

    image.classList.add("photo");
    title.classList.add("menu-title");
    content.classList.add("menu-info");

    image.src = food.img;
    title.innerHTML = food.title;
    price.innerHTML = food.price;
    content.innerHTML = food.desc;
    var japanMenuList = document.createElement("div");

    japanMenuList.appendChild(image);
    japanMenuList.appendChild(title);
    japanMenuList.appendChild(price);
    japanMenuList.appendChild(content);
    japanMenuList.classList.add("col-6");

    card.appendChild(japanMenuList);
  });
};

chnBtn.onclick = function () {
  card.innerHTML = "";
  chinaMenu.map((food) => {
    var image = document.createElement("img");
    var title = document.createElement("p");
    var price = document.createElement("p");
    var content = document.createElement("p");

    image.classList.add("photo");
    title.classList.add("menu-title");
    content.classList.add("menu-info");

    image.src = food.img;
    title.innerHTML = food.title;
    price.innerHTML = food.price;
    content.innerHTML = food.desc;
    
    var chinaMenuList = document.createElement("div");

    chinaMenuList.appendChild(image);
    chinaMenuList.appendChild(title);
    chinaMenuList.appendChild(price);
    chinaMenuList.appendChild(content);
    chinaMenuList.classList.add("col-6");


    card.appendChild(chinaMenuList);
  });
};

allBtn.innerHTML = "All";
koreaBtn.innerHTML = "Korea";
jpnBtn.innerHTML = "Japan";
chnBtn.innerHTML = "China";
buttonList.appendChild(allBtn);
buttonList.appendChild(koreaBtn);
buttonList.appendChild(jpnBtn);
buttonList.appendChild(chnBtn);