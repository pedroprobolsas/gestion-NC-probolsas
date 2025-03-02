import {
  estadosCaso,
  prioridadesCaso,
  tiposCaso
} from "/build/_shared/chunk-BRVSUSJ4.js";
import {
  Button
} from "/build/_shared/chunk-VLIYEANG.js";
import {
  require_node
} from "/build/_shared/chunk-TMJLOEVS.js";
import {
  Card,
  CardContent,
  CardHeader,
  Layout
} from "/build/_shared/chunk-UHM3X5LG.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-WWEL7QKW.js";
import {
  useLoaderData
} from "/build/_shared/chunk-SZF5NYHC.js";
import {
  createHotContext
} from "/build/_shared/chunk-7SRK3KT3.js";
import "/build/_shared/chunk-N4FG5RPV.js";
import "/build/_shared/chunk-OPGM6WIO.js";
import "/build/_shared/chunk-2AFRYLX2.js";
import {
  __toESM
} from "/build/_shared/chunk-RODUX5XG.js";

// app/routes/cases.$id.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/cases.$id.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/cases.$id.tsx"
  );
  import.meta.hot.lastModified = "1740866096687";
}
function VisualizarCaso() {
  _s();
  const {
    case: caso
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold", children: caso.title }, void 0, false, {
        fileName: "app/routes/cases.$id.tsx",
        lineNumber: 55,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "secondary", onClick: () => window.location.href = `/cases/${caso.id}/edit`, children: "Modificar Caso" }, void 0, false, {
          fileName: "app/routes/cases.$id.tsx",
          lineNumber: 57,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "secondary", onClick: () => window.location.href = "/cases", children: "Volver al Listado" }, void 0, false, {
          fileName: "app/routes/cases.$id.tsx",
          lineNumber: 60,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/cases.$id.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/cases.$id.tsx",
      lineNumber: 54,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4 md:grid-cols-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: "Estado Actual" }, void 0, false, {
          fileName: "app/routes/cases.$id.tsx",
          lineNumber: 68,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold", children: estadosCaso[caso.status] }, void 0, false, {
          fileName: "app/routes/cases.$id.tsx",
          lineNumber: 70,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/cases.$id.tsx",
          lineNumber: 69,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/cases.$id.tsx",
        lineNumber: 67,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: "Tipo de Caso" }, void 0, false, {
          fileName: "app/routes/cases.$id.tsx",
          lineNumber: 77,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold", children: tiposCaso[caso.type] }, void 0, false, {
          fileName: "app/routes/cases.$id.tsx",
          lineNumber: 79,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/cases.$id.tsx",
          lineNumber: 78,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/cases.$id.tsx",
        lineNumber: 76,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: "Nivel de Prioridad" }, void 0, false, {
          fileName: "app/routes/cases.$id.tsx",
          lineNumber: 86,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold", children: prioridadesCaso[caso.priority] }, void 0, false, {
          fileName: "app/routes/cases.$id.tsx",
          lineNumber: 88,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/cases.$id.tsx",
          lineNumber: 87,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/cases.$id.tsx",
        lineNumber: 85,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/cases.$id.tsx",
      lineNumber: 66,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: "Informaci\xF3n Detallada" }, void 0, false, {
        fileName: "app/routes/cases.$id.tsx",
        lineNumber: 96,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "text-sm font-medium text-gray-500", children: "Responsable Asignado" }, void 0, false, {
            fileName: "app/routes/cases.$id.tsx",
            lineNumber: 100,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "mt-1 text-sm text-gray-900", children: caso.assignedTo }, void 0, false, {
            fileName: "app/routes/cases.$id.tsx",
            lineNumber: 101,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/cases.$id.tsx",
          lineNumber: 99,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "text-sm font-medium text-gray-500", children: "Fecha de Registro" }, void 0, false, {
            fileName: "app/routes/cases.$id.tsx",
            lineNumber: 104,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "mt-1 text-sm text-gray-900", children: new Date(caso.createdAt).toLocaleString("es-ES") }, void 0, false, {
            fileName: "app/routes/cases.$id.tsx",
            lineNumber: 105,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/cases.$id.tsx",
          lineNumber: 103,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "text-sm font-medium text-gray-500", children: "\xDAltima Modificaci\xF3n" }, void 0, false, {
            fileName: "app/routes/cases.$id.tsx",
            lineNumber: 110,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "mt-1 text-sm text-gray-900", children: new Date(caso.updatedAt).toLocaleString("es-ES") }, void 0, false, {
            fileName: "app/routes/cases.$id.tsx",
            lineNumber: 111,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/cases.$id.tsx",
          lineNumber: 109,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/cases.$id.tsx",
        lineNumber: 98,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/cases.$id.tsx",
        lineNumber: 97,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/cases.$id.tsx",
      lineNumber: 95,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/cases.$id.tsx",
    lineNumber: 53,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/cases.$id.tsx",
    lineNumber: 52,
    columnNumber: 10
  }, this);
}
_s(VisualizarCaso, "AHWT87bc6ySZ2Vtn5n9uhP2j1iw=", false, function() {
  return [useLoaderData];
});
_c = VisualizarCaso;
var _c;
$RefreshReg$(_c, "VisualizarCaso");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  VisualizarCaso as default
};
//# sourceMappingURL=/build/routes/cases.$id-2SLXGHFG.js.map
