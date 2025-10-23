export const FooterBottom = () => {
  // Crear elementos principales
  const footerBottom = document.createElement("div");
  const copyright = document.createElement("p");
  const socialLinks = document.createElement("div");

  // Clases
  footerBottom.className = "footer-bottom";
  copyright.className = "copyright";
  socialLinks.className = "social-links";

  // Texto
  copyright.innerHTML = "&copy; 2024 Mercado Fresco. Todos los derechos reservados.";

  // ===== ICONOS =====
  // Facebook
  const facebookLink = document.createElement("a");
  facebookLink.href = "#";
  facebookLink.setAttribute("aria-label", "Facebook");

  const svgFacebook = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgFacebook.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svgFacebook.setAttribute("width", "24");
  svgFacebook.setAttribute("height", "24");
  svgFacebook.setAttribute("viewBox", "0 0 24 24");
  svgFacebook.setAttribute("fill", "currentColor");

  const pathFacebook = document.createElementNS("http://www.w3.org/2000/svg", "path");
  pathFacebook.setAttribute("d", "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z");

  svgFacebook.appendChild(pathFacebook);
  facebookLink.appendChild(svgFacebook);

  // Instagram
  const instagramLink = document.createElement("a");
  instagramLink.href = "#";
  instagramLink.setAttribute("aria-label", "Instagram");

  const svgInstagram = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgInstagram.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svgInstagram.setAttribute("width", "24");
  svgInstagram.setAttribute("height", "24");
  svgInstagram.setAttribute("viewBox", "0 0 24 24");
  svgInstagram.setAttribute("fill", "currentColor");

  const pathInstagram = document.createElementNS("http://www.w3.org/2000/svg", "path");
  pathInstagram.setAttribute(
    "d",
    "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.148 3.227-1.669 4.771-4.919 4.919-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.646-.07-4.85s.012-3.584.07-4.85c.148-3.227 1.669-4.771 4.919-4.919 1.266.058 1.646.07 4.85.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.059 1.689.073 4.948.073s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"
  );

  svgInstagram.appendChild(pathInstagram);
  instagramLink.appendChild(svgInstagram);

  // Twitter
  const twitterLink = document.createElement("a");
  twitterLink.href = "#";
  twitterLink.setAttribute("aria-label", "Twitter");

  const svgTwitter = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgTwitter.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svgTwitter.setAttribute("width", "24");
  svgTwitter.setAttribute("height", "24");
  svgTwitter.setAttribute("viewBox", "0 0 24 24");
  svgTwitter.setAttribute("fill", "currentColor");

  const pathTwitter = document.createElementNS("http://www.w3.org/2000/svg", "path");
  pathTwitter.setAttribute(
    "d",
    "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
  );

  svgTwitter.appendChild(pathTwitter);
  twitterLink.appendChild(svgTwitter);

  // Ensamblar redes
  socialLinks.append(facebookLink, instagramLink, twitterLink);

  // Estructura final
  footerBottom.append(copyright, socialLinks);

  return footerBottom;
};

export default FooterBottom;
