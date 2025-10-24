export const GetData = async (categoria) => {
  try {
    const res = await fetch(`http://localhost:4000/${categoria}`);
    if (!res.ok) throw new Error(`Error HTTP ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error(`Error cargando ${categoria}:`, error);
  }
};

export const PostData = async (id, name, price) => {
  try {
    const res = await fetch("http://localhost:4000/carritoCompras", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        name,
        price,
      }),
    });

    if (!res.ok) throw new Error(`Error HTTP ${res.status}`);

    const data = await res.json();
    console.log("Producto agregado al carrito:", data);
    return data;
  } catch (error) {
    console.error("Error al agregar producto al carrito:", error);
  }
};

export const DeleteData = async (id) => {
  try {
    if (!id) throw new Error("Se requiere un ID para eliminar el producto.");

    const res = await fetch(`http://localhost:4000/carritoCompras/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`Error HTTP ${res.status}: ${res.statusText}`);
    }

    // jsonplaceholder retorna un objeto vacío al eliminar
    const data = await res.json();
    console.log(`Producto con ID ${id} eliminado correctamente`, data);

    return data;
  } catch (error) {
    console.error("Error al eliminar producto del carrito:", error);
    return null;
  }
};