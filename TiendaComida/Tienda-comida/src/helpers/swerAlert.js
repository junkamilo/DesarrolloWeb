import Swal from "sweetalert2"; // Mejor así en módulos ES

class Alert {
  info() {
    Swal.fire({
      title: "Accion para otra version!",
      icon: "info",
      draggable: true,
    });
  }
  success(texto) {
    Swal.fire({
      title: texto,
      icon: "success",
      draggable: true,
    });
  }
}

export default Alert;

