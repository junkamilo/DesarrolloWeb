import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';

import './style.css'
//elegimos el elemento principal
const contentBody = document.querySelector("body");
const app = document.getElementById("app");
app.classList.add("app-layout");
//instanciamos los componentes
const header = Header();
const main = await Main();
const footer = Footer();
app.append(header,main,footer);
contentBody.append(app);
