//shor cart
(function () {
    const cartInfo = document.getElementById('cart-info');
    const cart = document.getElementById('cart');

    cartInfo.addEventListener('click', function () {
        cart.classList.toggle('show-cart')
    })
})();

//add items
(function () {
    const cartBtn = document.querySelectorAll('.store-item-icon');

    cartBtn.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            // console.log(event.target.parentElement)
            if (e.target.parentElement.classList.contains('store-item-icon')) {
                let fullPath = e.target.parentElement.previousElementSibling.src;
                        //   console.log(fullPath)
                let pos = fullPath.indexOf('img') + 3;
                let partialPath = fullPath.slice(pos);

                const item = {};

                item.img = `img-cart${partialPath}`;
                let name =
                    e.target.parentElement.parentElement.nextElementSibling.children[0]
                        .children[0].textContent;
                item.name = name;

                let price =
                    e.target.parentElement.parentElement.nextElementSibling.children[0]
                        .children[1].textContent;
                let finalPrice = price.slice(1).trim();
                item.price = finalPrice;

                //  console.log(item)
                const cartItem = document.createElement('div');
                cartItem.classList.add  ('cart-item',
                    'd-flex',
                    'justify-content-between',
                    'text-capitalize',
                    'my-3'
                ),
                    cartItem.innerHTML = `
            <img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
            <div class="item-text">

              <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
              <span>$</span>
              <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
            </div>
            <a href="#" id='cart-item-remove' class="cart-item-remove">
              <i class="fas fa-trash"></i>
            </a>
          </div>
            `;

                const cart = document.getElementById('cart');
                const views = document.getElementById('view');
                const shopBtn = document.getElementById('shopping');
                const modal = document.getElementById('myModal');
                const total = document.querySelector('.cart-total-container');
                const modalPrice = document.getElementById('modalPrice');
                var span = document.getElementsByClassName("close")[0];

                modalPrice.textContent = item.name

                cart.insertBefore(cartItem, total)
                // alert('item added');
                btn.onclick = function() {
                    modal.style.display = "block";
                  }

                  window.onclick = function(event) {
                    if (event.target == modal) {
                      modal.style.display = "none";
                    }
                  }

                  span.onclick = function() {
                    modal.style.display = "none";
                  }

                  views.onclick = function() {
                    modal.style.display = "none";
                    // cart.classList.remove('cart')
                  }

                  shopBtn.onclick = function() {
                    modal.style.display = "none";
                  }


                showTotals();
            }

        })
    })

    const showTotals = () => {

        const total = [];
        const item = document.querySelectorAll('.cart-item-price');

           item.forEach((item)=> {
           total.push(parseFloat(item.textContent));

         })

         const totalMoney = total.reduce((total, item)=>{
            total += item;
            return total;
         }, 0)
// console.log(total)
         const finalMoney =  totalMoney.toFixed(2);

         document.getElementById('cart-total').textContent = finalMoney;
         document.querySelector('.item-total').textContent = finalMoney;
         document.getElementById('item-count').textContent = total.length;

    }


})();


// let filterInput = document.getElementById('search-item')

//   filterInput.addEventListener('keyup', () => {
//     let filterValue = document.getElementById('search-item').value.toUpperCase();
//     // let names = document.getElementById('store-item');
//     let store = document.querySelectorAll('.names');

//     for(let i = 0; i < store.length; i++){
//         let a = store[i].getElementsByTagName('h5')[0];

//         if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
//             store[i].style.display = '';

//         }else{
//             store[i].style.display = 'none';
//         }

//     }
//     // console.log(store[i])
// });

// //   const filterNames = () => {
// //       console.log(1)
// //   }
