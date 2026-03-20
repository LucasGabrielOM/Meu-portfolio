const products = [
  { id:1, name:"Classic Burger", price:29.9, img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd"},
  { id:2, name:"Bacon Explosion", price:34.9, img:"https://images.unsplash.com/photo-1550547660-d9450f859349"},
  { id:3, name:"Chicken Crispy", price:27.9, img:"https://images.unsplash.com/photo-1606755962773-d324e0a13086"}
];

let cart = [];

const container = document.getElementById("products");

function renderProducts() {
  container.innerHTML = "";

  products.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <img src="${p.img}">
        <div class="card-content">
          <h3>${p.name}</h3>
          <p>R$ ${p.price.toFixed(2)}</p>
          <button class="add-btn" onclick="addToCart(${p.id})">
            Adicionar
          </button>
        </div>
      </div>
    `;
  });
}

function addToCart(id){
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

function updateCart(){
  const items = document.getElementById("cart-items");
  const totalEl = document.getElementById("total");
  const count = document.getElementById("cart-count");

  items.innerHTML = "";
  let total = 0;

  cart.forEach((item, i) => {
    total += item.price;

    items.innerHTML += `
      <div class="cart-item">
        <div>
          <strong>${item.name}</strong><br>
          R$ ${item.price.toFixed(2)}
        </div>

        <button class="remove-btn" onclick="removeItem(${i})">
          ✖
        </button>
      </div>
    `;
  });

  totalEl.innerText = total.toFixed(2);
  count.innerText = cart.length;
}

function removeItem(index){
  cart.splice(index, 1);
  updateCart();
}

function toggleCart(){
  const cart = document.getElementById("cart");
  const overlay = document.getElementById("overlay");

  const isActive = cart.classList.contains("active");

  if(isActive){
    cart.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "auto";
  } else {
    cart.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function checkout(){

  if(cart.length === 0){
    alert("Seu carrinho está vazio!");
    return;
  }

  let message = "🍔 *Pedido BurgerHouse* %0A%0A";

  cart.forEach(item => {
    message += `• ${item.name} - R$ ${item.price.toFixed(2)}%0A`;
  });

  const total = document.getElementById("total").innerText;

  message += `%0A💰 *Total:* R$ ${total}`;

  const url = `https://wa.me/5548999509515?text=${message}`;

  window.open(url, "_blank");
}

renderProducts();