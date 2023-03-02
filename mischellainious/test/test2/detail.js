let displayFood = [
    {
     img :"img/image 28.png",
     category : "Lunch",
     Description : "The Best Easy One Pot Chicken and Rice",
     Words : "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."
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
     img : "img/image 31.png"
     , category : "Breakfast",
     Description : "Fruity Pancake with Orange & Blueberry"
  },{
     img :"img/image 26.png"
     ,category : "Meat",
     Description : "Big and Juicy Wagyu Beef Cheeseburger"
 
  },{
     img : "img/image 30.png",
     category : "Appetizers",
     Description :"Creamiest creamy spaghetti "
  }
 ]
 function showSub(info) {
    var _food_row2 = document.querySelector(".food_row2");
    _food_row2.innerHTML = "";
    if(_food_row2) {
        for(var item of info) {
            _food_row2.innerHTML += `
          <div class="one">
            <img src="${item.img}" alt="">
            <p>${item.Description}</p></a>
            <h3> 30$ </h3>
            <div class="one_button">
               <h3> Add To Cart </h3>
            </div>
          </div>
            `;
        }
    }
 }
 showSub(displayFood2);
