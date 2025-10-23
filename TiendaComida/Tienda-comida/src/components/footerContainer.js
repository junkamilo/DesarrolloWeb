export const FooterContainer = () => {
  // Crear el contenedor principal
  const footercontainer = document.createElement("div");
  footercontainer.className = "footer-container";

  // === COLUMNA 1: Logo y Newsletter ===
  const col1 = document.createElement("div");
  col1.className = "footer-col footer-col-main";

  // Logo
  const logoLink = document.createElement("a");
  logoLink.href = "#";
  logoLink.className = "logo-container logo-footer";

  const logoSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  logoSvg.classList.add("logo-icon");
  logoSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  logoSvg.setAttribute("viewBox", "0 0 24 24");
  logoSvg.setAttribute("fill", "currentColor");
  logoSvg.setAttribute("width", "30");
  logoSvg.setAttribute("height", "30");

  const logoPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
  logoPath.setAttribute(
    "d",
    "M11.9999 1.07324C7.5499 1.07324 3.8642 4.12502 3.0985 8.38237C5.39718 7.59672 7.6322 8.65173 8.6186 10.6616C9.65882 12.773 8.75232 15.3373 6.81824 16.68C7.8658 20.2401 11.7011 22.9268 16.1511 22.9268C20.6011 22.9268 24.0827 19.4452 24.0827 14.9952C24.0827 7.7915 18.7037 1.07324 11.9999 1.07324ZM11.9999 11.4552C11.642 11.4552 11.3099 11.3787 11.0189 11.2332L10.9571 11.2023C9.07373 10.2307 8.35144 7.84653 9.32304 5.96316C10.2946 4.07979 12.6788 3.3575 14.5622 4.3291C16.4456 5.3007 17.1678 7.68487 16.1962 9.56824C15.485 10.922 13.7997 11.4552 11.9999 11.4552Z"
  );

  logoSvg.appendChild(logoPath);
  logoLink.append(logoSvg, document.createTextNode("Mercado Fresco"));

  const tagline = document.createElement("p");
  tagline.className = "footer-tagline";
  tagline.textContent = "Tu mercado de confianza, en línea.";

  // Formulario Newsletter
  const form = document.createElement("form");
  form.className = "newsletter-form";

  const label = document.createElement("label");
  label.htmlFor = "newsletter";
  label.className = "newsletter-label";
  label.textContent = "Suscríbete a las ofertas";

  const inputGroup = document.createElement("div");
  inputGroup.className = "newsletter-input-group";

  const input = document.createElement("input");
  input.type = "email";
  input.id = "newsletter";
  input.className = "newsletter-input";
  input.placeholder = "tu@email.com";

  const button = document.createElement("button");
  button.type = "submit";
  button.className = "newsletter-button";
  button.setAttribute("aria-label", "Suscribirse");

  const svgArrow = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgArrow.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svgArrow.setAttribute("fill", "none");
  svgArrow.setAttribute("viewBox", "0 0 24 24");
  svgArrow.setAttribute("stroke-width", "2");
  svgArrow.setAttribute("stroke", "currentColor");
  svgArrow.setAttribute("width", "20");
  svgArrow.setAttribute("height", "20");

  const pathArrow = document.createElementNS("http://www.w3.org/2000/svg", "path");
  pathArrow.setAttribute("stroke-linecap", "round");
  pathArrow.setAttribute("stroke-linejoin", "round");
  pathArrow.setAttribute(
    "d",
    "M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.875L6 12z"
  );

  svgArrow.appendChild(pathArrow);
  button.appendChild(svgArrow);
  inputGroup.append(input, button);
  form.append(label, inputGroup);

  col1.append(logoLink, tagline, form);

  // === COLUMNA 2: Categorías ===
  const col2 = document.createElement("div");
  col2.className = "footer-col";

  const col2Title = document.createElement("h4");
  col2Title.className = "footer-col-title";
  col2Title.textContent = "Categorías";

  const col2List = document.createElement("ul");
  col2List.className = "footer-links";
  const categorias = [
    "Granos y Cereales",
    "Verduras",
    "Frutas",
    "Proteínas",
    "Lácteos y Huevos",
  ];
  categorias.forEach((cat) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = cat;
    li.appendChild(a);
    col2List.appendChild(li);
  });
  col2.append(col2Title, col2List);

  // === COLUMNA 3: Nosotros ===
  const col3 = document.createElement("div");
  col3.className = "footer-col";

  const col3Title = document.createElement("h4");
  col3Title.className = "footer-col-title";
  col3Title.textContent = "Sobre Nosotros";

  const col3List = document.createElement("ul");
  col3List.className = "footer-links";
  ["Nuestra Historia", "Trabaja con Nosotros", "Prensa"].forEach((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = item;
    li.appendChild(a);
    col3List.appendChild(li);
  });
  col3.append(col3Title, col3List);

  // === COLUMNA 4: Ayuda ===
  const col4 = document.createElement("div");
  col4.className = "footer-col";

  const col4Title = document.createElement("h4");
  col4Title.className = "footer-col-title";
  col4Title.textContent = "Ayuda";

  const col4List = document.createElement("ul");
  col4List.className = "footer-links";
  [
    "Preguntas Frecuentes",
    "Contacto",
    "Política de Envíos",
    "Términos y Condiciones",
  ].forEach((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = item;
    li.appendChild(a);
    col4List.appendChild(li);
  });
  col4.append(col4Title, col4List);

  // === ESTRUCTURA FINAL ===
  footercontainer.append(col1, col2, col3, col4);

  return footercontainer;
};

export default FooterContainer;
