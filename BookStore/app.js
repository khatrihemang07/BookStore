const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "",
    price: 1000,
    desc: "Amish Tripathi is an Indian author. He is known for his book series Shiva Trilogy and Ram Chandra Series. The Shiva Trilogy was the fastest-selling book series in Indian publishing history, followed by the Ram Chandra series which was the second fastest selling book series in Indian publishing history.",
    colors: [
      {
        
        name:"Shiva Triology",
        code: "antiquewhite",
        img: "./img/shiva_t.png",
      },
      {
      
        name:"Ram Chandra Series",
        code: "aquamarine",
        img: "./img/ram.png",
      },
    ],
  },
  {
    id: 2,
    title: "",
    price: 400,
    desc: "Devdutt Pattanaik is a mythologist from Mumbai, India. He is also a speaker, illustrator and author, on Hindu sacred lore, legends, folklore, fables and parables. His work focuses largely on the areas of religion, mythology, and management.",
    colors: [
      {
        
        name:"Olympus",
        code: "lightgray",
        img: "./img/olym.jpg",
      },
      {
        
        name:"Sita",
        code: "antiquewhite",
        img: "./img/sita.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "",
    price: 450,
    desc: "Anthony Jay Robbins is an American author, coach, speaker, and philanthropist. He is known for his infomercials, seminars, and self-help books including the books Unlimited Power and Awaken the Giant",
    colors: [
      {
        
        name:"Awaken the Giant Within",
        code: "antiquewhite",
        img: "./img/giant.jpg",
      },
      {
       
        name:"Unshakable",
        code: "lightgray",
        img: "./img/unshakable.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "",
    price: 300,
    desc: "Robin Sharma is a Canadian writer, best known for his The Monk Who Sold His Ferrari book series. Sharma worked as a litigation lawyer until age 25, when he self-published MegaLiving, a book on stress management and spirituality",
    colors: [
      {
        
        name:"The Monk who Sold his Ferrari",
        code: "aquamarine",
        img: "./img/monk.jpg",
      },
      {
      
        name:"The Secret Letters",
        code: "lightgray",
        img: "./img/letter.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "",
    price: 350,
    desc: "Chetan Bhagat is an Indian author, columnist and youtuber. He was included in Time magazine's list of World's 100 Most Influential People in 2010.",
    colors: [
      {
        
        name:"The Girl in Room 105",
        code: "aquamarine",
        img: "./img/105room.jpg",
      },
      {

        name: "400 Days",
        code: "lightgray",
        img: "./img/400days.jpg",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductDescription = document.querySelector(".productDesc");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "Rs." + choosenProduct.price;
    currentProductDescription.textContent = choosenProduct.desc;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
      color.textContent=choosenProduct.colors[index].name;
      
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
      currentProductImg.src = choosenProduct.colors[index].img;
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
