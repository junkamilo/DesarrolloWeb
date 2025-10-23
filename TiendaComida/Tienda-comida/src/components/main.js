import {
  SectionGranos,
  SectionVerduras,
  SectionFrutas,
  SectionProteinas,
  SectionLacteos,
} from "./sections.js";

const Main = () => {
  const main = document.createElement("main");
  main.classList.add("main-content");

  main.append(
    SectionGranos(),
    SectionVerduras(),
    SectionFrutas(),
    SectionProteinas(),
    SectionLacteos()
  );

  return main;
};
export default Main;
