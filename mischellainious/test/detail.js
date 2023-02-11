let displayFood2 = [
    {
       img : "img/image 31.png"
       , category : "Breakfast",
       Description : "Fruity Pancake with Orange & Blueberry"
       , id : 1
    },{
       img :"img/image 26.png"
       ,category : "Meat",
       Description : "Big and Juicy Wagyu Beef Cheeseburger"
       ,id : 2
    },{
       img : "img/image 30.png",
       category : "Appetizers",
       Description :"Creamiest creamy spaghetti "
       ,id : 3
    }
   ]
   
   function showSub(info) {
      var _food_row2 = document.querySelector(".food_row2");
      _food_row2.innerHTML = "";
      if(_food_row2) {
          for(var item of info) {
              _food_row2.innerHTML += `
              <div class="one">
              <a href="detail.html?url=${item.id}">
                <img src="${item.img}" alt="">
                <p>${item.Description}</p></a>
                <h3> 30$ </h3>
                <div class="one_button">
                   <h3> Add To Cart </h3>
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
  mainProduct();

