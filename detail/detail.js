let displayFood = [
    {
     img :"https://m.media-amazon.com/images/I/71TUI5iU5YL.jpg",
     category : "Lunch",
     Description : "Large Teddy Bear",
     Words : "A warm, fuzzy and super large teddy bear to keep you accompanied and to keep you warm, incase you dont have someone to do that for you, multiple choices of colors are availabe."
  },
 ]
  
 function showMain(data) {
    var _food_row = document.querySelector(".food_row");
    _food_row.innerHTML = "";
    if(_food_row) {
        for(var item of data) {
            _food_row.innerHTML += `
         <div class="one">
            <h1>${item.Description}</h1>
            <h3> 30$ </h3>
            <p>${item.Words}</p>
            <div class="quantity">
                    <form action="_self">
                    <div id="input-text"><input style="border: 2px #F54748 solid;
                    border-radius : 5px; width: 180px; height: 42px;" type="text" name="Hello" id="">
                    </div>
                    <div class="cart_button">
                    <h3> Add To Cart </h3>
                    </div>
                 </div>
         </div>           
            <img src="${item.img}" alt="">
          </div>
            `;
        }
    }
 }
 showMain(displayFood);



let displayFood2 = [
    {
        img: "data:image/jpeg;base64,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",
        name: "Heart-Shaped plushie",
        button : "https://companieslogo.com/img/orig/LISP.SW_BIG-793cdab5.png?t=1597871861",
    
        price : "$18.00",
        cate : 2
    },{
        img: "https://m.media-amazon.com/images/I/71TUI5iU5YL.jpg",
        name: "Large Teddy Bear",
        button : "https://companieslogo.com/img/orig/LISP.SW_BIG-793cdab5.png?t=1597871861",
        
        price : "$20.00",
        cate : 2
    },{
        img: "data:image/jpeg;base64,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",
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
            <div class="one">
              <a href="detail.html?url=${item.id}">
              <div class="two">
              <img src="${item.img}" alt="" class="dishes_img">
                <h4> ${item.price} </h4>
                <div class="description">
                </div>
                <p> ${item.name} </p>
                <div class="one_text">
                <button>𝓐𝓭𝓭 𝓣𝓸 𝓒𝓪𝓻𝓽</button>
                </div>
              </div>
              </a>
            </div>
              `;
          }
      }
   }
   showSub(displayFood2);
   function mainProduct() {
     let url = new URLSearchParams(window.location.search).get("url");
     let newArryProduct = array.find(function(item) {
         return item.id == url;
     });
     console.log(newArryProduct);
     let gioithieu = document.querySelector(".food_row2");
     gioithieu.innerHTML = `
     <div class="comment">
         <h1>${newArryProduct.Description}</h1>
         <button>Add To Cart</button>
     </div>
     <div class="picture">
         <img src="${newArryProduct.img}" alt="">
     </div>
     `;
  }
  mainProduct(displayFood2);

