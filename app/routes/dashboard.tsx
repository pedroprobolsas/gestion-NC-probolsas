import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Layout } from "~/components/Layout";
import { Card, CardContent, CardHeader } from "~/components/ui/Card";
import { motion } from "framer-motion";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
import { tiposCaso, estadosCaso, prioridadesCaso } from "~/types/case";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

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
  // Simulated data - replace with actual API calls
  return json({
    stats: {
      total: 125,
      open: 45,
      inProgress: 35,
      resolved: 30,
      closed: 15
    },
    byType: {
      non_conformity: 50,
      complaint: 45,
      improvement: 30
    },
    byPriority: {
      high: 30,
      medium: 60,
      low: 35
    },
    recentActivity: [
      { id: 1, title: "No conformidad en línea de producción", type: "non_conformity", status: "open", date: "2023-12-10" },
      { id: 2, title: "Reclamo de cliente por entrega tardía", type: "complaint", status: "in_progress", date: "2023-12-09" },
      { id: 3, title: "Propuesta de mejora en empaque", type: "improvement", status: "resolved", date: "2023-12-08" }
    ]
  });
}

export default function Dashboard() {
  const { stats, byType, byPriority, recentActivity } = useLoaderData<typeof loader>();

  const typeChartData = {
    labels: Object.values(tiposCaso),
    datasets: [
      {
        data: Object.values(byType),
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
        ],
      },
    ],
  };

  const priorityChartData = {
    labels: ['Últimos 7 días'],
    datasets: [
      {
        label: 'Alta',
        data: [byPriority.high],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Media',
        data: [byPriority.medium],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
      {
        label: 'Baja',
        data: [byPriority.low],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
    ],
  };

  return (
    <Layout>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-6"
      >
        <motion.div variants={item}>
          <h1 className="text-2xl font-bold">Panel de Control</h1>
        </motion.div>

        <motion.div 
          variants={item}
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          <Card className="bg-blue-50">
            <CardContent className="p-4">
              <div className="text-sm text-blue-600">Total de Casos</div>
              <div className="text-2xl font-bold">{stats.total}</div>
            </CardContent>
          </Card>
          <Card className="bg-yellow-50">
            <CardContent className="p-4">
              <div className="text-sm text-yellow-600">Casos Abiertos</div>
              <div className="text-2xl font-bold">{stats.open}</div>
            </CardContent>
          </Card>
          <Card className="bg-green-50">
            <CardContent className="p-4">
              <div className="text-sm text-green-600">En Progreso</div>
              <div className="text-2xl font-bold">{stats.inProgress}</div>
            </CardContent>
          </Card>
          <Card className="bg-purple-50">
            <CardContent className="p-4">
              <div className="text-sm text-purple-600">Resueltos</div>
              <div className="text-2xl font-bold">{stats.resolved}</div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>Distribución por Tipo</CardHeader>
            <CardContent>
              <div className="h-64">
                <Pie data={typeChartData} options={{ maintainAspectRatio: false }} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>Casos por Prioridad (Últimos 7 días)</CardHeader>
            <CardContent>
              <div className="h-64">
                <Bar 
                  data={priorityChartData}
                  options={{
                    maintainAspectRatio: false,
                    scales: {
                      y: {
                        beginAtZero: true
                      }
                    }
                  }}
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card>
            <CardHeader>Actividad Reciente</CardHeader>
            <CardContent>
              <div className="divide-y">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="py-3">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-medium">{activity.title}</h3>
                        <p className="text-sm text-gray-500">
                          {tiposCaso[activity.type]} - {estadosCaso[activity.status]}
                        </p>
                      </div>
                      <div className="text-sm text-gray-500">
                        {new Date(activity.date).toLocaleDateString('es-ES')}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </Layout>
  );
}
