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
  Form,
  useActionData
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

// app/routes/cases.new.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/cases.new.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/cases.new.tsx"
  );
  import.meta.hot.lastModified = "1740871909257";
}
var areas = ["produccion", "calidad", "ventas", "despachos", "gerencia", "contabilidad", "marketing", "talento humano", "cliente"];
function NewCase() {
  _s();
  const actionData = useActionData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-3xl mx-auto space-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold", children: "Registrar Nuevo Caso" }, void 0, false, {
      fileName: "app/routes/cases.new.tsx",
      lineNumber: 55,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: "Informaci\xF3n del Caso" }, void 0, false, {
        fileName: "app/routes/cases.new.tsx",
        lineNumber: 58,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "space-y-6", encType: "multipart/form-data", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700", children: "Fecha" }, void 0, false, {
              fileName: "app/routes/cases.new.tsx",
              lineNumber: 63,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "date", name: "date", className: "w-full rounded-md border px-3 py-2", defaultValue: (/* @__PURE__ */ new Date()).toISOString().split("T")[0] }, void 0, false, {
              fileName: "app/routes/cases.new.tsx",
              lineNumber: 66,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/cases.new.tsx",
            lineNumber: 62,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700", children: "Tipo de Caso" }, void 0, false, {
              fileName: "app/routes/cases.new.tsx",
              lineNumber: 70,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "type", className: "w-full rounded-md border px-3 py-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "Seleccione un tipo" }, void 0, false, {
                fileName: "app/routes/cases.new.tsx",
                lineNumber: 74,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "non_conformity", children: "No Conformidad" }, void 0, false, {
                fileName: "app/routes/cases.new.tsx",
                lineNumber: 75,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "complaint", children: "Reclamo" }, void 0, false, {
                fileName: "app/routes/cases.new.tsx",
                lineNumber: 76,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "improvement", children: "Mejora" }, void 0, false, {
                fileName: "app/routes/cases.new.tsx",
                lineNumber: 77,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/cases.new.tsx",
              lineNumber: 73,
              columnNumber: 19
            }, this),
            actionData?.errors?.type && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-600 text-sm", children: actionData.errors.type }, void 0, false, {
              fileName: "app/routes/cases.new.tsx",
              lineNumber: 79,
              columnNumber: 48
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/cases.new.tsx",
            lineNumber: 69,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700", children: "Cliente" }, void 0, false, {
              fileName: "app/routes/cases.new.tsx",
              lineNumber: 83,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "client", className: "w-full rounded-md border px-3 py-2", placeholder: "Nombre del cliente" }, void 0, false, {
              fileName: "app/routes/cases.new.tsx",
              lineNumber: 86,
              columnNumber: 19
            }, this),
            actionData?.errors?.client && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-600 text-sm", children: actionData.errors.client }, void 0, false, {
              fileName: "app/routes/cases.new.tsx",
              lineNumber: 87,
              columnNumber: 50
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/cases.new.tsx",
            lineNumber: 82,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700", children: "Orden de Producci\xF3n" }, void 0, false, {
              fileName: "app/routes/cases.new.tsx",
              lineNumber: 91,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "productionOrder", className: "w-full rounded-md border px-3 py-2", placeholder: "N\xFAmero de orden" }, void 0, false, {
              fileName: "app/routes/cases.new.tsx",
              lineNumber: 94,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/cases.new.tsx",
            lineNumber: 90,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700", children: "C\xF3digo de Producto" }, void 0, false, {
              fileName: "app/routes/cases.new.tsx",
              lineNumber: 98,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "productCode", className: "w-full rounded-md border px-3 py-2", placeholder: "C\xF3digo del producto" }, void 0, false, {
              fileName: "app/routes/cases.new.tsx",
              lineNumber: 101,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/cases.new.tsx",
            lineNumber: 97,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700", children: "\xC1rea" }, void 0, false, {
              fileName: "app/routes/cases.new.tsx",
              lineNumber: 105,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "area", className: "w-full rounded-md border px-3 py-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "Seleccione un \xE1rea" }, void 0, false, {
                fileName: "app/routes/cases.new.tsx",
                lineNumber: 109,
                columnNumber: 21
              }, this),
              areas.map((area) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: area, children: area.charAt(0).toUpperCase() + area.slice(1) }, area, false, {
                fileName: "app/routes/cases.new.tsx",
                lineNumber: 110,
                columnNumber: 40
              }, this))
            ] }, void 0, true, {
              fileName: "app/routes/cases.new.tsx",
              lineNumber: 108,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/cases.new.tsx",
            lineNumber: 104,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700", children: "Reportado por" }, void 0, false, {
              fileName: "app/routes/cases.new.tsx",
              lineNumber: 117,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "reportedBy", className: "w-full rounded-md border px-3 py-2", placeholder: "Nombre completo" }, void 0, false, {
              fileName: "app/routes/cases.new.tsx",
              lineNumber: 120,
              columnNumber: 19
            }, this),
            actionData?.errors?.reportedBy && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-600 text-sm", children: actionData.errors.reportedBy }, void 0, false, {
              fileName: "app/routes/cases.new.tsx",
              lineNumber: 121,
              columnNumber: 54
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/cases.new.tsx",
            lineNumber: 116,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700", children: "Correo electr\xF3nico" }, void 0, false, {
              fileName: "app/routes/cases.new.tsx",
              lineNumber: 125,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "email", name: "reporterEmail", className: "w-full rounded-md border px-3 py-2", placeholder: "correo@ejemplo.com" }, void 0, false, {
              fileName: "app/routes/cases.new.tsx",
              lineNumber: 128,
              columnNumber: 19
            }, this),
            actionData?.errors?.reporterEmail && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-600 text-sm", children: actionData.errors.reporterEmail }, void 0, false, {
              fileName: "app/routes/cases.new.tsx",
              lineNumber: 129,
              columnNumber: 57
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/cases.new.tsx",
            lineNumber: 124,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/cases.new.tsx",
          lineNumber: 61,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700", children: "Descripci\xF3n del caso" }, void 0, false, {
            fileName: "app/routes/cases.new.tsx",
            lineNumber: 134,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { name: "description", rows: 4, className: "w-full rounded-md border px-3 py-2", placeholder: "Describe el caso o mejora..." }, void 0, false, {
            fileName: "app/routes/cases.new.tsx",
            lineNumber: 137,
            columnNumber: 17
          }, this),
          actionData?.errors?.description && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-600 text-sm", children: actionData.errors.description }, void 0, false, {
            fileName: "app/routes/cases.new.tsx",
            lineNumber: 138,
            columnNumber: 53
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/cases.new.tsx",
          lineNumber: 133,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700", children: "Evidencia fotogr\xE1fica" }, void 0, false, {
            fileName: "app/routes/cases.new.tsx",
            lineNumber: 142,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "file", name: "evidence", accept: "image/*", multiple: true, className: "w-full" }, void 0, false, {
            fileName: "app/routes/cases.new.tsx",
            lineNumber: 145,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/cases.new.tsx",
          lineNumber: 141,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-end gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "button", variant: "secondary", onClick: () => window.history.back(), children: "Cancelar" }, void 0, false, {
            fileName: "app/routes/cases.new.tsx",
            lineNumber: 149,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", children: "Crear Caso" }, void 0, false, {
            fileName: "app/routes/cases.new.tsx",
            lineNumber: 152,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/cases.new.tsx",
          lineNumber: 148,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/cases.new.tsx",
        lineNumber: 60,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/cases.new.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/cases.new.tsx",
      lineNumber: 57,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/cases.new.tsx",
    lineNumber: 54,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/cases.new.tsx",
    lineNumber: 53,
    columnNumber: 10
  }, this);
}
_s(NewCase, "fHVw5pq0Zwd2gXh2gyrnVdHnLCc=", false, function() {
  return [useActionData];
});
_c = NewCase;
var _c;
$RefreshReg$(_c, "NewCase");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  NewCase as default
};
//# sourceMappingURL=/build/routes/cases.new-4TOCZ44U.js.map
