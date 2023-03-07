let displayFood = [
    {
     img :"https://m.media-amazon.com/images/I/71TUI5iU5YL.jpg",
     category : "Lunch",
     Description : "Large Teddy Bear",
     Words : "A warm, fuzzy and super large teddy bear to keep you accompanied and to keep you warm, incase you dont have someone to do that for you. Multiple choices of colors are availabe."
  },
 ]
  
 function showMain(data) {
    var _food_row = document.querySelector(".food_row");
    _food_row.innerHTML = "";
    if(_food_row) {
        for(var item of data) {
            _food_row.innerHTML += `
        <div class="one">
            <div class="sub-one"> 
                <input style="border: 2px #F54748 solid;
                     width: 240px; height: 42px;" type="text" name="Hello" id="name" placeholder="Product Name..." minlenght="5" maxlenght ="25">
                <input style="border: 2px #F54748 solid;
                     width: 240px; height: 42px;" type="text" name="Hello" id="price" placeholder="Price... " minlenght="5" maxlenght ="25">
                <input style="border: 2px #F54748 solid;
                     width: 240px; height: 42px;" type="text" name="Hello" id="product-desc"placeholder="Product description..." minlenght="5" maxlenght ="60">
                <input style="border: 2px #F54748 solid;
        width: 240px; height: 42px;" type="url" name="Hello"  id="img"placeholder="Insert image URL here">
            </div>
            
        
            <div class="quantity">
                    <div class="cart_button">
                    <button onclick = "addPro()" id="addProduct">𝓐𝓭𝓭 𝓽𝓸 𝓼𝓱𝓸𝓹</button>
                    <a href=""> <img src="https://e7.pngegg.com/pngimages/833/426/png-clipart-shopping-cart-shopping-cart.png" alt="bitch"></a>
                    </div>
            </div>
        </div>       
        <img src="https://www.coolgenerator.com/Data/Textdesign/202303/f810cc87e0ea11c3fa4ba27ae820bf12.png" alt="bitch">
            
        </div>
            `;
        }
    }
 }
 showMain(displayFood);



let displayFood2 = [
    {
        img: "https://www.coolgenerator.com/Data/Textdesign/202303/130d58b5863ec498b395f46e62f24cce.png",
        name: "Heart-Shaped plushie",
        button : "https://companieslogo.com/img/orig/LISP.SW_BIG-793cdab5.png?t=1597871861",
    
        price : "$18.00",
        cate : 2
    },{
        img: "https://www.coolgenerator.com/Data/Textdesign/202303/130d58b5863ec498b395f46e62f24cce.png",
        name: "Large Teddy Bear",
        button : "https://companieslogo.com/img/orig/LISP.SW_BIG-793cdab5.png?t=1597871861",
        
        price : "$20.00",
        cate : 2
    },{
         img: "https://www.coolgenerator.com/Data/Textdesign/202303/130d58b5863ec498b395f46e62f24cce.png",
        name: "https://www.coolgenerator.com/Data/Textdesign/202303/130d58b5863ec498b395f46e62f24cce.png",
        button : "https://companieslogo.com/img/orig/LISP.SW_BIG-793cdab5.png?t=1597871861",
        price : "$30.00",
        cate : 2
    },{
         img: "https://www.coolgenerator.com/Data/Textdesign/202303/130d58b5863ec498b395f46e62f24cce.png",
        name: "Giant Heart Teddy Bear",
        button : "https://companieslogo.com/img/orig/LISP.SW_BIG-793cdab5.png?t=1597871861",
        price : "$30.00",
        cate : 2
    },
   ]
   
   function showSub(info) {
      var _food_row2 = document.querySelector(".food_row2");
      _food_row2.innerHTML = "";
      if(_food_row2) {
          for(var item of info) {
              _food_row2.innerHTML += `
            <div class="two">
              <a href="detail.html?url=${item.id}">
              <img src="${item.img}" alt="" class="dishes_img">     
             <div class="product-info">
              <p>  </p>
              <h4 class="price"></h4 >
             </div>
              </a>
            </div>
              `;
          }
      }
   }
   showSub(displayFood2);

   let newProduct = JSON.parse(localStorage.getItem("product"));
   if(newProduct == null) {
       localStorage.setItem("product",JSON.stringify(listProduct))
   }
   const listProduct = [
    {
        id : 1,
        img : "img/asset 8.jpeg",
        name : "Gourmet Love Chocolate/ Romantic Heart - S01",
        price : "625.000"
    }
]

const addPro = () =>{
    let img = document.querySelector("#img").value;
    let name = document.querySelector("#name").value;
    let price = document.querySelector("#price").value;
    let desc = document.querySelector("#product-desc").value;
    let newa = {
        id : newProduct.length+1,
        img : img , 
        name : name ,
        price : price,
        desc : desc
    }
    newProduct.push(newa)
    console.log(newProduct);
    localStorage.setItem("product",JSON.stringify(newProduct))
    window.location.href = "home.html";
console.log(newProduct);
}
let formProduct = document.querySelector("#addProduct");
if(formProduct) {
    formProduct.addEventListener("submit", (e)=>{
        e.preventDefault();
        addPro()
    })
}