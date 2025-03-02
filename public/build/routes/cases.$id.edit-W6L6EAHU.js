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

// app/routes/cases.$id.edit.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/cases.$id.edit.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/cases.$id.edit.tsx"
  );
  import.meta.hot.lastModified = "1740872562800";
}
function EditarCaso() {
  _s();
  const {
    case: caso
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-3xl mx-auto space-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold", children: "Editar Caso" }, void 0, false, {
      fileName: "app/routes/cases.$id.edit.tsx",
      lineNumber: 57,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: "Informaci\xF3n del Caso" }, void 0, false, {
        fileName: "app/routes/cases.$id.edit.tsx",
        lineNumber: 60,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { method: "post", className: "space-y-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700", children: "T\xEDtulo" }, void 0, false, {
              fileName: "app/routes/cases.$id.edit.tsx",
              lineNumber: 65,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "title", defaultValue: caso.title, className: "w-full rounded-md border px-3 py-2" }, void 0, false, {
              fileName: "app/routes/cases.$id.edit.tsx",
              lineNumber: 68,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/cases.$id.edit.tsx",
            lineNumber: 64,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700", children: "Tipo de Caso" }, void 0, false, {
              fileName: "app/routes/cases.$id.edit.tsx",
              lineNumber: 72,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "type", defaultValue: caso.type, className: "w-full rounded-md border px-3 py-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "non_conformity", children: "No Conformidad" }, void 0, false, {
                fileName: "app/routes/cases.$id.edit.tsx",
                lineNumber: 76,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "complaint", children: "Reclamo" }, void 0, false, {
                fileName: "app/routes/cases.$id.edit.tsx",
                lineNumber: 77,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "improvement", children: "Mejora" }, void 0, false, {
                fileName: "app/routes/cases.$id.edit.tsx",
                lineNumber: 78,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/cases.$id.edit.tsx",
              lineNumber: 75,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/cases.$id.edit.tsx",
            lineNumber: 71,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700", children: "Cliente" }, void 0, false, {
              fileName: "app/routes/cases.$id.edit.tsx",
              lineNumber: 83,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "client", defaultValue: caso.client, className: "w-full rounded-md border px-3 py-2" }, void 0, false, {
              fileName: "app/routes/cases.$id.edit.tsx",
              lineNumber: 86,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/cases.$id.edit.tsx",
            lineNumber: 82,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700", children: "\xC1rea" }, void 0, false, {
              fileName: "app/routes/cases.$id.edit.tsx",
              lineNumber: 90,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "area", defaultValue: caso.area, className: "w-full rounded-md border px-3 py-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "produccion", children: "Producci\xF3n" }, void 0, false, {
                fileName: "app/routes/cases.$id.edit.tsx",
                lineNumber: 94,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "calidad", children: "Calidad" }, void 0, false, {
                fileName: "app/routes/cases.$id.edit.tsx",
                lineNumber: 95,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "ventas", children: "Ventas" }, void 0, false, {
                fileName: "app/routes/cases.$id.edit.tsx",
                lineNumber: 96,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/cases.$id.edit.tsx",
              lineNumber: 93,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/cases.$id.edit.tsx",
            lineNumber: 89,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700", children: "Responsable" }, void 0, false, {
              fileName: "app/routes/cases.$id.edit.tsx",
              lineNumber: 101,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "assignedTo", defaultValue: caso.assignedTo, className: "w-full rounded-md border px-3 py-2" }, void 0, false, {
              fileName: "app/routes/cases.$id.edit.tsx",
              lineNumber: 104,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/cases.$id.edit.tsx",
            lineNumber: 100,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700", children: "Estado" }, void 0, false, {
              fileName: "app/routes/cases.$id.edit.tsx",
              lineNumber: 108,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "status", defaultValue: caso.status, className: "w-full rounded-md border px-3 py-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "open", children: "Abierto" }, void 0, false, {
                fileName: "app/routes/cases.$id.edit.tsx",
                lineNumber: 112,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "in_progress", children: "En Proceso" }, void 0, false, {
                fileName: "app/routes/cases.$id.edit.tsx",
                lineNumber: 113,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "resolved", children: "Resuelto" }, void 0, false, {
                fileName: "app/routes/cases.$id.edit.tsx",
                lineNumber: 114,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "closed", children: "Cerrado" }, void 0, false, {
                fileName: "app/routes/cases.$id.edit.tsx",
                lineNumber: 115,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/cases.$id.edit.tsx",
              lineNumber: 111,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/cases.$id.edit.tsx",
            lineNumber: 107,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/cases.$id.edit.tsx",
          lineNumber: 63,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700", children: "Descripci\xF3n" }, void 0, false, {
            fileName: "app/routes/cases.$id.edit.tsx",
            lineNumber: 121,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { name: "description", defaultValue: caso.description, rows: 4, className: "w-full rounded-md border px-3 py-2" }, void 0, false, {
            fileName: "app/routes/cases.$id.edit.tsx",
            lineNumber: 124,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/cases.$id.edit.tsx",
          lineNumber: 120,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-end gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "button", variant: "secondary", onClick: () => window.history.back(), children: "Cancelar" }, void 0, false, {
            fileName: "app/routes/cases.$id.edit.tsx",
            lineNumber: 128,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", children: "Guardar Cambios" }, void 0, false, {
            fileName: "app/routes/cases.$id.edit.tsx",
            lineNumber: 131,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/cases.$id.edit.tsx",
          lineNumber: 127,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/cases.$id.edit.tsx",
        lineNumber: 62,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/cases.$id.edit.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/cases.$id.edit.tsx",
      lineNumber: 59,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/cases.$id.edit.tsx",
    lineNumber: 56,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/cases.$id.edit.tsx",
    lineNumber: 55,
    columnNumber: 10
  }, this);
}
_s(EditarCaso, "AHWT87bc6ySZ2Vtn5n9uhP2j1iw=", false, function() {
  return [useLoaderData];
});
_c = EditarCaso;
var _c;
$RefreshReg$(_c, "EditarCaso");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  EditarCaso as default
};
//# sourceMappingURL=/build/routes/cases.$id.edit-W6L6EAHU.js.map
