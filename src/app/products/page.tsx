"use client";

import { useEffect, useState } from "react";
import { getProductos, deleteProducto } from "@/utils/api";
import { useRouter } from "next/navigation";



// Define la interfaz del producto
interface Producto {
  id: string;
  nombre: string;
  precio: number;
  descripcion: string;
}

export default function ProductosPage() {
  const [productos, setProductos] = useState<Producto[]>([]); // Define el estado correctamente
  const router = useRouter();

  useEffect(() => {
    fetchProductos();
  }, []);

  const fetchProductos = async () => {
    try {
      const data: Producto[] = await getProductos(); // Obtiene los productos
      if (data) {
        setProductos(data); // Solo actualiza el estado si hay datos válidos
      }
    } catch (error) {
      console.error("Error al obtener productos:", error);
      setProductos([]); // Opcional: limpia el estado en caso de error
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("¿Estás seguro de eliminar este producto?")) {
      await deleteProducto(id);
      fetchProductos();
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Lista de Productos</h1>
        <div className="flex justify-center mb-4">
          <button
            onClick={() => router.push("/products/create")}
            className="bg-blue-500 text-white px-4 py-2 rounded w-full"
          >  
            Crear Producto
          </button>
        </div>
        <table className="w-full border-collapse border text-center">
          <thead>
            <tr className="bg-foreground">
              <th className="border p-2 border-black">Nombre</th>
              <th className="border p-2 border-black">Precio</th>
              <th className="border p-2 border-black">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((p) => (
              <tr key={p.id} className="border border-black">
                <td className="border p-2 border-black">{p.nombre}</td>
                <td className="border p-2 border-black">${p.precio}</td>
                <td className="border p-2 border-black">
                  <button
                    className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
                    onClick={() => router.push(`/products/edit/${p.id}`)}
                  >
                    Editar
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded"
                    onClick={() => handleDelete(p.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}