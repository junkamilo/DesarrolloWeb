import {
  SectionGranos,
  SectionVerduras,
  SectionFrutas,
  SectionProteinas,
  SectionLacteos,
} from "./sections.js";

const Main = async () => {
  const main = document.createElement("main");
  const granos = await SectionGranos();
  const verduras = await SectionVerduras();
  const frutas = await SectionFrutas();
  const proteinas = await SectionProteinas();
  const lacteos = await SectionLacteos();
  main.classList.add("main-content");

  main.append(granos,verduras,frutas,proteinas,lacteos);

  return main;
};
export default Main;
