import { DeleteData, GetData } from "../data/data";

const closeIconSVG = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" width="28" height="28">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>`;

const trashIconSVG = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" width="18" height="18">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12.54 0c-.27.041-.54.082-.811.124m12.54 0c-3.27.045-6.536.045-9.806 0m9.806 0a48.63 48.63 0 00-4.904-.205m-4.904 0c-1.63.03-3.25.08-4.872.146M5.79 5.79L4.43 4.102a.75.75 0 00-1.06 1.06l1.36 1.368M19.21 5.79l1.36-1.368a.75.75 0 00-1.06-1.06l-1.36 1.368m0 0a.75.75 0 01-1.06 0l-1.36-1.368a.75.75 0 011.06-1.06l1.36 1.368z" />
</svg>`;

/**
 * Crear un item del carrito a partir de la data
 */
const _createCartItem = (product) => {
  const { id ,img, name, price, quantity = 1 } = product;

  const cartItem = document.createElement("div");
  cartItem.className = "cart-item";

  // Imagen
  const imgContainer = document.createElement("div");
  imgContainer.className = "cart-item-image";
  const imgEl = document.createElement("img");
  imgEl.src = img || "https://placehold.co/80x80?text=Producto";
  imgEl.alt = name;
  imgContainer.appendChild(imgEl);

  // Info
  const info = document.createElement("div");
  info.className = "cart-item-info";
  const infoName = document.createElement("p");
  infoName.className = "cart-item-name";
  infoName.textContent = name;
  const infoPrice = document.createElement("p");
  infoPrice.className = "cart-item-price";
  infoPrice.textContent = `$${price}`;
  info.append(infoName, infoPrice);

  // Acciones
  const actions = document.createElement("div");
  actions.className = "cart-item-actions";

  const quantitySelector = document.createElement("div");
  quantitySelector.className = "quantity-selector";
  const btnMinus = document.createElement("button");
  btnMinus.className = "quantity-btn";
  btnMinus.innerHTML = "&ndash;";
  const quantityDisplay = document.createElement("span");
  quantityDisplay.className = "quantity-display";
  quantityDisplay.textContent = quantity;
  const btnPlus = document.createElement("button");
  btnPlus.className = "quantity-btn";
  btnPlus.innerHTML = "+";
  quantitySelector.append(btnMinus, quantityDisplay, btnPlus);

  const removeBtn = document.createElement("button");
  removeBtn.className = "remove-item-btn";
  removeBtn.innerHTML = trashIconSVG;
  removeBtn.setAttribute("aria-label", "Eliminar producto");

  actions.append(quantitySelector, removeBtn);

  removeBtn.addEventListener("click",(e)=>{
    DeleteData(id);
    
  })

  cartItem.append(imgContainer, info, actions);

  return cartItem;
};

/**
 * Modal de Carrito
 */
export const CartModal = async () => {
  const productos = await GetData("carritoCompras"); // Trae los productos

  const overlay = document.createElement("div");
  overlay.className = "cart-overlay";

  const modal = document.createElement("aside");
  modal.className = "cart-modal";

  // Header
  const modalHeader = document.createElement("div");
  modalHeader.className = "cart-header";
  const headerTitle = document.createElement("h3");
  headerTitle.textContent = "Mi Carrito";
  const closeButton = document.createElement("button");
  closeButton.className = "cart-close-btn";
  closeButton.innerHTML = closeIconSVG;
  closeButton.setAttribute("aria-label", "Cerrar carrito");
  modalHeader.append(headerTitle, closeButton);

  // Body
  const modalBody = document.createElement("div");
  modalBody.className = "cart-body";
  const itemList = document.createElement("div");
  itemList.className = "cart-item-list";

  if (productos.length > 0) {
    productos.forEach((p) => {
      const cartItem = _createCartItem(p);
      itemList.appendChild(cartItem);
    });
  } else {
    const emptyMsg = document.createElement("p");
    emptyMsg.className = "cart-empty-message";
    emptyMsg.textContent = "Tu carrito está vacío.";
    itemList.appendChild(emptyMsg);
  }

  modalBody.appendChild(itemList);

  // Footer
  const modalFooter = document.createElement("div");
  modalFooter.className = "cart-footer";
  const subtotal = document.createElement("div");
  subtotal.className = "cart-subtotal";
  const subtotalLabel = document.createElement("span");
  subtotalLabel.textContent = "Subtotal";
  const subtotalValue = document.createElement("span");
  subtotalValue.textContent = `$${productos.reduce((acc, p) => acc + p.price * (p.quantity || 1), 0)}`;
  subtotal.append(subtotalLabel, subtotalValue);

  const checkoutButton = document.createElement("a");
  checkoutButton.className = "cart-checkout-button";
  checkoutButton.href = "#";
  checkoutButton.textContent = "Finalizar Compra";

  modalFooter.append(subtotal, checkoutButton);

  modal.append(modalHeader, modalBody, modalFooter);

  const init = (triggerSelector, appRootSelector) => {
    const trigger = document.querySelector(triggerSelector);
    const appRoot = document.querySelector(appRootSelector);
    if (!trigger || !appRoot) {
      console.error("No se pudo inicializar el modal del carrito. Trigger o Root no encontrados.");
      return;
    }

    appRoot.append(overlay, modal);

    // Abrir modal
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      overlay.classList.add("active");
      modal.classList.add("active");
    });

    // Cerrar modal
    const closeAll = () => {
      overlay.classList.remove("active");
      modal.classList.remove("active");
    };
    closeButton.addEventListener("click", closeAll);
    overlay.addEventListener("click", closeAll);
  };

  return { init };
};

export default CartModal;

