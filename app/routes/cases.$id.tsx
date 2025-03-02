import { type LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Layout } from "~/components/Layout";
import { Card, CardContent, CardHeader } from "~/components/ui/Card";
import { Button } from "~/components/ui/Button";
import { type Case, estadosCaso, tiposCaso, prioridadesCaso } from "~/types/case";

// Datos de ejemplo - reemplazar con llamada API real
const casoDePrueba: Case = {
  id: "1",
  title: "Problema de Calidad de Producto #123",
  type: "non_conformity",
  status: "open",
  priority: "high",
  createdAt: "2023-12-01T10:00:00Z",
  updatedAt: "2023-12-01T10:00:00Z",
  assignedTo: "Juan Pérez"
};

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ case: casoDePrueba });
}

export default function VisualizarCaso() {
  const { case: caso } = useLoaderData<typeof loader>();

  return (
    <Layout>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">{caso.title}</h1>
          <div className="flex gap-2">
            <Button
              variant="secondary"
              onClick={() => window.location.href = `/cases/${caso.id}/edit`}
            >
              Modificar Caso
            </Button>
            <Button
              variant="secondary"
              onClick={() => window.location.href = "/cases"}
            >
              Volver al Listado
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>Estado Actual</CardHeader>
            <CardContent>
              <span className="font-semibold">
                {estadosCaso[caso.status]}
              </span>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>Tipo de Caso</CardHeader>
            <CardContent>
              <span className="font-semibold">
                {tiposCaso[caso.type]}
              </span>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>Nivel de Prioridad</CardHeader>
            <CardContent>
              <span className="font-semibold">
                {prioridadesCaso[caso.priority]}
              </span>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>Información Detallada</CardHeader>
          <CardContent>
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <dt className="text-sm font-medium text-gray-500">Responsable Asignado</dt>
                <dd className="mt-1 text-sm text-gray-900">{caso.assignedTo}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Fecha de Registro</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {new Date(caso.createdAt).toLocaleString('es-ES')}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Última Modificación</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {new Date(caso.updatedAt).toLocaleString('es-ES')}
                </dd>
              </div>
            </dl>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
