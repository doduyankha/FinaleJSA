
   showSub(displayFood2);
   function mainProduct()
   {let url = new URLSearchParams(window.location.search).get("url")
   let newArrayProduct = displayFood2.find(function(item){
     return item.id = url
   });
  let giotthieu = document.querySelector(".food_row");
  giotthieu.innerHTML= `
  <div class="one">
  <h1>${newArrayProduct.Description}</h1>
  <h3> 30$ </h3>
  <p>${newArrayProduct.Words}</p>
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
  <img src="${newArrayProduct.img}" alt="">
  </div>`
  
  }
  mainProduct(displayFood2)

