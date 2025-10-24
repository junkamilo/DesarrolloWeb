const closeIconSVG = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" width="28" height="28">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>`;

const trashIconSVG = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" width="18" height="18">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12.54 0c-.27.041-.54.082-.811.124m12.54 0c-3.27.045-6.536.045-9.806 0m9.806 0a48.63 48.63 0 00-4.904-.205m-4.904 0c-1.63.03-3.25.08-4.872.146M5.79 5.79L4.43 4.102a.75.75 0 00-1.06 1.06l1.36 1.368M19.21 5.79l1.36-1.368a.75.75 0 00-1.06-1.06l-1.36 1.368m0 0a.75.75 0 01-1.06 0l-1.36-1.368a.75.75 0 011.06-1.06l1.36 1.368z" />
</svg>`;

/**
 * Función auxiliar para crear un item de producto en el carrito (simulado)
 * @param {string} imgSrc - URL de la imagen (placeholder)
 * @param {string} name - Nombre del producto
 * @param {string} price - Precio del producto
 * @param {number} quantity - Cantidad
 */
const _createCartItem = (imgSrc, name, price, quantity) => {
  const cartItem = document.createElement("div");
  cartItem.className = "cart-item";

  // Imagen
  const imgContainer = document.createElement("div");
  imgContainer.className = "cart-item-image";
  const img = document.createElement("img");
  img.src = imgSrc;
  img.alt = name;
  imgContainer.appendChild(img);

  // Info (Nombre y Precio)
  const info = document.createElement("div");
  info.className = "cart-item-info";
  const infoName = document.createElement("p");
  infoName.className = "cart-item-name";
  infoName.textContent = name;
  const infoPrice = document.createElement("p");
  infoPrice.className = "cart-item-price";
  infoPrice.textContent = price;
  info.append(infoName, infoPrice);

  // Acciones (Cantidad y Eliminar)
  const actions = document.createElement("div");
  actions.className = "cart-item-actions";

  // Selector de cantidad
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

  // Botón de eliminar
  const removeBtn = document.createElement("button");
  removeBtn.className = "remove-item-btn";
  removeBtn.innerHTML = trashIconSVG;
  removeBtn.setAttribute("aria-label", "Eliminar producto");

  actions.append(quantitySelector, removeBtn);

  // Ensamblar item
  cartItem.append(imgContainer, info, actions);
  return cartItem;
};

/**
 * Componente Principal del Modal de Carrito
 * Crea el DOM del modal y el overlay.
 * Devuelve los elementos y un método 'init' para añadir los listeners.
 */
export const CartModal = () => {
  // --- 1. Crear Overlay ---
  const overlay = document.createElement("div");
  overlay.className = "cart-overlay";
  overlay.id = "cart-overlay";

  // --- 2. Crear Modal (Sidebar) ---
  const modal = document.createElement("aside");
  modal.className = "cart-modal";
  modal.id = "cart-modal";

  // --- 2a. Header del Modal ---
  const modalHeader = document.createElement("div");
  modalHeader.className = "cart-header";

  const headerTitle = document.createElement("h3");
  headerTitle.textContent = "Mi Carrito";

  const closeButton = document.createElement("button");
  closeButton.className = "cart-close-btn";
  closeButton.id = "cart-close-btn";
  closeButton.innerHTML = closeIconSVG;
  closeButton.setAttribute("aria-label", "Cerrar carrito");

  modalHeader.append(headerTitle, closeButton);

  // --- 2b. Body del Modal (Lista de productos) ---
  const modalBody = document.createElement("div");
  modalBody.className = "cart-body";

  // --- (Simulación) ---
  // Cambia esto por la lógica real.
  const hasItems = true;

  if (hasItems) {
    const itemList = document.createElement("div");
    itemList.className = "cart-item-list";

    // Productos simulados
    itemList.appendChild(
      _createCartItem(
        "https://placehold.co/80x80/588157/ffffff?text=Tomate",
        "Tomate Rama",
        "$2.20",
        2
      )
    );
    itemList.appendChild(
      _createCartItem(
        "https://placehold.co/80x80/fca311/333333?text=Naranja",
        "Naranja de Zumo",
        "$3.00",
        1
      )
    );
    itemList.appendChild(
      _createCartItem(
        "https://placehold.co/80x80/d08c60/ffffff?text=Lentejas",
        "Lentejas Pardinas",
        "$1.80",
        3
      )
    );

    modalBody.appendChild(itemList);
  } else {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "cart-empty-message";
    emptyMessage.textContent = "Tu carrito está vacío.";
    modalBody.appendChild(emptyMessage);
  }
  // --- Fin Simulación ---

  // --- 2c. Footer del Modal (Subtotal y Checkout) ---
  const modalFooter = document.createElement("div");
  modalFooter.className = "cart-footer";

  const subtotal = document.createElement("div");
  subtotal.className = "cart-subtotal";
  const subtotalLabel = document.createElement("span");
  subtotalLabel.textContent = "Subtotal";
  const subtotalValue = document.createElement("span");
  subtotalValue.textContent = "$10.60"; // Valor simulado
  subtotal.append(subtotalLabel, subtotalValue);

  const checkoutButton = document.createElement("a");
  checkoutButton.className = "cart-checkout-button";
  checkoutButton.href = "#"; // Enlace a la página de checkout
  checkoutButton.textContent = "Finalizar Compra";

  modalFooter.append(subtotal, checkoutButton);

  // --- 3. Ensamblar Modal ---
  modal.append(modalHeader, modalBody, modalFooter);

  /**
   * Método de inicialización
   * Busca los triggers y añade los listeners para abrir/cerrar.
   * @param {string} triggerSelector - El selector del botón que abre el modal (ej: ".cart-button")
   * @param {string} appRootSelector - El selector del root de la app (ej: "body" o "#app")
   */
  const init = (triggerSelector, appRootSelector) => {
    const trigger = document.querySelector(triggerSelector);
    const appRoot = document.querySelector(appRootSelector);

    if (!trigger || !appRoot) {
      console.error(
        "No se pudo inicializar el modal del carrito. Trigger o Root no encontrados."
      );
      return;
    }

    // Añadir modal y overlay al DOM (ocultos)
    appRoot.append(overlay, modal);

    // Listeners para ABRIR
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      overlay.classList.add("active");
      modal.classList.add("active");
    });

    // Listeners para CERRAR
    const closeAll = () => {
      overlay.classList.remove("active");
      modal.classList.remove("active");
    };

    closeButton.addEventListener("click", closeAll);
    overlay.addEventListener("click", closeAll);
  };

  // Devuelve el método init y los elementos (por si se necesitan)
  return {
    init,
  };
};

export default CartModal;
