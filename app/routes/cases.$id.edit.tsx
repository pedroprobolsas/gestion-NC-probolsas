import { type LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Layout } from "~/components/Layout";
import { Button } from "~/components/ui/Button";
import { Card, CardContent, CardHeader } from "~/components/ui/Card";
import { type Case } from "~/types/case";

// Datos de ejemplo - reemplazar con llamada API real
const casoDePrueba: Case = {
  id: "1",
  title: "Problema de Calidad de Producto #123",
  type: "non_conformity",
  status: "open",
  priority: "high",
  createdAt: "2023-12-01T10:00:00Z",
  updatedAt: "2023-12-01T10:00:00Z",
  assignedTo: "Juan Pérez",
  area: "calidad",
  client: "Cliente Ejemplo",
  reportedBy: "Juan Pérez",
  reporterEmail: "juan@ejemplo.com",
  description: "Descripción del problema"
};

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ case: casoDePrueba });
}

export default function EditarCaso() {
  const { case: caso } = useLoaderData<typeof loader>();

  return (
    <Layout>
      <div className="max-w-3xl mx-auto space-y-4">
        <h1 className="text-2xl font-bold">Editar Caso</h1>

        <Card>
          <CardHeader>Información del Caso</CardHeader>
          <CardContent>
            <form method="post" className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Título
                  </label>
                  <input
                    type="text"
                    name="title"
                    defaultValue={caso.title}
                    className="w-full rounded-md border px-3 py-2"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Tipo de Caso
                  </label>
                  <select
                    name="type"
                    defaultValue={caso.type}
                    className="w-full rounded-md border px-3 py-2"
                  >
                    <option value="non_conformity">No Conformidad</option>
                    <option value="complaint">Reclamo</option>
                    <option value="improvement">Mejora</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Cliente
                  </label>
                  <input
                    type="text"
                    name="client"
                    defaultValue={caso.client}
                    className="w-full rounded-md border px-3 py-2"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Área
                  </label>
                  <select
                    name="area"
                    defaultValue={caso.area}
                    className="w-full rounded-md border px-3 py-2"
                  >
                    <option value="produccion">Producción</option>
                    <option value="calidad">Calidad</option>
                    <option value="ventas">Ventas</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Responsable
                  </label>
                  <input
                    type="text"
                    name="assignedTo"
                    defaultValue={caso.assignedTo}
                    className="w-full rounded-md border px-3 py-2"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Estado
                  </label>
                  <select
                    name="status"
                    defaultValue={caso.status}
                    className="w-full rounded-md border px-3 py-2"
                  >
                    <option value="open">Abierto</option>
                    <option value="in_progress">En Proceso</option>
                    <option value="resolved">Resuelto</option>
                    <option value="closed">Cerrado</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Descripción
                </label>
                <textarea
                  name="description"
                  defaultValue={caso.description}
                  rows={4}
                  className="w-full rounded-md border px-3 py-2"
                />
              </div>

              <div className="flex justify-end gap-4">
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => window.history.back()}
                >
                  Cancelar
                </Button>
                <Button type="submit">
                  Guardar Cambios
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
