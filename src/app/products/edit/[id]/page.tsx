"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { getProductoById, updateProducto } from "@/utils/api";

//  Define la interfaz del producto
interface Producto {
  id: string;
  nombre: string;
  precio: number;
  descripcion: string;
}

export default function EditarProducto() {
  const { id } = useParams();
  const router = useRouter();
  const [producto, setProducto] = useState<Producto | null>(null);

  useEffect(() => {
    if (id) {
      fetchProducto();
    }
  }, [id]);

  const fetchProducto = async () => {
    const data: Producto = await getProductoById(id as string);
    setProducto(data);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!producto) return;
  
    const { name, value } = e.target;
  
    setProducto({
      ...producto,
      [name]: name === "precio" ? parseFloat(value) || 0 : value, // Convertir 'precio' a número
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!producto) return;
    await updateProducto(id as string, producto);
    router.push("/products");
  };

  if (!producto) {
    return <div className="text-center text-gray-500">Cargando...</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-4">Editar Producto</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nombre"
            value={producto.nombre}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-2"
            required
          />
          <input
            type="number"
            name="precio"
            value={producto.precio}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-2"
            required
          />
          <textarea
            name="descripcion"
            value={producto.descripcion}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-2"
            required
          />
          <button type="submit" className="bg-blue-500 text-white w-full p-2 rounded">
            Guardar Cambios
          </button>
        </form>
      </div>
    </div>
  );
}