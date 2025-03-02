import { json, type ActionFunctionArgs } from "@remix-run/node";
import { useLoaderData, useNavigation, Form, useActionData } from "@remix-run/react";
import { Layout } from "~/components/Layout";
import { Card, CardContent, CardHeader } from "~/components/ui/Card";
import { Button } from "~/components/ui/Button";
import { motion } from "framer-motion";
import { Save } from "lucide-react";
import type { Settings } from "~/types/settings";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export async function loader() {
  // Simulated settings - replace with actual DB call
  return json({
    general: {
      companyName: "Mi Empresa",
      email: "contacto@miempresa.com",
      phone: "+34 123 456 789"
    },
    notifications: {
      emailNotifications: true,
      dailyDigest: true,
      criticalAlerts: true
    },
    workflow: {
      requireApproval: true,
      autoCloseAfterDays: 30,
      defaultPriority: "medium"
    }
  } satisfies Settings);
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  
  const settings = {
    general: {
      companyName: formData.get("companyName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
    },
    notifications: {
      emailNotifications: formData.get("emailNotifications") === "on",
      dailyDigest: formData.get("dailyDigest") === "on",
      criticalAlerts: formData.get("criticalAlerts") === "on",
    },
    workflow: {
      requireApproval: formData.get("requireApproval") === "on",
      autoCloseAfterDays: Number(formData.get("autoCloseAfterDays")),
      defaultPriority: formData.get("defaultPriority"),
    },
  };
  
  // Simulated save - replace with actual DB update
  console.log("Saving settings:", settings);
  
  return json({ success: true, settings });
}

export default function Settings() {
  const settings = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Layout>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-6"
      >
        <motion.div variants={item}>
          <h1 className="text-2xl font-bold">Configuración</h1>
          {actionData?.success && (
            <p className="mt-2 text-sm text-green-600">
              Configuración guardada correctamente
            </p>
          )}
        </motion.div>

        <Form method="post">
          <motion.div variants={item} className="space-y-6">
            <Card>
              <CardHeader>Configuración General</CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                    Nombre de la Empresa
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    defaultValue={settings.general.companyName}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    defaultValue={settings.general.email}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    defaultValue={settings.general.phone}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>Notificaciones</CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="emailNotifications"
                    name="emailNotifications"
                    defaultChecked={settings.notifications.emailNotifications}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="emailNotifications" className="ml-2 block text-sm text-gray-900">
                    Notificaciones por email
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="dailyDigest"
                    name="dailyDigest"
                    defaultChecked={settings.notifications.dailyDigest}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="dailyDigest" className="ml-2 block text-sm text-gray-900">
                    Resumen diario
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="criticalAlerts"
                    name="criticalAlerts"
                    defaultChecked={settings.notifications.criticalAlerts}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="criticalAlerts" className="ml-2 block text-sm text-gray-900">
                    Alertas críticas
                  </label>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>Flujo de Trabajo</CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="requireApproval"
                    name="requireApproval"
                    defaultChecked={settings.workflow.requireApproval}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="requireApproval" className="ml-2 block text-sm text-gray-900">
                    Requerir aprobación
                  </label>
                </div>
                <div>
                  <label htmlFor="autoCloseAfterDays" className="block text-sm font-medium text-gray-700">
                    Cerrar automáticamente después de (días)
                  </label>
                  <input
                    type="number"
                    id="autoCloseAfterDays"
                    name="autoCloseAfterDays"
                    defaultValue={settings.workflow.autoCloseAfterDays}
                    min="1"
                    max="365"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="defaultPriority" className="block text-sm font-medium text-gray-700">
                    Prioridad por defecto
                  </label>
                  <select
                    id="defaultPriority"
                    name="defaultPriority"
                    defaultValue={settings.workflow.defaultPriority}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  >
                    <option value="low">Baja</option>
                    <option value="medium">Media</option>
                    <option value="high">Alta</option>
                  </select>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-end">
              <Button type="submit" disabled={isSubmitting}>
                <Save className="w-4 h-4 mr-2" />
                {isSubmitting ? "Guardando..." : "Guardar cambios"}
              </Button>
            </div>
          </motion.div>
        </Form>
      </motion.div>
    </Layout>
  );
}
