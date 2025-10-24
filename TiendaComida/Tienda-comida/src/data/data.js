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
