 console.log('I am working');


 const wrapper = document.querySelector("#wrapper");
 const menuItem = document.querySelectorAll(".pointer");

const products = [
    {
      id: 1,
      title: "Air Force",
      price: 120,
      colours: [
        {
          code: "black",
          img: "./air.png",
        },
        {
          code: "darkblue",
          img: "./air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 100,
      colours: [
        {
          code: "lightgray",
          img: "./jordan.png",
        },
        {
          code: "green",
          img: "./jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 140,
      colours: [
        {
          code: "lightgray",
          img: "./blazer.png",
        },
        {
          code: "green",
          img: "./blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 137,
      colours: [
        {
          code: "black",
          img: "./crater.png",
        },
        {
          code: "lightgray",
          img: "./crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 150,
      colours: [
        {
          code: "gray",
          img: "./hippie.png",
        },
        {
          code: "black",
          img: "./hippie2.png",
        },
      ],
    },
];

 let chosenProduct = products[0];

  const currentProductImg = document.querySelector(".productImg");
  const currentProductTitle = document.querySelector(".product-title");
  const currentProductPrice = document.querySelector(".product-price");
  const currentProductColours = document.querySelectorAll(".color");
  const currentProductSizes = document.querySelectorAll(".size");

menuItem.forEach((item,index)=>{

     item.addEventListener("click",()=>{
        wrapper.style.transform =`translateX(${-100 * index}vw)` ;
        
        chosenProduct = products[index];

        currentProductImg.src = chosenProduct.colours[0].img;
        currentProductTitle.innerHTML = chosenProduct.title;
        currentProductPrice.innerHTML = chosenProduct.price;

        currentProductColours.forEach((item,index)=>{
            item.style.background = chosenProduct.colours[index].code;
        })


     })
});
                

currentProductColours.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        currentProductImg.src = chosenProduct.colours[index].img;
    })
}) 


currentProductSizes.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        currentProductSizes.forEach((item,index)=>{
            item.style.backgroundColor = "white";
            item.style.color = "black";
        });
        item.style.backgroundColor = "black";
        item.style.color =  "white";
    })
})
console.log("I am not working");