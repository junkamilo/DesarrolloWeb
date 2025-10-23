import FooterBottom from "./footerBottom";
import FooterContainer from "./footerContainer";

const Footer = () =>{
    const footer = document.createElement("footer");
    footer.className = "footer"
    footer.append(FooterContainer(),FooterBottom());

    return footer;
}
export default Footer;