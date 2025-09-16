// Dessert Data with Real Images
const desserts = [
  {
    id: 1,
    image: {
      thumbnail: "./assets/images/image-waffle-thumbnail.jpg",
      mobile: "./assets/images/image-waffle-mobile.jpg",
      tablet: "./assets/images/image-waffle-tablet.jpg",
      desktop: "../images/image-waffle-desktop.jpg",
    },
    category: "Waffle",
    name: "Waffle with Berries",
    price: 6.5,
    // image: "../images/waffles.jpg",
  },
  {
    id: 2,
    image: {
      thumbnail: "./assets/images/image-creme-brulee-thumbnail.jpg",
      mobile: "./assets/images/image-creme-brulee-mobile.jpg",
      tablet: "./assets/images/image-creme-brulee-tablet.jpg",
      desktop: "../images/image-creme-brulee-desktop.jpg",
    },
    category: "Crème Brûlée",
    name: "Vanilla Bean Crème Brûlée",
    price: 7.0,
    // image: "../images/creme-brulee.jpg",
  },
  {
    id: 3,
    image: {
      thumbnail: "./assets/images/image-macaron-thumbnail.jpg",
      mobile: "./assets/images/image-macaron-mobile.jpg",
      tablet: "./assets/images/image-macaron-tablet.jpg",
      desktop: "../images/image-macaron-desktop.jpg",
    },
    category: "Macaron",
    name: "Macaron Mix of Five",
    price: 8.0,
    // image: "../images/macarons.jpg",
  },
  {
    id: 4,
    image: {
      thumbnail: "./assets/images/image-tiramisu-thumbnail.jpg",
      mobile: "./assets/images/image-tiramisu-mobile.jpg",
      tablet: "./assets/images/image-tiramisu-tablet.jpg",
      desktop: "../images/image-tiramisu-desktop.jpg",
    },
    category: "Tiramisu",
    name: "Classic Tiramisu",
    price: 5.5,
    // image: "../images/tiramisu.jpg",
  },
  {
    id: 5,
    image: {
      thumbnail: "./assets/images/image-baklava-thumbnail.jpg",
      mobile: "./assets/images/image-baklava-mobile.jpg",
      tablet: "./assets/images/image-baklava-tablet.jpg",
      desktop: "../images/image-baklava-desktop.jpg",
    },
    category: "Baklava",
    name: "Pistachio Baklava",
    price: 4.0,
    // image: "../images/image-baklava.jpg",
  },
  {
    id: 6,
    image: {
      thumbnail: "./assets/images/image-meringue-thumbnail.jpg",
      mobile: "./assets/images/image-meringue-mobile.jpg",
      tablet: "./assets/images/image-meringue-tablet.jpg",
      desktop: "../images/image-meringue-desktop.jpg",
    },
    category: "Pie",
    name: "Lemon Meringue Pie",
    price: 5.0,
    // image: "../images/lemon-pie.jpg",
  },
  {
    id: 7,
    image: {
      thumbnail: "./assets/images/image-cake-thumbnail.jpg",
      mobile: "./assets/images/image-cake-mobile.jpg",
      tablet: "./assets/images/image-cake-tablet.jpg",
      desktop: "../images/image-cake-desktop.jpg",
    },
    category: "Cake",
    name: "Red Velvet Cake",
    price: 4.5,
    // image: "../images/red-velvet.jpg",
  },
  {
    id: 8,
    image: {
      thumbnail: "./assets/images/image-brownie-thumbnail.jpg",
      mobile: "./assets/images/image-brownie-mobile.jpg",
      tablet: "./assets/images/image-brownie-tablet.jpg",
      desktop: "../images/image-brownie-desktop.jpg",
    },
    category: "Brownie",
    name: "Salted Caramel Brownie",
    price: 5.5,
    // image: "../images/brownie.jpg",
  },
  {
    id: 9,
    image: {
      thumbnail: "./assets/images/image-panna-cotta-thumbnail.jpg",
      mobile: "./assets/images/image-panna-cotta-mobile.jpg",
      tablet: "./assets/images/image-panna-cotta-tablet.jpg",
      desktop: "../images/image-panna-cotta-desktop.jpg",
    },
    category: "Panna Cotta",
    name: "Vanilla Panna Cotta",
    price: 6.5,
    // image: "../images/panna-cotta.jpg",
  },
];

const menuContainer = document.getElementById("menu");
const cartContainer = document.getElementById("cart-container");
let cart = [];

// Render Menu
function renderMenu() {
  menuContainer.innerHTML = "";
  desserts.forEach((item) => {
    const cartItem = cart.find((ci) => ci.id === item.id);
    const card = document.createElement("div");
    card.innerHTML = `
    <div class="image-container relative">
      <img id="img-${item.id}" src="${item.image.desktop}" alt="${
      item.category}" class="w-full h-60 object-cover rounded-lg mb-4 ${
      cartItem ? "outline-3 outline-[#be4324]" : ""} ">
      ${cartItem
        ? `<button class="absolute bottom-[-20px] left-[50px] lg:left-[55px] flex space-x-4 lg:space-x-8  bg-[#be4324] px-2 lg:px-4 py-1 lg:py-2 rounded-full">
              <img onclick="updateQty(${item.id}, -1)" src=${"../images/icon-decrement-quantity.svg"} class="border border-[#ad8985] rounded-[100%] lg:p-1.5 p-1">
              <span class="font-semibold text-white">${cartItem.qty}</span>
              <img onclick="updateQty(${
                item.id
              }, 1)" src=${"../images/icon-increment-quantity.svg"} class="border border-[#ad8985] rounded-[100%] lg:p-1.5 p-1">
           </button>`
        : `<button onclick="addToCart(${item.id})" class="absolute bottom-[-20px] left-[50px] lg:left-[55px] flex space-x-2 bg-white text-black border border-gray-400 px-6 py-2 rounded-[20px]">
              <img src=${"../images/icon-add-to-cart.svg"} alt="cart-img"> 
              <span class="font-medium">Add to Cart</span>
           </button>`
    }
    </div>
    <div class="mt-[30px]">  
      <p class="font-lighter text-[#ad8985] text-sm  ">${item.category}</p>
      <h3 class="font-semibold text-lg ">${item.name}</h3>
      <p class="text-[#cc6155] font-medium mb-3">$${item.price.toFixed(2)}</p>
    </div>  
      `;
    menuContainer.appendChild(card);
  });
}

// Render Cart Section (full structure + items)
function renderCart() {
  cartContainer.innerHTML = ""; 

  const cartBox = document.createElement("div");
  cartBox.className = "bg-white p-6 rounded-xl shadow-md h-fit";

  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  let total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  // Header
  const header = document.createElement("h2");
  header.className = "text-xl font-semibold text-red-800 mb-4";
  header.innerHTML = `Your Cart (<span>${count}</span>)`;
  cartBox.appendChild(header);

  // Items container
  const itemsDiv = document.createElement("div");
  itemsDiv.className = "space-y-4";

  if (cart.length === 0) {
    // only show empty message
    itemsDiv.innerHTML = `
      <div class="flex flex-col items-center">
      <img src=${"../images/illustration-empty-cart.svg"}>
      <p class="text-gray-500 text-sm">Your added items will appear here.</p>
      </div>
      `;
    cartBox.appendChild(itemsDiv);
  } else {
    // show items
    cart.forEach((item) => {
      const row = document.createElement("div");
      row.innerHTML = `
        <div class="flex justify-between items-center">
        <div>
      <p class="font-semibold">${item.name}</p>
      <p class="text-md text-gray-500"><span class="text-red-800 text-lg font-medium"> ${
        item.qty}x </span> <span class="ml-[7px]">@ $${item.price.toFixed(
        2
      )} </span> <span class="ml-[40px]">$${(item.price * item.qty).toFixed(
        2
      )} </span></p>
      </div>
        <button onclick="removeFromCart(${
          item.id
        })" class="border border-[#ad8985] rounded-[50%] p-1 mt-[24px]"><img src="/icons/remove-item.svg" class="w-[12px] h-[15px]">
    </button>
      </div>
    `;
      itemsDiv.appendChild(row);

      // Add <hr> after each item
      const hr = document.createElement("hr");
      hr.className = "my-2 border-gray-300";
      itemsDiv.appendChild(hr);
    });
    //   Appends items before footer
    cartBox.appendChild(itemsDiv);

    // Footer (only appears if cart has items)
    const footer = document.createElement("div");
    //   footer.className = "mt-6 border-t pt-4";
    footer.innerHTML = `
    <div class="flex justify-between font-semibold text-lg mt-[30px]">
      <span>Order Total</span>
      <span class="font-bold text-[25px]">$${total.toFixed(2)}</span>
    </div>
    <div class="bg-rose-50 flex items-center justify-center space-x-2.5 w-[16rem] lg:w-[15rem] h-[5rem] lg:h-[20rem] py-2 px-2 ml-[30px] mt-5 rounded-[5px]"> 
        <img src=${"../images/icon-carbon-neutral.svg"}>
        <p class=" text-sm text-[#867472] text-center">This is a <span class="font-medium"> carbon-neutral </span> delivery</p>
    </div>
       <button onclick="openCheckoutModal()" class="bg-red-700 hover:bg-red-800 text-white w-[16rem] lg:w-[15rem] h-[3rem] py-2 mt-4 ml-[30px] rounded-[25px] font-semibold">
      Confirm Order
    </button>
  `;
    cartBox.appendChild(footer);
  }

  // cartBox.appendChild(itemsDiv);
  cartContainer.appendChild(cartBox);
}

// Add to Cart
function addToCart(id) {
  const item = desserts.find((d) => d.id === id);
  const cartItem = cart.find((ci) => ci.id === id);

  if (cartItem) {
    cartItem.qty++;
  } else {
    cart.push({ ...item, qty: 1 });
  }
  renderCart();
  renderMenu(); // update card display
}

// Update Qty
function updateQty(id, change) {
  const cartItem = cart.find((ci) => ci.id === id);
  if (cartItem) {
    cartItem.qty += change;
    if (cartItem.qty <= 0) {
      cart = cart.filter((ci) => ci.id !== id);
    }
  }
  renderCart();
  renderMenu();
}

// Remove from Cart
function removeFromCart(id) {
  cart = cart.filter((ci) => ci.id !== id);
  renderCart();
  renderMenu();
}

// Initialize
renderMenu();
renderCart();

// !!!!!!!!!!!!!!!!!!!!!!!!
// MODAL PART

// Open Checkout Modal (creates modal in JS)
function openCheckoutModal() {
  let total = 0;

  // Build checkout items list
  let itemsHTML = "";
  cart.forEach((item) => {
    total += item.price * item.qty;
    itemsHTML += `
      <div class="flex justify-between items-center border-t-gray-300">
        <div class="flex items-center space-x-3">
          <img src="${item.image}" alt="${
      item.name
    }" class="w-12 h-12 rounded-lg object-cover">
          <div class="text-left">
            <p class="font-semibold text-gray-800">${item.name}</p>
            <p class="text-md text-gray-500"><span class="text-red-800 text-lg font-medium"> ${
              item.qty
            }x </span> <span class="ml-[10px]">@ $${item.price.toFixed(
               2
    )} </span> </p>
          </div>
        </div>
        <p class="font-semibold text-gray-800">$${(
          item.price * item.qty
        ).toFixed(2)}</p>
      </div>
      <hr style="color: silver;">
    `;
  });

  // Build modal structure
  const modal = document.createElement("div");
  modal.id = "checkout-modal";
  modal.className =
    "fixed inset-0 bg-opacity-40 flex items-center justify-center z-50 mt-[40px]";

  modal.innerHTML = `
    <div class="bg-white rounded-2xl shadow-md w-[30rem] p-8 relative">
      <button id="close-modal" class="absolute top-3 right-3">
        <img src="/icons/remove-item.svg" class="w-[12px] h-[15px]">
      </button>

        <div class="">
          <img src="/icons/success-check.svg" alt="success" class="w-10 h-10 mb-3">
          <h2 class="text-2xl font-bold text-gray-900 mb-2">Order Confirmed</h2>
          <p class="text-gray-500 mb-6">We hope you enjoy your food!</p>
        </div>
        

        <div class="w-full bg-rose-50 rounded-lg p-4 mb-6 space-y-4">
          ${itemsHTML}
          <div class="flex justify-between w-full text-lg font-semibold pt-4">
            <span>Order Total</span>
            <span class="font-bold text-xl text-gray-800">$${total.toFixed(
              2
            )}</span>
          </div>  
        </div>
        <button id="new-order" class="bg-red-700 hover:bg-red-800 text-white w-full h-[3rem] py-2 mt-5 rounded-[25px] font-semibold">
          Start New Order
        </button>
    </div>
  `;

  document.body.appendChild(modal);

  // Add close functionality
  document
    .getElementById("close-modal")
    .addEventListener("click", closeCheckoutModal);
  document.getElementById("new-order").addEventListener("click", startNewOrder);
}

// Close Checkout Modal
function closeCheckoutModal() {
  const modal = document.getElementById("checkout-modal");
  if (modal) modal.remove();
}

// Start New Order
function startNewOrder() {
  cart = [];
  renderCart();
  renderMenu();
  closeCheckoutModal();
}
