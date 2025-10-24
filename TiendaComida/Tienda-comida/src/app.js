import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';
import CartModal from './components/modalCarritoCompras';

import './style.css'
//elegimos el elemento principal
const contentBody = document.querySelector("body");
const app = document.getElementById("app");
app.classList.add("app-layout");
//instanciamos los componentes
const header = await Header();
const main = await Main();
const footer = Footer();
app.append(header,main,footer);
//instancias modal carro de compras
const miCarrito = await CartModal();
//llamamos la accion despues de agregar el header
miCarrito.init(".cart-button", "body");
contentBody.append(app);
