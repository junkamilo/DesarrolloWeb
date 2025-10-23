import Header from './components/header';
import  nav  from './components/nav';
import './style.css'
//elegimos el elemento principal
const app = document.getElementById("app");
app.classList.add("app-layout");

//instanciamos los componentes
const navar = nav();
const header = Header();
