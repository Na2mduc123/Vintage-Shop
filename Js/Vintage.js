document.addEventListener('DOMContentLoaded', () => {
    const menuButton2 = document.getElementById('menuButton2');
    const dropdown2 = document.getElementById('dropdown2');
  
    menuButton2.addEventListener('click', (event) => {
        event.stopPropagation();
        dropdown2.style.display = dropdown2.style.display === 'block' ? 'none' : 'block';
    });
  
    document.addEventListener('click', (event) => {
        const isClickInside = menuButton2.contains(event.target) || dropdown2.contains(event.target);
        if (!isClickInside) {
            dropdown2.style.display = 'none';
        }
    });
  });
  
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menuButton');
    const dropdown = document.getElementById('dropdown');
  
    menuButton.addEventListener('click', (event) => {
        event.stopPropagation();
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });
  
    document.addEventListener('click', (event) => {
        const isClickInside = menuButton.contains(event.target) || dropdown.contains(event.target);
        if (!isClickInside) {
            dropdown.style.display = 'none';
        }
    });
  });
  
document.addEventListener('DOMContentLoaded', () => {
    const menuButton3 = document.getElementById('menuButton3');
    const dropdown3 = document.getElementById('dropdown3');
  
    menuButton3.addEventListener('click', (event) => {
        event.stopPropagation();
        dropdown3.style.display = dropdown3.style.display === 'block' ? 'none' : 'block';
    });
  
    document.addEventListener('click', (event) => {
        const isClickInside = menuButton3.contains(event.target) || dropdown3.contains(event.target);
        if (!isClickInside) {
            dropdown3.style.display = 'none';
        }
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const menuButton4 = document.getElementById('menuButton4');
    const dropdown4 = document.getElementById('dropdown4');
  
    menuButton4.addEventListener('click', (event) => {
        event.stopPropagation();
        dropdown4.style.display = dropdown4.style.display === 'block' ? 'none' : 'block';
    });
  
    document.addEventListener('click', (event) => {
        const isClickInside = menuButton4.contains(event.target) || dropdown4.contains(event.target);
        if (!isClickInside) {
            dropdown4.style.display = 'none';
        }
    });
  });

document.addEventListener('DOMContentLoaded', () => {
    const menuButton5 = document.getElementById('menuButton5');
    const dropdown5 = document.getElementById('dropdown5');
  
    menuButton5.addEventListener('click', (event) => {
        event.stopPropagation();
        dropdown5.style.display = dropdown5.style.display === 'block' ? 'none' : 'block';
    });
  
    document.addEventListener('click', (event) => {
        const isClickInside = menuButton5.contains(event.target) || dropdown5.contains(event.target);
        if (!isClickInside) {
            dropdown5.style.display = 'none';
        }
    });
  });

  document.getElementById('FormLogin').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === "vutunamtin3" && password === "2101020") {
        window.location.href="../HTML/Vintage.html";
    } else {
        alert("Tên đăng nhập hoặc mật khẩu không chính xác. Vui lòng thử lại!");
    }
});

document.getElementById('kinhlup').addEventListener('click', function() {
    var searchTerm = document.getElementById('search-input').value.toLowerCase();
    var sections = document.querySelectorAll('sanphammoi"]');
  
    for (var i = 0; i < sections.length; i++) {
        if (sections[i].textContent.toLowerCase().includes(searchTerm)) {
            sections[i].scrollIntoView({ behavior: 'smooth' });
            break; // Ngừng tìm kiếm sau khi tìm thấy phần đầu tiên
        }
    }
  });


  let productCount = 0;
  let totalAmount = 0;
  let cartItems = {};
  
  function addToCart(productName, price) {
      if (cartItems[productName]) {
          cartItems[productName].quantity++;
          cartItems[productName].totalPrice += price;
      } else {
          cartItems[productName] = { price: price, quantity: 1, totalPrice: price };
      }
      
      productCount++;
      totalAmount += price;
  
      updateCart();
      // Hiển thị giỏ hàng
      document.getElementById('cart').style.display = 'block';
  }
  
  function updateCart() {
      document.getElementById('productCount').innerText = productCount;
      document.getElementById('totalAmount').innerText = totalAmount;
  
      const cartItemsList = document.getElementById('cartItems');
      cartItemsList.innerHTML = '';
  
      for (let productName in cartItems) {
          const item = cartItems[productName];
          const listItem = document.createElement('li');
          listItem.innerHTML = `${productName} - $${item.price} x ${item.quantity} = $${item.totalPrice} 
          <button class="increment-button" onclick="changeQuantity('${productName}', 1)">+</button>
          <button class="decrement-button" onclick="changeQuantity('${productName}', -1)">-</button>
          <button class="remove-button" onclick="removeFromCart('${productName}')">Xóa</button>`;
          cartItemsList.appendChild(listItem);
      }
  }
  
  function changeQuantity(productName, change) {
      const item = cartItems[productName];
      const newQuantity = item.quantity + change;
  
      if (newQuantity > 0) {
          item.quantity = newQuantity;
          item.totalPrice = item.price * newQuantity;
          productCount += change;
          totalAmount += item.price * change;
      } else {
          removeFromCart(productName);
      }
  
      updateCart();
  }
  
  function removeFromCart(productName) {
      const item = cartItems[productName];
      productCount -= item.quantity;
      totalAmount -= item.totalPrice;
  
      delete cartItems[productName];
  
      updateCart();
  }
  
  function closeCart() {
      document.getElementById('cart').style.display = 'none';
  }
  