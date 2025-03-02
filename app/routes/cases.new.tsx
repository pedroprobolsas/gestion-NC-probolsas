import { type ActionFunctionArgs, json, redirect } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { Layout } from "~/components/Layout";
import { Button } from "~/components/ui/Button";
import { Card, CardContent, CardHeader } from "~/components/ui/Card";
import { type CaseType } from "~/types/case";

const areas = [
  "produccion",
  "calidad",
  "ventas",
  "despachos",
  "gerencia",
  "contabilidad",
  "marketing",
  "talento humano",
  "cliente"
] as const;

type Area = typeof areas[number];

interface FormErrors {
  title?: string;
  client?: string;
  productionOrder?: string;
  productCode?: string;
  reportedBy?: string;
  reporterEmail?: string;
  area?: string;
  description?: string;
  type?: string;
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const errors: FormErrors = {};

  // Validación básica
  if (!formData.get("title")) errors.title = "El título es requerido";
  if (!formData.get("client")) errors.client = "El cliente es requerido";
  if (!formData.get("reportedBy")) errors.reportedBy = "El nombre es requerido";
  if (!formData.get("reporterEmail")) errors.reporterEmail = "El correo es requerido";
  if (!formData.get("description")) errors.description = "La descripción es requerida";
  if (!formData.get("type")) errors.type = "El tipo es requerido";

  if (Object.keys(errors).length > 0) {
    return json({ errors });
  }

  // Aquí iría la lógica para guardar el caso
  return redirect("/cases");
}

export default function NewCase() {
  const actionData = useActionData<typeof action>();

  return (
    <Layout>
      <div className="max-w-3xl mx-auto space-y-4">
        <h1 className="text-2xl font-bold">Registrar Nuevo Caso</h1>

        <Card>
          <CardHeader>Información del Caso</CardHeader>
          <CardContent>
            <Form method="post" className="space-y-6" encType="multipart/form-data">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Fecha
                  </label>
                  <input
                    type="date"
                    name="date"
                    className="w-full rounded-md border px-3 py-2"
                    defaultValue={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Tipo de Caso
                  </label>
                  <select
                    name="type"
                    className="w-full rounded-md border px-3 py-2"
                  >
                    <option value="">Seleccione un tipo</option>
                    <option value="non_conformity">No Conformidad</option>
                    <option value="complaint">Reclamo</option>
                    <option value="improvement">Mejora</option>
                  </select>
                  {actionData?.errors?.type && (
                    <p className="text-red-600 text-sm">{actionData.errors.type}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Cliente
                  </label>
                  <input
                    type="text"
                    name="client"
                    className="w-full rounded-md border px-3 py-2"
                    placeholder="Nombre del cliente"
                  />
                  {actionData?.errors?.client && (
                    <p className="text-red-600 text-sm">{actionData.errors.client}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Orden de Producción
                  </label>
                  <input
                    type="text"
                    name="productionOrder"
                    className="w-full rounded-md border px-3 py-2"
                    placeholder="Número de orden"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Código de Producto
                  </label>
                  <input
                    type="text"
                    name="productCode"
                    className="w-full rounded-md border px-3 py-2"
                    placeholder="Código del producto"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Área
                  </label>
                  <select
                    name="area"
                    className="w-full rounded-md border px-3 py-2"
                  >
                    <option value="">Seleccione un área</option>
                    {areas.map((area) => (
                      <option key={area} value={area}>
                        {area.charAt(0).toUpperCase() + area.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Reportado por
                  </label>
                  <input
                    type="text"
                    name="reportedBy"
                    className="w-full rounded-md border px-3 py-2"
                    placeholder="Nombre completo"
                  />
                  {actionData?.errors?.reportedBy && (
                    <p className="text-red-600 text-sm">{actionData.errors.reportedBy}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    name="reporterEmail"
                    className="w-full rounded-md border px-3 py-2"
                    placeholder="correo@ejemplo.com"
                  />
                  {actionData?.errors?.reporterEmail && (
                    <p className="text-red-600 text-sm">{actionData.errors.reporterEmail}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Descripción del caso
                </label>
                <textarea
                  name="description"
                  rows={4}
                  className="w-full rounded-md border px-3 py-2"
                  placeholder="Describe el caso o mejora..."
                />
                {actionData?.errors?.description && (
                  <p className="text-red-600 text-sm">{actionData.errors.description}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Evidencia fotográfica
                </label>
                <input
                  type="file"
                  name="evidence"
                  accept="image/*"
                  multiple
                  className="w-full"
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
                  Crear Caso
                </Button>
              </div>
            </Form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
