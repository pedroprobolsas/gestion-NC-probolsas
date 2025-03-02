import {
  Button
} from "/build/_shared/chunk-VLIYEANG.js";
import {
  Card,
  CardContent,
  CardHeader,
  Layout,
  motion
} from "/build/_shared/chunk-UHM3X5LG.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-WWEL7QKW.js";
import {
  Link
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

// app/routes/_index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
  import.meta.hot.lastModified = "1740873848063.9998";
}
var meta = () => {
  return [{
    title: "Sistema de Gesti\xF3n de Calidad"
  }, {
    name: "description",
    content: "Sistema Digital de Gesti\xF3n para Control de Calidad"
  }];
};
var container = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};
var item = {
  hidden: {
    opacity: 0,
    y: 20
  },
  show: {
    opacity: 1,
    y: 0
  }
};
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { initial: {
      opacity: 0,
      y: -20
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      duration: 0.5
    }, className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl", children: "Sistema de Gesti\xF3n de Calidad" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 67,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-6 text-lg leading-8 text-gray-600", children: "Digitalice la gesti\xF3n de no conformidades, reclamos y mejoras" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 70,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 58,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { variants: container, initial: "hidden", animate: "show", className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { variants: item, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: "Gesti\xF3n de Casos" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 78,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: "Gestione y realice seguimiento de casos incluyendo no conformidades, reclamos y mejoras de manera eficiente." }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 80,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/cases/new", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { className: "mt-4", children: "Crear Nuevo Caso" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 85,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 84,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 79,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 77,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 76,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { variants: item, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: "Panel de Control" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 93,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: "Monitoree indicadores clave de rendimiento y siga el progreso con an\xE1lisis en tiempo real." }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 95,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/dashboard", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { className: "mt-4", children: "Ver Panel" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 100,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 99,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 94,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 92,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 91,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { variants: item, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: "Configuraci\xF3n del Sistema" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 108,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: "Configure ajustes del sistema, gestione departamentos y personalice flujos de trabajo." }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 110,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/settings", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { className: "mt-4", children: "Administrar Configuraci\xF3n" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 115,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 114,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 109,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 107,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 106,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 75,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 57,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 56,
    columnNumber: 10
  }, this);
}
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-TT5BK6AX.js.map
