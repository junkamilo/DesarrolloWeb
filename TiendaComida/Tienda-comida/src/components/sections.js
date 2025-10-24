import { GetData } from "../data/data";
import Card from "./card";

export const SectionGranos = async () => {
  //instanciamos la data
  const granos = await GetData("granos");

  const section = document.createElement("section");
  const titulo = document.createElement("h2");
  const carousel = document.createElement("div");

  section.className = "product-category";
  titulo.className = "category-title";
  titulo.textContent = "Granos y Cereales";
  carousel.className = "product-carousel";

  granos.forEach(({ nombre, precio, descripcion }) => {
    carousel.append(
      Card({
        colorBadge: "#d08c60",
        img: `https://placehold.co/280x200/d08c60/ffffff?text=${nombre}`,
        alt: "Lentejas",
        name: nombre,
        description: descripcion,
        price: precio,
      })
    );
  });

  section.append(titulo, carousel);
  return section;
};

// === SECCIÓN 2: VERDURAS FRESCAS ===
export const SectionVerduras = async () => {
  //instanciamos la data
  const verduras = await GetData("verduras");

  const section = document.createElement("section");
  const titulo = document.createElement("h2");
  const carousel = document.createElement("div");

  section.className = "product-category";
  titulo.className = "category-title";
  titulo.textContent = "Verduras Frescas";
  carousel.className = "product-carousel";

  verduras.forEach(({ nombre, precio, descripcion }) => {
    carousel.append(
      Card({
        colorBadge: "#d08c60",
        img: `https://placehold.co/280x200/d08c60/ffffff?text=${nombre}`,
        alt: "Lentejas",
        name: nombre,
        description: descripcion,
        price: precio,
      })
    );
  });

  section.append(titulo, carousel);
  return section;
};

// === SECCIÓN 3: FRUTAS DE TEMPORADA ===
export const SectionFrutas = async () => {
  //instanciamos la data
  const frutas = await GetData("frutas");

  const section = document.createElement("section");
  const titulo = document.createElement("h2");
  const carousel = document.createElement("div");

  section.className = "product-category";
  titulo.className = "category-title";
  titulo.textContent = "Frutas de Temporada";
  carousel.className = "product-carousel";

  frutas.forEach(({ nombre, precio, descripcion }) => {
    carousel.append(
      Card({
        colorBadge: "#d08c60",
        img: `https://placehold.co/280x200/d08c60/ffffff?text=${nombre}`,
        alt: "Lentejas",
        name: nombre,
        description: descripcion,
        price: precio,
      })
    );
  });

  section.append(titulo, carousel);
  return section;
};

// === SECCIÓN 4: PROTEÍNAS Y CARNES ===
export const SectionProteinas = async () => {
  //instanciamos la data
  const proteinas = await GetData("proteinas");

  const section = document.createElement("section");
  const titulo = document.createElement("h2");
  const carousel = document.createElement("div");

  section.className = "product-category";
  titulo.className = "category-title";
  titulo.textContent = "Proteínas y Carnes";
  carousel.className = "product-carousel";

  proteinas.forEach(({ nombre, precio, descripcion }) => {
    carousel.append(
      Card({
        colorBadge: "#d08c60",
        img: `https://placehold.co/280x200/d08c60/ffffff?text=${nombre}`,
        alt: "Lentejas",
        name: nombre,
        description: descripcion,
        price: precio,
      })
    );
  });

  section.append(titulo, carousel);
  return section;
};

// === SECCIÓN 5: LÁCTEOS Y HUEVOS ===
export const SectionLacteos = async () => {
  //instanciamos la data
  const lacteos = await GetData("productos_lacteos");

  const section = document.createElement("section");
  const titulo = document.createElement("h2");
  const carousel = document.createElement("div");

  section.className = "product-category";
  titulo.className = "category-title";
  titulo.textContent = "Lácteos y Huevos";
  carousel.className = "product-carousel";

  lacteos.forEach(({ nombre, precio, descripcion }) => {
    carousel.append(
      Card({
        colorBadge: "#d08c60",
        img: `https://placehold.co/280x200/d08c60/ffffff?text=${nombre}`,
        alt: "Lentejas",
        name: nombre,
        description: descripcion,
        price: precio,
      })
    );
  });

  section.append(titulo, carousel);
  return section;
};
