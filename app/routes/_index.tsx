import { type MetaFunction } from "@remix-run/node";
import { Layout } from "~/components/Layout";
import { Link } from "@remix-run/react";
import { Button } from "~/components/ui/Button";
import { Card, CardContent, CardHeader } from "~/components/ui/Card";
import { motion } from "framer-motion";

export const meta: MetaFunction = () => {
  return [
    { title: "Sistema de Gestión de Calidad" },
    { name: "description", content: "Sistema Digital de Gestión para Control de Calidad" },
  ];
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Index() {
  return (
    <Layout>
      <div className="space-y-6">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Sistema de Gestión de Calidad
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Digitalice la gestión de no conformidades, reclamos y mejoras
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <motion.div variants={item}>
            <Card>
              <CardHeader>Gestión de Casos</CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Gestione y realice seguimiento de casos incluyendo no conformidades,
                  reclamos y mejoras de manera eficiente.
                </p>
                <Link to="/cases/new">
                  <Button className="mt-4">Crear Nuevo Caso</Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card>
              <CardHeader>Panel de Control</CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Monitoree indicadores clave de rendimiento y siga el progreso con
                  análisis en tiempo real.
                </p>
                <Link to="/dashboard">
                  <Button className="mt-4">Ver Panel</Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card>
              <CardHeader>Configuración del Sistema</CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Configure ajustes del sistema, gestione departamentos y personalice
                  flujos de trabajo.
                </p>
                <Link to="/settings">
                  <Button className="mt-4">Administrar Configuración</Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </Layout>
  );
}
