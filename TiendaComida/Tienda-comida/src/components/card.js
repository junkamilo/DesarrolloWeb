import { PostData } from "../data/data";
import Alert from "../helpers/swerAlert";

export const Card = ({
  badge = "",
  colorBadge = "",
  img = "https://placehold.co/280x200/d08c60/ffffff?text=Producto",
  alt = "Producto",
  name = "Nombre del producto",
  description = "Descripción del producto",
  price = "$0.00",
  id,
} = {}) => {
  // Crear los elementos principales
  const card = document.createElement("div");
  const imageContainer = document.createElement("div");
  const badgeEl = document.createElement("span");
  const imageEl = document.createElement("img");
  const buttonAdd = document.createElement("button");
  const svgPlus = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const pathPlus = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );

  const content = document.createElement("div");
  const nameEl = document.createElement("h3");
  const descriptionEl = document.createElement("p");
  const footer = document.createElement("div");
  const priceEl = document.createElement("span");

  // Clases y estructura
  card.className = "product-card";
  imageContainer.className = "card-image-container";
  content.className = "card-content";
  nameEl.className = "product-name";
  descriptionEl.className = "product-description";
  footer.className = "product-footer";
  priceEl.className = "product-price";

  // Badge
  if (badge) {
    badgeEl.className = "product-badge";
    badgeEl.textContent = badge;
    badgeEl.style.backgroundColor = colorBadge;
    imageContainer.appendChild(badgeEl);
  }

  // Imagen
  imageEl.src = img;
  imageEl.alt = alt;
  imageEl.className = "product-image";

  // Botón de agregar
  buttonAdd.className = "add-to-cart-btn";
  buttonAdd.setAttribute("aria-label", `Agregar ${name} al carrito`);
  const alerta = new Alert();
  
  buttonAdd.addEventListener("click", () => {
    alerta.success(`Tu producto ${name} fue agregado al carrito`);
    PostData(id, name, price);
  });

  svgPlus.classList.add("icon-plus");
  svgPlus.setAttribute("viewBox", "0 0 24 24");
  svgPlus.setAttribute("fill", "none");
  svgPlus.setAttribute("stroke-width", "2.5");
  svgPlus.setAttribute("stroke", "currentColor");

  pathPlus.setAttribute("stroke-linecap", "round");
  pathPlus.setAttribute("stroke-linejoin", "round");
  pathPlus.setAttribute("d", "M12 4.5v15m7.5-7.5h-15");

  svgPlus.appendChild(pathPlus);
  buttonAdd.appendChild(svgPlus);

  // Ensamblar imagen
  imageContainer.append(imageEl, buttonAdd);

  // Contenido
  nameEl.textContent = name;
  descriptionEl.textContent = description;
  priceEl.textContent = price;

  footer.append(priceEl);
  content.append(nameEl, descriptionEl, footer);

  // Estructura final
  card.append(imageContainer, content);

  return card;
};

export default Card;
