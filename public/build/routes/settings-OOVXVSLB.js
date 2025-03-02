import {
  Save
} from "/build/_shared/chunk-LZQOAN3A.js";
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
  Layout,
  motion
} from "/build/_shared/chunk-UHM3X5LG.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-WWEL7QKW.js";
import {
  Form,
  useActionData,
  useLoaderData,
  useNavigation
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

// app/routes/settings.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/settings.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/settings.tsx"
  );
  import.meta.hot.lastModified = "1740877926660";
}
var container = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
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
function Settings() {
  _s();
  const settings = useLoaderData();
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { variants: container, initial: "hidden", animate: "show", className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { variants: item, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold", children: "Configuraci\xF3n" }, void 0, false, {
        fileName: "app/routes/settings.tsx",
        lineNumber: 108,
        columnNumber: 11
      }, this),
      actionData?.success && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-sm text-green-600", children: "Configuraci\xF3n guardada correctamente" }, void 0, false, {
        fileName: "app/routes/settings.tsx",
        lineNumber: 109,
        columnNumber: 35
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/settings.tsx",
      lineNumber: 107,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { variants: item, className: "space-y-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: "Configuraci\xF3n General" }, void 0, false, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 117,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "companyName", className: "block text-sm font-medium text-gray-700", children: "Nombre de la Empresa" }, void 0, false, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 120,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", id: "companyName", name: "companyName", defaultValue: settings.general.companyName, className: "mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" }, void 0, false, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 123,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 119,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700", children: "Email" }, void 0, false, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 126,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "email", id: "email", name: "email", defaultValue: settings.general.email, className: "mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" }, void 0, false, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 129,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 125,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "phone", className: "block text-sm font-medium text-gray-700", children: "Tel\xE9fono" }, void 0, false, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 132,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "tel", id: "phone", name: "phone", defaultValue: settings.general.phone, className: "mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" }, void 0, false, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 135,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 131,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 118,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/settings.tsx",
        lineNumber: 116,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: "Notificaciones" }, void 0, false, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 141,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox", id: "emailNotifications", name: "emailNotifications", defaultChecked: settings.notifications.emailNotifications, className: "h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" }, void 0, false, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 144,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "emailNotifications", className: "ml-2 block text-sm text-gray-900", children: "Notificaciones por email" }, void 0, false, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 145,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 143,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox", id: "dailyDigest", name: "dailyDigest", defaultChecked: settings.notifications.dailyDigest, className: "h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" }, void 0, false, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 150,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "dailyDigest", className: "ml-2 block text-sm text-gray-900", children: "Resumen diario" }, void 0, false, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 151,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 149,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox", id: "criticalAlerts", name: "criticalAlerts", defaultChecked: settings.notifications.criticalAlerts, className: "h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" }, void 0, false, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 156,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "criticalAlerts", className: "ml-2 block text-sm text-gray-900", children: "Alertas cr\xEDticas" }, void 0, false, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 157,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 155,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 142,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/settings.tsx",
        lineNumber: 140,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: "Flujo de Trabajo" }, void 0, false, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 165,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox", id: "requireApproval", name: "requireApproval", defaultChecked: settings.workflow.requireApproval, className: "h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" }, void 0, false, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 168,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "requireApproval", className: "ml-2 block text-sm text-gray-900", children: "Requerir aprobaci\xF3n" }, void 0, false, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 169,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 167,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "autoCloseAfterDays", className: "block text-sm font-medium text-gray-700", children: "Cerrar autom\xE1ticamente despu\xE9s de (d\xEDas)" }, void 0, false, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 174,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "number", id: "autoCloseAfterDays", name: "autoCloseAfterDays", defaultValue: settings.workflow.autoCloseAfterDays, min: "1", max: "365", className: "mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" }, void 0, false, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 177,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 173,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "defaultPriority", className: "block text-sm font-medium text-gray-700", children: "Prioridad por defecto" }, void 0, false, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 180,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { id: "defaultPriority", name: "defaultPriority", defaultValue: settings.workflow.defaultPriority, className: "mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "low", children: "Baja" }, void 0, false, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 184,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "medium", children: "Media" }, void 0, false, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 185,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "high", children: "Alta" }, void 0, false, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 186,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 183,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 179,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 166,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/settings.tsx",
        lineNumber: 164,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", disabled: isSubmitting, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Save, { className: "w-4 h-4 mr-2" }, void 0, false, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 194,
          columnNumber: 17
        }, this),
        isSubmitting ? "Guardando..." : "Guardar cambios"
      ] }, void 0, true, {
        fileName: "app/routes/settings.tsx",
        lineNumber: 193,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/settings.tsx",
        lineNumber: 192,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/settings.tsx",
      lineNumber: 115,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/settings.tsx",
      lineNumber: 114,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/settings.tsx",
    lineNumber: 106,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/settings.tsx",
    lineNumber: 105,
    columnNumber: 10
  }, this);
}
_s(Settings, "rc2SKYb6Y7Ujqtsmh330BmyS6As=", false, function() {
  return [useLoaderData, useActionData, useNavigation];
});
_c = Settings;
var _c;
$RefreshReg$(_c, "Settings");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Settings as default
};
//# sourceMappingURL=/build/routes/settings-OOVXVSLB.js.map
