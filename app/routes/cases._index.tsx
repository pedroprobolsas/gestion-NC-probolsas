import { type LoaderFunctionArgs, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronDown, ChevronUp, ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import { Layout } from "~/components/Layout";
import { Button } from "~/components/ui/Button";
import { Card } from "~/components/ui/Card";
import { type Case, type CaseStatus, type CaseType, estadosCaso, tiposCaso, prioridadesCaso } from "~/types/case";

// Datos de ejemplo - reemplazar con llamada API real
const casosDePrueba: Case[] = [
  {
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
  },
  {
    id: "2",
    title: "Reclamo de Cliente #456",
    type: "complaint",
    status: "in_progress",
    priority: "medium",
    createdAt: "2023-12-02T10:00:00Z",
    updatedAt: "2023-12-02T15:00:00Z",
    assignedTo: "María García",
    area: "ventas",
    client: "Cliente Ejemplo 2",
    reportedBy: "María García",
    reporterEmail: "maria@ejemplo.com",
    description: "Descripción del reclamo"
  },
  {
    id: "3",
    title: "Mejora de Proceso #789",
    type: "improvement",
    status: "open",
    priority: "low",
    createdAt: "2023-12-03T10:00:00Z",
    updatedAt: "2023-12-03T10:00:00Z",
    assignedTo: "Carlos Rodríguez",
    area: "produccion",
    client: "Cliente Ejemplo 3",
    reportedBy: "Carlos Rodríguez",
    reporterEmail: "carlos@ejemplo.com",
    description: "Descripción de la mejora"
  }
];

export async function loader({ request }: LoaderFunctionArgs) {
  return json({ cases: casosDePrueba });
}

const columnHelper = createColumnHelper<Case>();

const columns = [
  columnHelper.accessor("title", {
    header: "Título",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("type", {
    header: "Tipo",
    cell: (info) => tiposCaso[info.getValue()],
  }),
  columnHelper.accessor("status", {
    header: "Estado",
    cell: (info) => estadosCaso[info.getValue()],
  }),
  columnHelper.accessor("priority", {
    header: "Prioridad",
    cell: (info) => prioridadesCaso[info.getValue()],
  }),
  columnHelper.accessor("assignedTo", {
    header: "Asignado a",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("createdAt", {
    header: "Fecha de Creación",
    cell: (info) => new Date(info.getValue()).toLocaleDateString('es-ES'),
  }),
  columnHelper.display({
    id: "actions",
    header: "Acciones",
    cell: (info) => (
      <div className="flex gap-2">
        <Link to={`/cases/${info.row.original.id}`}>
          <Button variant="secondary" size="sm">
            Ver Detalles
          </Button>
        </Link>
        <Link to={`/cases/${info.row.original.id}/edit`}>
          <Button variant="secondary" size="sm">
            Editar Caso
          </Button>
        </Link>
      </div>
    ),
  }),
];

function SortIcon({ sorted }: { sorted: false | "asc" | "desc" }) {
  if (sorted === false) return <ChevronsUpDown className="h-4 w-4" />;
  if (sorted === "asc") return <ChevronUp className="h-4 w-4" />;
  return <ChevronDown className="h-4 w-4" />;
}

export default function ListaDeCasos() {
  const { cases } = useLoaderData<typeof loader>();
  const [sorting, setSorting] = useState([]);
  const [typeFilter, setTypeFilter] = useState<CaseType | "all">("all");
  const [statusFilter, setStatusFilter] = useState<CaseStatus | "all">("all");

  const datosFiltrados = cases.filter((caso) => {
    const coincideTipo = typeFilter === "all" || caso.type === typeFilter;
    const coincideEstado = statusFilter === "all" || caso.status === statusFilter;
    return coincideTipo && coincideEstado;
  });

  const table = useReactTable({
    data: datosFiltrados,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <Layout>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Gestión de Casos</h1>
          <Link to="/cases/new">
            <Button>Registrar Nuevo Caso</Button>
          </Link>
        </div>

        <Card>
          <div className="p-4 border-b">
            <div className="flex gap-4">
              <select
                className="rounded-md border px-3 py-1"
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value as CaseType | "all")}
              >
                <option value="all">Todos los Tipos</option>
                <option value="non_conformity">No Conformidad</option>
                <option value="complaint">Reclamo</option>
                <option value="improvement">Mejora</option>
              </select>

              <select
                className="rounded-md border px-3 py-1"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as CaseStatus | "all")}
              >
                <option value="all">Todos los Estados</option>
                <option value="open">Abierto</option>
                <option value="in_progress">En Proceso</option>
                <option value="resolved">Resuelto</option>
                <option value="closed">Cerrado</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        className="border-b px-4 py-2 text-left"
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        <div className="flex items-center gap-1">
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {header.column.getCanSort() && (
                            <SortIcon sorted={header.column.getIsSorted()} />
                          )}
                        </div>
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody>
                {table.getRowModel().rows.map((row) => (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className="border-b px-4 py-2">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between p-4 border-t">
            <div className="flex items-center gap-2">
              <Button
                variant="secondary"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                Página Anterior
              </Button>
              <Button
                variant="secondary"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                Página Siguiente
              </Button>
            </div>
            <span className="text-sm text-gray-600">
              Página {table.getState().pagination.pageIndex + 1} de{" "}
              {table.getPageCount()}
            </span>
          </div>
        </Card>
      </div>
    </Layout>
  );
}
