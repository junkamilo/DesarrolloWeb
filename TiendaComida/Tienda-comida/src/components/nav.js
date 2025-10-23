const nav = () => {
  // Crear elementos principales
  const navar = document.createElement("nav");
  const logoContainer = document.createElement("a");
  const buscador = document.createElement("div");
  const inputSearch = document.createElement("input");
  const buttonSearch = document.createElement("button");
  const svgSearch = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const pathSearch = document.createElementNS("http://www.w3.org/2000/svg", "path");

  const navActions = document.createElement("div");
  const cartButton = document.createElement("a");
  const svgCart = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const pathCart = document.createElementNS("http://www.w3.org/2000/svg", "path");
  const cartText = document.createElement("span");
  const cartBadge = document.createElement("span");

  const hamburger = document.createElement("div");
  const bar1 = document.createElement("span");
  const bar2 = document.createElement("span");
  const bar3 = document.createElement("span");

  // --- Atributos y clases ---
  navar.id = "nav";
  navar.className = "nav";

  // Logo
  logoContainer.href = "#";
  logoContainer.className = "logo-container";
  logoContainer.innerHTML = `
    <svg class="logo-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="30" height="30">
      <path d="M11.9999 1.07324C7.5499 1.07324 3.8642 4.12502 3.0985 8.38237C5.39718 7.59672 7.6322 8.65173 8.6186 10.6616C9.65882 12.773 8.75232 15.3373 6.81824 16.68C7.8658 20.2401 11.7011 22.9268 16.1511 22.9268C20.6011 22.9268 24.0827 19.4452 24.0827 14.9952C24.0827 7.7915 18.7037 1.07324 11.9999 1.07324ZM11.9999 11.4552C11.642 11.4552 11.3099 11.3787 11.0189 11.2332L10.9571 11.2023C9.07373 10.2307 8.35144 7.84653 9.32304 5.96316C10.2946 4.07979 12.6788 3.3575 14.5622 4.3291C16.4456 5.3007 17.1678 7.68487 16.1962 9.56824C15.485 10.922 13.7997 11.4552 11.9999 11.4552Z"></path>
    </svg>
    Mercado Fresco
  `;

  // Buscador
  buscador.className = "content-buscador";
  inputSearch.type = "search";
  inputSearch.className = "buscador";
  inputSearch.placeholder = "Buscar granos, verduras, frutas...";

  buttonSearch.className = "search-button";
  buttonSearch.setAttribute("aria-label", "Buscar");

  svgSearch.classList.add("icon-search");
  svgSearch.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svgSearch.setAttribute("fill", "none");
  svgSearch.setAttribute("viewBox", "0 0 24 24");
  svgSearch.setAttribute("stroke-width", "2.5");
  svgSearch.setAttribute("stroke", "currentColor");

  pathSearch.setAttribute("stroke-linecap", "round");
  pathSearch.setAttribute("stroke-linejoin", "round");
  pathSearch.setAttribute("d", "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z");

  svgSearch.appendChild(pathSearch);
  buttonSearch.appendChild(svgSearch);

  buscador.append(inputSearch, buttonSearch);

  // Acciones (carrito)
  navActions.className = "nav-actions";
  cartButton.href = "#";
  cartButton.className = "cart-button";

  svgCart.classList.add("icon-cart");
  svgCart.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svgCart.setAttribute("fill", "none");
  svgCart.setAttribute("viewBox", "0 0 24 24");
  svgCart.setAttribute("stroke-width", "2");
  svgCart.setAttribute("stroke", "currentColor");

  pathCart.setAttribute("stroke-linecap", "round");
  pathCart.setAttribute("stroke-linejoin", "round");
  pathCart.setAttribute("d", "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c.61 0 1.121-.448 1.121-1.002L18.15 8.224a1.06 1.06 0 00-1.002-1.06H6.108l-1.13-4.24a1.06 1.06 0 00-1.002-1.06H2.25v1.5zM16.5 18.75a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM8.25 18.75a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z");

  svgCart.appendChild(pathCart);

  cartText.className = "cart-text";
  cartText.textContent = "Carrito";

  cartBadge.className = "cart-badge";
  cartBadge.textContent = "3";

  cartButton.append(svgCart, cartText, cartBadge);
  navActions.appendChild(cartButton);

  // Hamburguesa
  hamburger.className = "hamburger-menu";
  hamburger.id = "hamburger-menu";
  bar1.className = "bar";
  bar2.className = "bar";
  bar3.className = "bar";
  hamburger.append(bar1, bar2, bar3);

  // Ensamblar todo
  navar.append(logoContainer, buscador, navActions, hamburger);

  return navar;
};

export default nav;