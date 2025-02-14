const API_URL = "http://localhost:3001/productos"; // 

export async function getProductos() {
    const res = await fetch(`${API_URL}`);
    if (!res.ok) throw new Error("Error al obtener productos");
    return res.json();
  }
  
  export async function getProductoById(id: string) {
    const res = await fetch(`${API_URL}/${id}`);
    if (!res.ok) throw new Error("Error al obtener producto");
    return res.json();
  }
  
  export async function createProducto(producto: { nombre: string; precio: number; descripcion: string }) {
    try {
      const res = await fetch(`${API_URL}/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(producto),
      });
  
      const data = await res.json();
      
      if (!res.ok) {
        console.error("Error en la respuesta del servidor:", data);
        throw new Error(data.message || "Error al crear producto");
      }
  
      return data;
    } catch (error) {
      console.error("Error en createProducto:", error);
      throw error;
    }
  }
  
  
  export async function updateProducto(id: string, producto: { nombre: string; precio: number; descripcion: string }) {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(producto),
    });
  
    if (!res.ok) throw new Error("Error al actualizar producto");
    return res.json();
  }
  
  export async function deleteProducto(id: string) {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
  
    if (!res.ok) throw new Error("Error al eliminar producto");
    return res.json();
  }
  