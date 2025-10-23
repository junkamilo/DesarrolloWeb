const Header = () => {
  // Crear elementos principales
  const header = document.createElement("header");
  const heroContent = document.createElement("div");
  const titulo = document.createElement("h2");
  const descripcion = document.createElement("p");
  const boton = document.createElement("a");

  // Asignar clases y atributos
  header.id = "header";
  header.className = "header";

  heroContent.className = "hero-content";

  titulo.textContent = "Fresco, Rápido, a tu Puerta";

  descripcion.textContent = "Los mejores granos, verduras, frutas y proteínas, seleccionados para ti y entregados en tu hogar.";

  boton.href = "#main";
  boton.className = "cta-button";
  boton.textContent = "Empezar a Comprar";

  // Estructura jerárquica
  heroContent.append(titulo, descripcion, boton);
  header.appendChild(heroContent);

  // Retornar el header completo
  return header;
};
export default Header;
