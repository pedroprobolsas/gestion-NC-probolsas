import {
  createHotContext
} from "/build/_shared/chunk-7SRK3KT3.js";

// app/types/case.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/types/case.ts"
  );
  import.meta.hot.lastModified = "1740871910730";
}
var estadosCaso = {
  open: "ABIERTO",
  in_progress: "EN PROCESO",
  resolved: "RESUELTO",
  closed: "CERRADO"
};
var tiposCaso = {
  non_conformity: "NO CONFORMIDAD",
  complaint: "RECLAMO",
  improvement: "MEJORA"
};
var prioridadesCaso = {
  high: "ALTA",
  medium: "MEDIA",
  low: "BAJA"
};

export {
  estadosCaso,
  tiposCaso,
  prioridadesCaso
};
//# sourceMappingURL=/build/_shared/chunk-BRVSUSJ4.js.map
