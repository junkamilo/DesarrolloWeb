import Card from "./card";


export const SectionGranos = () => {
  const section = document.createElement("section");
  const titulo = document.createElement("h2");
  const carousel = document.createElement("div");

  section.className = "product-category";
  titulo.className = "category-title";
  titulo.textContent = "Granos y Cereales";
  carousel.className = "product-carousel";

  // Una sola card representativa
  carousel.append(
    Card({
      badge: "Más Vendido",
      colorBadge: "#d08c60",
      img: "https://placehold.co/280x200/d08c60/ffffff?text=Lentejas",
      alt: "Lentejas",
      name: "Lentejas Pardinas",
      description: "Bolsa de 1kg, ricas en hierro",
      price: "$1.80"
    })
  );

  section.append(titulo, carousel);
  return section;
};


// === SECCIÓN 2: VERDURAS FRESCAS ===
export const SectionVerduras = () => {
  const section = document.createElement("section");
  const titulo = document.createElement("h2");
  const carousel = document.createElement("div");

  section.className = "product-category";
  titulo.className = "category-title";
  titulo.textContent = "Verduras Frescas";
  carousel.className = "product-carousel";

  carousel.append(
    Card({
      badge: "Oferta",
      colorBadge: "#e63946",
      img: "https://placehold.co/280x200/588157/ffffff?text=Tomates",
      alt: "Tomates",
      name: "Tomate Rama",
      description: "Aprox. 1kg, fresco de huerta",
      price: "$2.20"
    })
  );

  section.append(titulo, carousel);
  return section;
};


// === SECCIÓN 3: FRUTAS DE TEMPORADA ===
export const SectionFrutas = () => {
  const section = document.createElement("section");
  const titulo = document.createElement("h2");
  const carousel = document.createElement("div");

  section.className = "product-category";
  titulo.className = "category-title";
  titulo.textContent = "Frutas de Temporada";
  carousel.className = "product-carousel";

  carousel.append(
    Card({
      img: "https://placehold.co/280x200/ef233c/ffffff?text=Fresas",
      alt: "Fresas",
      name: "Fresas",
      description: "Caja de 400g",
      price: "$3.50"
    })
  );

  section.append(titulo, carousel);
  return section;
};


// === SECCIÓN 4: PROTEÍNAS Y CARNES ===
export const SectionProteinas = () => {
  const section = document.createElement("section");
  const titulo = document.createElement("h2");
  const carousel = document.createElement("div");

  section.className = "product-category";
  titulo.className = "category-title";
  titulo.textContent = "Proteínas y Carnes";
  carousel.className = "product-carousel";

  carousel.append(
    Card({
      img: "https://placehold.co/280x200/a44200/ffffff?text=Pollo",
      alt: "Pollo",
      name: "Pechuga de Pollo",
      description: "Bandeja de 500g",
      price: "$4.50"
    })
  );

  section.append(titulo, carousel);
  return section;
};


// === SECCIÓN 5: LÁCTEOS Y HUEVOS ===
export const SectionLacteos = () => {
  const section = document.createElement("section");
  const titulo = document.createElement("h2");
  const carousel = document.createElement("div");

  section.className = "product-category";
  titulo.className = "category-title";
  titulo.textContent = "Lácteos y Huevos";
  carousel.className = "product-carousel";

  carousel.append(
    Card({
      img: "https://placehold.co/280x200/cad2c5/333333?text=Leche",
      alt: "Leche Fresca",
      name: "Leche Fresca Entera",
      description: "Botella de 1.5L",
      price: "$1.60"
    })
  );

  section.append(titulo, carousel);
  return section;
};
