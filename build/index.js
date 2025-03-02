var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent") || "") ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 47,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 94,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-APZTJNKZ.css";

// app/root.tsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [
  { rel: "stylesheet", href: tailwind_default },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
  }
];
function App() {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", className: "h-full bg-gray-50", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { className: "h-full", children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

// app/routes/cases.$id.edit.tsx
var cases_id_edit_exports = {};
__export(cases_id_edit_exports, {
  default: () => EditarCaso,
  loader: () => loader
});
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

// app/components/Layout.tsx
import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
function Layout({ children }) {
  return /* @__PURE__ */ jsxDEV3("div", { className: "min-h-screen bg-gray-50", children: [
    /* @__PURE__ */ jsxDEV3("nav", { className: "bg-white shadow-sm", children: /* @__PURE__ */ jsxDEV3("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV3("div", { className: "flex justify-between h-16", children: /* @__PURE__ */ jsxDEV3("div", { className: "flex", children: [
      /* @__PURE__ */ jsxDEV3(Link, { to: "/", className: "flex items-center", children: /* @__PURE__ */ jsxDEV3(
        motion.img,
        {
          whileHover: { scale: 1.1 },
          className: "h-8 w-auto",
          src: "/logo-dark.png",
          alt: "Logotipo"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Layout.tsx",
          lineNumber: 12,
          columnNumber: 17
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 11,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV3("div", { className: "hidden sm:ml-6 sm:flex sm:space-x-8", children: [
        /* @__PURE__ */ jsxDEV3(
          Link,
          {
            to: "/cases",
            className: "inline-flex items-center px-1 pt-1 text-gray-900",
            children: "Casos"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Layout.tsx",
            lineNumber: 20,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ jsxDEV3(
          Link,
          {
            to: "/dashboard",
            className: "inline-flex items-center px-1 pt-1 text-gray-500 hover:text-gray-900",
            children: "Panel"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Layout.tsx",
            lineNumber: 26,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ jsxDEV3(
          Link,
          {
            to: "/settings",
            className: "inline-flex items-center px-1 pt-1 text-gray-500 hover:text-gray-900",
            children: "Configuraci\xF3n"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Layout.tsx",
            lineNumber: 32,
            columnNumber: 17
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 19,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 10,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 9,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 8,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3(
      motion.main,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
        children
      },
      void 0,
      !1,
      {
        fileName: "app/components/Layout.tsx",
        lineNumber: 44,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/components/ui/Button.tsx
import { twMerge } from "tailwind-merge";
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV4(
    "button",
    {
      className: twMerge(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",
        variant === "primary" && "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500",
        variant === "secondary" && "bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-gray-500",
        variant === "danger" && "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500",
        size === "sm" && "h-8 px-3 text-sm",
        size === "md" && "h-10 px-4",
        size === "lg" && "h-12 px-6 text-lg",
        className
      ),
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/Button.tsx",
      lineNumber: 16,
      columnNumber: 5
    },
    this
  );
}

// app/components/ui/Card.tsx
import { twMerge as twMerge2 } from "tailwind-merge";
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
function Card({ className, ...props }) {
  return /* @__PURE__ */ jsxDEV5(
    "div",
    {
      className: twMerge2("rounded-lg border bg-white shadow-sm", className),
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/Card.tsx",
      lineNumber: 8,
      columnNumber: 5
    },
    this
  );
}
function CardHeader({ className, ...props }) {
  return /* @__PURE__ */ jsxDEV5(
    "div",
    {
      className: twMerge2("border-b p-4 font-semibold", className),
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/Card.tsx",
      lineNumber: 19,
      columnNumber: 5
    },
    this
  );
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ jsxDEV5("div", { className: twMerge2("p-4", className), ...props }, void 0, !1, {
    fileName: "app/components/ui/Card.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}

// app/routes/cases.$id.edit.tsx
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var casoDePrueba = {
  id: "1",
  title: "Problema de Calidad de Producto #123",
  type: "non_conformity",
  status: "open",
  priority: "high",
  createdAt: "2023-12-01T10:00:00Z",
  updatedAt: "2023-12-01T10:00:00Z",
  assignedTo: "Juan P\xE9rez",
  area: "calidad",
  client: "Cliente Ejemplo",
  reportedBy: "Juan P\xE9rez",
  reporterEmail: "juan@ejemplo.com",
  description: "Descripci\xF3n del problema"
};
async function loader({ params }) {
  return json({ case: casoDePrueba });
}
function EditarCaso() {
  let { case: caso } = useLoaderData();
  return /* @__PURE__ */ jsxDEV6(Layout, { children: /* @__PURE__ */ jsxDEV6("div", { className: "max-w-3xl mx-auto space-y-4", children: [
    /* @__PURE__ */ jsxDEV6("h1", { className: "text-2xl font-bold", children: "Editar Caso" }, void 0, !1, {
      fileName: "app/routes/cases.$id.edit.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV6(Card, { children: [
      /* @__PURE__ */ jsxDEV6(CardHeader, { children: "Informaci\xF3n del Caso" }, void 0, !1, {
        fileName: "app/routes/cases.$id.edit.tsx",
        lineNumber: 38,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV6(CardContent, { children: /* @__PURE__ */ jsxDEV6("form", { method: "post", className: "space-y-6", children: [
        /* @__PURE__ */ jsxDEV6("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxDEV6("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDEV6("label", { className: "block text-sm font-medium text-gray-700", children: "T\xEDtulo" }, void 0, !1, {
              fileName: "app/routes/cases.$id.edit.tsx",
              lineNumber: 43,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV6(
              "input",
              {
                type: "text",
                name: "title",
                defaultValue: caso.title,
                className: "w-full rounded-md border px-3 py-2"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/cases.$id.edit.tsx",
                lineNumber: 46,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/cases.$id.edit.tsx",
            lineNumber: 42,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV6("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDEV6("label", { className: "block text-sm font-medium text-gray-700", children: "Tipo de Caso" }, void 0, !1, {
              fileName: "app/routes/cases.$id.edit.tsx",
              lineNumber: 55,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV6(
              "select",
              {
                name: "type",
                defaultValue: caso.type,
                className: "w-full rounded-md border px-3 py-2",
                children: [
                  /* @__PURE__ */ jsxDEV6("option", { value: "non_conformity", children: "No Conformidad" }, void 0, !1, {
                    fileName: "app/routes/cases.$id.edit.tsx",
                    lineNumber: 63,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV6("option", { value: "complaint", children: "Reclamo" }, void 0, !1, {
                    fileName: "app/routes/cases.$id.edit.tsx",
                    lineNumber: 64,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV6("option", { value: "improvement", children: "Mejora" }, void 0, !1, {
                    fileName: "app/routes/cases.$id.edit.tsx",
                    lineNumber: 65,
                    columnNumber: 21
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/cases.$id.edit.tsx",
                lineNumber: 58,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/cases.$id.edit.tsx",
            lineNumber: 54,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV6("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDEV6("label", { className: "block text-sm font-medium text-gray-700", children: "Cliente" }, void 0, !1, {
              fileName: "app/routes/cases.$id.edit.tsx",
              lineNumber: 70,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV6(
              "input",
              {
                type: "text",
                name: "client",
                defaultValue: caso.client,
                className: "w-full rounded-md border px-3 py-2"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/cases.$id.edit.tsx",
                lineNumber: 73,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/cases.$id.edit.tsx",
            lineNumber: 69,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV6("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDEV6("label", { className: "block text-sm font-medium text-gray-700", children: "\xC1rea" }, void 0, !1, {
              fileName: "app/routes/cases.$id.edit.tsx",
              lineNumber: 82,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV6(
              "select",
              {
                name: "area",
                defaultValue: caso.area,
                className: "w-full rounded-md border px-3 py-2",
                children: [
                  /* @__PURE__ */ jsxDEV6("option", { value: "produccion", children: "Producci\xF3n" }, void 0, !1, {
                    fileName: "app/routes/cases.$id.edit.tsx",
                    lineNumber: 90,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV6("option", { value: "calidad", children: "Calidad" }, void 0, !1, {
                    fileName: "app/routes/cases.$id.edit.tsx",
                    lineNumber: 91,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV6("option", { value: "ventas", children: "Ventas" }, void 0, !1, {
                    fileName: "app/routes/cases.$id.edit.tsx",
                    lineNumber: 92,
                    columnNumber: 21
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/cases.$id.edit.tsx",
                lineNumber: 85,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/cases.$id.edit.tsx",
            lineNumber: 81,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV6("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDEV6("label", { className: "block text-sm font-medium text-gray-700", children: "Responsable" }, void 0, !1, {
              fileName: "app/routes/cases.$id.edit.tsx",
              lineNumber: 97,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV6(
              "input",
              {
                type: "text",
                name: "assignedTo",
                defaultValue: caso.assignedTo,
                className: "w-full rounded-md border px-3 py-2"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/cases.$id.edit.tsx",
                lineNumber: 100,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/cases.$id.edit.tsx",
            lineNumber: 96,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV6("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDEV6("label", { className: "block text-sm font-medium text-gray-700", children: "Estado" }, void 0, !1, {
              fileName: "app/routes/cases.$id.edit.tsx",
              lineNumber: 109,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV6(
              "select",
              {
                name: "status",
                defaultValue: caso.status,
                className: "w-full rounded-md border px-3 py-2",
                children: [
                  /* @__PURE__ */ jsxDEV6("option", { value: "open", children: "Abierto" }, void 0, !1, {
                    fileName: "app/routes/cases.$id.edit.tsx",
                    lineNumber: 117,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV6("option", { value: "in_progress", children: "En Proceso" }, void 0, !1, {
                    fileName: "app/routes/cases.$id.edit.tsx",
                    lineNumber: 118,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV6("option", { value: "resolved", children: "Resuelto" }, void 0, !1, {
                    fileName: "app/routes/cases.$id.edit.tsx",
                    lineNumber: 119,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV6("option", { value: "closed", children: "Cerrado" }, void 0, !1, {
                    fileName: "app/routes/cases.$id.edit.tsx",
                    lineNumber: 120,
                    columnNumber: 21
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/cases.$id.edit.tsx",
                lineNumber: 112,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/cases.$id.edit.tsx",
            lineNumber: 108,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cases.$id.edit.tsx",
          lineNumber: 41,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV6("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxDEV6("label", { className: "block text-sm font-medium text-gray-700", children: "Descripci\xF3n" }, void 0, !1, {
            fileName: "app/routes/cases.$id.edit.tsx",
            lineNumber: 126,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV6(
            "textarea",
            {
              name: "description",
              defaultValue: caso.description,
              rows: 4,
              className: "w-full rounded-md border px-3 py-2"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/cases.$id.edit.tsx",
              lineNumber: 129,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/cases.$id.edit.tsx",
          lineNumber: 125,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV6("div", { className: "flex justify-end gap-4", children: [
          /* @__PURE__ */ jsxDEV6(
            Button,
            {
              type: "button",
              variant: "secondary",
              onClick: () => window.history.back(),
              children: "Cancelar"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/cases.$id.edit.tsx",
              lineNumber: 138,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV6(Button, { type: "submit", children: "Guardar Cambios" }, void 0, !1, {
            fileName: "app/routes/cases.$id.edit.tsx",
            lineNumber: 145,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cases.$id.edit.tsx",
          lineNumber: 137,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/cases.$id.edit.tsx",
        lineNumber: 40,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/cases.$id.edit.tsx",
        lineNumber: 39,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cases.$id.edit.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/cases.$id.edit.tsx",
    lineNumber: 34,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/cases.$id.edit.tsx",
    lineNumber: 33,
    columnNumber: 5
  }, this);
}

// app/routes/cases._index.tsx
var cases_index_exports = {};
__export(cases_index_exports, {
  default: () => ListaDeCasos,
  loader: () => loader2
});
import { json as json2 } from "@remix-run/node";
import { Link as Link2, useLoaderData as useLoaderData2 } from "@remix-run/react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from "@tanstack/react-table";
import { ChevronDown, ChevronUp, ChevronsUpDown } from "lucide-react";
import { useState } from "react";

// app/types/case.ts
var estadosCaso = {
  open: "ABIERTO",
  in_progress: "EN PROCESO",
  resolved: "RESUELTO",
  closed: "CERRADO"
}, tiposCaso = {
  non_conformity: "NO CONFORMIDAD",
  complaint: "RECLAMO",
  improvement: "MEJORA"
}, prioridadesCaso = {
  high: "ALTA",
  medium: "MEDIA",
  low: "BAJA"
};

// app/routes/cases._index.tsx
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var casosDePrueba = [
  {
    id: "1",
    title: "Problema de Calidad de Producto #123",
    type: "non_conformity",
    status: "open",
    priority: "high",
    createdAt: "2023-12-01T10:00:00Z",
    updatedAt: "2023-12-01T10:00:00Z",
    assignedTo: "Juan P\xE9rez",
    area: "calidad",
    client: "Cliente Ejemplo",
    reportedBy: "Juan P\xE9rez",
    reporterEmail: "juan@ejemplo.com",
    description: "Descripci\xF3n del problema"
  },
  {
    id: "2",
    title: "Reclamo de Cliente #456",
    type: "complaint",
    status: "in_progress",
    priority: "medium",
    createdAt: "2023-12-02T10:00:00Z",
    updatedAt: "2023-12-02T15:00:00Z",
    assignedTo: "Mar\xEDa Garc\xEDa",
    area: "ventas",
    client: "Cliente Ejemplo 2",
    reportedBy: "Mar\xEDa Garc\xEDa",
    reporterEmail: "maria@ejemplo.com",
    description: "Descripci\xF3n del reclamo"
  },
  {
    id: "3",
    title: "Mejora de Proceso #789",
    type: "improvement",
    status: "open",
    priority: "low",
    createdAt: "2023-12-03T10:00:00Z",
    updatedAt: "2023-12-03T10:00:00Z",
    assignedTo: "Carlos Rodr\xEDguez",
    area: "produccion",
    client: "Cliente Ejemplo 3",
    reportedBy: "Carlos Rodr\xEDguez",
    reporterEmail: "carlos@ejemplo.com",
    description: "Descripci\xF3n de la mejora"
  }
];
async function loader2({ request }) {
  return json2({ cases: casosDePrueba });
}
var columnHelper = createColumnHelper(), columns = [
  columnHelper.accessor("title", {
    header: "T\xEDtulo",
    cell: (info) => info.getValue()
  }),
  columnHelper.accessor("type", {
    header: "Tipo",
    cell: (info) => tiposCaso[info.getValue()]
  }),
  columnHelper.accessor("status", {
    header: "Estado",
    cell: (info) => estadosCaso[info.getValue()]
  }),
  columnHelper.accessor("priority", {
    header: "Prioridad",
    cell: (info) => prioridadesCaso[info.getValue()]
  }),
  columnHelper.accessor("assignedTo", {
    header: "Asignado a",
    cell: (info) => info.getValue()
  }),
  columnHelper.accessor("createdAt", {
    header: "Fecha de Creaci\xF3n",
    cell: (info) => new Date(info.getValue()).toLocaleDateString("es-ES")
  }),
  columnHelper.display({
    id: "actions",
    header: "Acciones",
    cell: (info) => /* @__PURE__ */ jsxDEV7("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsxDEV7(Link2, { to: `/cases/${info.row.original.id}`, children: /* @__PURE__ */ jsxDEV7(Button, { variant: "secondary", size: "sm", children: "Ver Detalles" }, void 0, !1, {
        fileName: "app/routes/cases._index.tsx",
        lineNumber: 104,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/cases._index.tsx",
        lineNumber: 103,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV7(Link2, { to: `/cases/${info.row.original.id}/edit`, children: /* @__PURE__ */ jsxDEV7(Button, { variant: "secondary", size: "sm", children: "Editar Caso" }, void 0, !1, {
        fileName: "app/routes/cases._index.tsx",
        lineNumber: 109,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/cases._index.tsx",
        lineNumber: 108,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cases._index.tsx",
      lineNumber: 102,
      columnNumber: 7
    }, this)
  })
];
function SortIcon({ sorted }) {
  return sorted === !1 ? /* @__PURE__ */ jsxDEV7(ChevronsUpDown, { className: "h-4 w-4" }, void 0, !1, {
    fileName: "app/routes/cases._index.tsx",
    lineNumber: 119,
    columnNumber: 32
  }, this) : sorted === "asc" ? /* @__PURE__ */ jsxDEV7(ChevronUp, { className: "h-4 w-4" }, void 0, !1, {
    fileName: "app/routes/cases._index.tsx",
    lineNumber: 120,
    columnNumber: 32
  }, this) : /* @__PURE__ */ jsxDEV7(ChevronDown, { className: "h-4 w-4" }, void 0, !1, {
    fileName: "app/routes/cases._index.tsx",
    lineNumber: 121,
    columnNumber: 10
  }, this);
}
function ListaDeCasos() {
  let { cases } = useLoaderData2(), [sorting, setSorting] = useState([]), [typeFilter, setTypeFilter] = useState("all"), [statusFilter, setStatusFilter] = useState("all"), datosFiltrados = cases.filter((caso) => {
    let coincideTipo = typeFilter === "all" || caso.type === typeFilter, coincideEstado = statusFilter === "all" || caso.status === statusFilter;
    return coincideTipo && coincideEstado;
  }), table = useReactTable({
    data: datosFiltrados,
    columns,
    state: {
      sorting
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  });
  return /* @__PURE__ */ jsxDEV7(Layout, { children: /* @__PURE__ */ jsxDEV7("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxDEV7("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsxDEV7("h1", { className: "text-2xl font-bold", children: "Gesti\xF3n de Casos" }, void 0, !1, {
        fileName: "app/routes/cases._index.tsx",
        lineNumber: 152,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV7(Link2, { to: "/cases/new", children: /* @__PURE__ */ jsxDEV7(Button, { children: "Registrar Nuevo Caso" }, void 0, !1, {
        fileName: "app/routes/cases._index.tsx",
        lineNumber: 154,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/cases._index.tsx",
        lineNumber: 153,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cases._index.tsx",
      lineNumber: 151,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV7(Card, { children: [
      /* @__PURE__ */ jsxDEV7("div", { className: "p-4 border-b", children: /* @__PURE__ */ jsxDEV7("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ jsxDEV7(
          "select",
          {
            className: "rounded-md border px-3 py-1",
            value: typeFilter,
            onChange: (e) => setTypeFilter(e.target.value),
            children: [
              /* @__PURE__ */ jsxDEV7("option", { value: "all", children: "Todos los Tipos" }, void 0, !1, {
                fileName: "app/routes/cases._index.tsx",
                lineNumber: 166,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV7("option", { value: "non_conformity", children: "No Conformidad" }, void 0, !1, {
                fileName: "app/routes/cases._index.tsx",
                lineNumber: 167,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV7("option", { value: "complaint", children: "Reclamo" }, void 0, !1, {
                fileName: "app/routes/cases._index.tsx",
                lineNumber: 168,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV7("option", { value: "improvement", children: "Mejora" }, void 0, !1, {
                fileName: "app/routes/cases._index.tsx",
                lineNumber: 169,
                columnNumber: 17
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/cases._index.tsx",
            lineNumber: 161,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV7(
          "select",
          {
            className: "rounded-md border px-3 py-1",
            value: statusFilter,
            onChange: (e) => setStatusFilter(e.target.value),
            children: [
              /* @__PURE__ */ jsxDEV7("option", { value: "all", children: "Todos los Estados" }, void 0, !1, {
                fileName: "app/routes/cases._index.tsx",
                lineNumber: 177,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV7("option", { value: "open", children: "Abierto" }, void 0, !1, {
                fileName: "app/routes/cases._index.tsx",
                lineNumber: 178,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV7("option", { value: "in_progress", children: "En Proceso" }, void 0, !1, {
                fileName: "app/routes/cases._index.tsx",
                lineNumber: 179,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV7("option", { value: "resolved", children: "Resuelto" }, void 0, !1, {
                fileName: "app/routes/cases._index.tsx",
                lineNumber: 180,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV7("option", { value: "closed", children: "Cerrado" }, void 0, !1, {
                fileName: "app/routes/cases._index.tsx",
                lineNumber: 181,
                columnNumber: 17
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/cases._index.tsx",
            lineNumber: 172,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/cases._index.tsx",
        lineNumber: 160,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/cases._index.tsx",
        lineNumber: 159,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV7("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxDEV7("table", { className: "w-full", children: [
        /* @__PURE__ */ jsxDEV7("thead", { children: table.getHeaderGroups().map((headerGroup) => /* @__PURE__ */ jsxDEV7("tr", { children: headerGroup.headers.map((header) => /* @__PURE__ */ jsxDEV7(
          "th",
          {
            className: "border-b px-4 py-2 text-left",
            onClick: header.column.getToggleSortingHandler(),
            children: /* @__PURE__ */ jsxDEV7("div", { className: "flex items-center gap-1", children: [
              flexRender(
                header.column.columnDef.header,
                header.getContext()
              ),
              header.column.getCanSort() && /* @__PURE__ */ jsxDEV7(SortIcon, { sorted: header.column.getIsSorted() }, void 0, !1, {
                fileName: "app/routes/cases._index.tsx",
                lineNumber: 203,
                columnNumber: 29
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/cases._index.tsx",
              lineNumber: 197,
              columnNumber: 25
            }, this)
          },
          header.id,
          !1,
          {
            fileName: "app/routes/cases._index.tsx",
            lineNumber: 192,
            columnNumber: 23
          },
          this
        )) }, headerGroup.id, !1, {
          fileName: "app/routes/cases._index.tsx",
          lineNumber: 190,
          columnNumber: 19
        }, this)) }, void 0, !1, {
          fileName: "app/routes/cases._index.tsx",
          lineNumber: 188,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV7("tbody", { children: table.getRowModel().rows.map((row) => /* @__PURE__ */ jsxDEV7("tr", { children: row.getVisibleCells().map((cell) => /* @__PURE__ */ jsxDEV7("td", { className: "border-b px-4 py-2", children: flexRender(
          cell.column.columnDef.cell,
          cell.getContext()
        ) }, cell.id, !1, {
          fileName: "app/routes/cases._index.tsx",
          lineNumber: 215,
          columnNumber: 23
        }, this)) }, row.id, !1, {
          fileName: "app/routes/cases._index.tsx",
          lineNumber: 213,
          columnNumber: 19
        }, this)) }, void 0, !1, {
          fileName: "app/routes/cases._index.tsx",
          lineNumber: 211,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/cases._index.tsx",
        lineNumber: 187,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/cases._index.tsx",
        lineNumber: 186,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV7("div", { className: "flex items-center justify-between p-4 border-t", children: [
        /* @__PURE__ */ jsxDEV7("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxDEV7(
            Button,
            {
              variant: "secondary",
              onClick: () => table.previousPage(),
              disabled: !table.getCanPreviousPage(),
              children: "P\xE1gina Anterior"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/cases._index.tsx",
              lineNumber: 230,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV7(
            Button,
            {
              variant: "secondary",
              onClick: () => table.nextPage(),
              disabled: !table.getCanNextPage(),
              children: "P\xE1gina Siguiente"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/cases._index.tsx",
              lineNumber: 237,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/cases._index.tsx",
          lineNumber: 229,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV7("span", { className: "text-sm text-gray-600", children: [
          "P\xE1gina ",
          table.getState().pagination.pageIndex + 1,
          " de",
          " ",
          table.getPageCount()
        ] }, void 0, !0, {
          fileName: "app/routes/cases._index.tsx",
          lineNumber: 245,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/cases._index.tsx",
        lineNumber: 228,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cases._index.tsx",
      lineNumber: 158,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/cases._index.tsx",
    lineNumber: 150,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/cases._index.tsx",
    lineNumber: 149,
    columnNumber: 5
  }, this);
}

// app/routes/cases.$id.tsx
var cases_id_exports = {};
__export(cases_id_exports, {
  default: () => VisualizarCaso,
  loader: () => loader3
});
import { json as json3 } from "@remix-run/node";
import { useLoaderData as useLoaderData3 } from "@remix-run/react";
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
var casoDePrueba2 = {
  id: "1",
  title: "Problema de Calidad de Producto #123",
  type: "non_conformity",
  status: "open",
  priority: "high",
  createdAt: "2023-12-01T10:00:00Z",
  updatedAt: "2023-12-01T10:00:00Z",
  assignedTo: "Juan P\xE9rez"
};
async function loader3({ params }) {
  return json3({ case: casoDePrueba2 });
}
function VisualizarCaso() {
  let { case: caso } = useLoaderData3();
  return /* @__PURE__ */ jsxDEV8(Layout, { children: /* @__PURE__ */ jsxDEV8("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxDEV8("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsxDEV8("h1", { className: "text-2xl font-bold", children: caso.title }, void 0, !1, {
        fileName: "app/routes/cases.$id.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV8("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxDEV8(
          Button,
          {
            variant: "secondary",
            onClick: () => window.location.href = `/cases/${caso.id}/edit`,
            children: "Modificar Caso"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/cases.$id.tsx",
            lineNumber: 33,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV8(
          Button,
          {
            variant: "secondary",
            onClick: () => window.location.href = "/cases",
            children: "Volver al Listado"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/cases.$id.tsx",
            lineNumber: 39,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/cases.$id.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cases.$id.tsx",
      lineNumber: 30,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV8("div", { className: "grid gap-4 md:grid-cols-3", children: [
      /* @__PURE__ */ jsxDEV8(Card, { children: [
        /* @__PURE__ */ jsxDEV8(CardHeader, { children: "Estado Actual" }, void 0, !1, {
          fileName: "app/routes/cases.$id.tsx",
          lineNumber: 50,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV8(CardContent, { children: /* @__PURE__ */ jsxDEV8("span", { className: "font-semibold", children: estadosCaso[caso.status] }, void 0, !1, {
          fileName: "app/routes/cases.$id.tsx",
          lineNumber: 52,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/cases.$id.tsx",
          lineNumber: 51,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/cases.$id.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV8(Card, { children: [
        /* @__PURE__ */ jsxDEV8(CardHeader, { children: "Tipo de Caso" }, void 0, !1, {
          fileName: "app/routes/cases.$id.tsx",
          lineNumber: 59,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV8(CardContent, { children: /* @__PURE__ */ jsxDEV8("span", { className: "font-semibold", children: tiposCaso[caso.type] }, void 0, !1, {
          fileName: "app/routes/cases.$id.tsx",
          lineNumber: 61,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/cases.$id.tsx",
          lineNumber: 60,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/cases.$id.tsx",
        lineNumber: 58,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV8(Card, { children: [
        /* @__PURE__ */ jsxDEV8(CardHeader, { children: "Nivel de Prioridad" }, void 0, !1, {
          fileName: "app/routes/cases.$id.tsx",
          lineNumber: 68,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV8(CardContent, { children: /* @__PURE__ */ jsxDEV8("span", { className: "font-semibold", children: prioridadesCaso[caso.priority] }, void 0, !1, {
          fileName: "app/routes/cases.$id.tsx",
          lineNumber: 70,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/cases.$id.tsx",
          lineNumber: 69,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/cases.$id.tsx",
        lineNumber: 67,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cases.$id.tsx",
      lineNumber: 48,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV8(Card, { children: [
      /* @__PURE__ */ jsxDEV8(CardHeader, { children: "Informaci\xF3n Detallada" }, void 0, !1, {
        fileName: "app/routes/cases.$id.tsx",
        lineNumber: 78,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV8(CardContent, { children: /* @__PURE__ */ jsxDEV8("dl", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxDEV8("div", { children: [
          /* @__PURE__ */ jsxDEV8("dt", { className: "text-sm font-medium text-gray-500", children: "Responsable Asignado" }, void 0, !1, {
            fileName: "app/routes/cases.$id.tsx",
            lineNumber: 82,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV8("dd", { className: "mt-1 text-sm text-gray-900", children: caso.assignedTo }, void 0, !1, {
            fileName: "app/routes/cases.$id.tsx",
            lineNumber: 83,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cases.$id.tsx",
          lineNumber: 81,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV8("div", { children: [
          /* @__PURE__ */ jsxDEV8("dt", { className: "text-sm font-medium text-gray-500", children: "Fecha de Registro" }, void 0, !1, {
            fileName: "app/routes/cases.$id.tsx",
            lineNumber: 86,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV8("dd", { className: "mt-1 text-sm text-gray-900", children: new Date(caso.createdAt).toLocaleString("es-ES") }, void 0, !1, {
            fileName: "app/routes/cases.$id.tsx",
            lineNumber: 87,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cases.$id.tsx",
          lineNumber: 85,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV8("div", { children: [
          /* @__PURE__ */ jsxDEV8("dt", { className: "text-sm font-medium text-gray-500", children: "\xDAltima Modificaci\xF3n" }, void 0, !1, {
            fileName: "app/routes/cases.$id.tsx",
            lineNumber: 92,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV8("dd", { className: "mt-1 text-sm text-gray-900", children: new Date(caso.updatedAt).toLocaleString("es-ES") }, void 0, !1, {
            fileName: "app/routes/cases.$id.tsx",
            lineNumber: 93,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cases.$id.tsx",
          lineNumber: 91,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/cases.$id.tsx",
        lineNumber: 80,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/cases.$id.tsx",
        lineNumber: 79,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cases.$id.tsx",
      lineNumber: 77,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/cases.$id.tsx",
    lineNumber: 29,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/cases.$id.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

// app/routes/cases.new.tsx
var cases_new_exports = {};
__export(cases_new_exports, {
  action: () => action,
  default: () => NewCase
});
import { json as json4, redirect } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
var areas = [
  "produccion",
  "calidad",
  "ventas",
  "despachos",
  "gerencia",
  "contabilidad",
  "marketing",
  "talento humano",
  "cliente"
];
async function action({ request }) {
  let formData = await request.formData(), errors = {};
  return formData.get("title") || (errors.title = "El t\xEDtulo es requerido"), formData.get("client") || (errors.client = "El cliente es requerido"), formData.get("reportedBy") || (errors.reportedBy = "El nombre es requerido"), formData.get("reporterEmail") || (errors.reporterEmail = "El correo es requerido"), formData.get("description") || (errors.description = "La descripci\xF3n es requerida"), formData.get("type") || (errors.type = "El tipo es requerido"), Object.keys(errors).length > 0 ? json4({ errors }) : redirect("/cases");
}
function NewCase() {
  let actionData = useActionData();
  return /* @__PURE__ */ jsxDEV9(Layout, { children: /* @__PURE__ */ jsxDEV9("div", { className: "max-w-3xl mx-auto space-y-4", children: [
    /* @__PURE__ */ jsxDEV9("h1", { className: "text-2xl font-bold", children: "Registrar Nuevo Caso" }, void 0, !1, {
      fileName: "app/routes/cases.new.tsx",
      lineNumber: 60,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV9(Card, { children: [
      /* @__PURE__ */ jsxDEV9(CardHeader, { children: "Informaci\xF3n del Caso" }, void 0, !1, {
        fileName: "app/routes/cases.new.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV9(CardContent, { children: /* @__PURE__ */ jsxDEV9(Form, { method: "post", className: "space-y-6", encType: "multipart/form-data", children: [
        /* @__PURE__ */ jsxDEV9("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxDEV9("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDEV9("label", { className: "block text-sm font-medium text-gray-700", children: "Fecha" }, void 0, !1, {
              fileName: "app/routes/cases.new.tsx",
              lineNumber: 68,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV9(
              "input",
              {
                type: "date",
                name: "date",
                className: "w-full rounded-md border px-3 py-2",
                defaultValue: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
              },
              void 0,
              !1,
              {
                fileName: "app/routes/cases.new.tsx",
                lineNumber: 71,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/cases.new.tsx",
            lineNumber: 67,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV9("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDEV9("label", { className: "block text-sm font-medium text-gray-700", children: "Tipo de Caso" }, void 0, !1, {
              fileName: "app/routes/cases.new.tsx",
              lineNumber: 80,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV9(
              "select",
              {
                name: "type",
                className: "w-full rounded-md border px-3 py-2",
                children: [
                  /* @__PURE__ */ jsxDEV9("option", { value: "", children: "Seleccione un tipo" }, void 0, !1, {
                    fileName: "app/routes/cases.new.tsx",
                    lineNumber: 87,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV9("option", { value: "non_conformity", children: "No Conformidad" }, void 0, !1, {
                    fileName: "app/routes/cases.new.tsx",
                    lineNumber: 88,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV9("option", { value: "complaint", children: "Reclamo" }, void 0, !1, {
                    fileName: "app/routes/cases.new.tsx",
                    lineNumber: 89,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV9("option", { value: "improvement", children: "Mejora" }, void 0, !1, {
                    fileName: "app/routes/cases.new.tsx",
                    lineNumber: 90,
                    columnNumber: 21
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/cases.new.tsx",
                lineNumber: 83,
                columnNumber: 19
              },
              this
            ),
            actionData?.errors?.type && /* @__PURE__ */ jsxDEV9("p", { className: "text-red-600 text-sm", children: actionData.errors.type }, void 0, !1, {
              fileName: "app/routes/cases.new.tsx",
              lineNumber: 93,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/cases.new.tsx",
            lineNumber: 79,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV9("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDEV9("label", { className: "block text-sm font-medium text-gray-700", children: "Cliente" }, void 0, !1, {
              fileName: "app/routes/cases.new.tsx",
              lineNumber: 98,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV9(
              "input",
              {
                type: "text",
                name: "client",
                className: "w-full rounded-md border px-3 py-2",
                placeholder: "Nombre del cliente"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/cases.new.tsx",
                lineNumber: 101,
                columnNumber: 19
              },
              this
            ),
            actionData?.errors?.client && /* @__PURE__ */ jsxDEV9("p", { className: "text-red-600 text-sm", children: actionData.errors.client }, void 0, !1, {
              fileName: "app/routes/cases.new.tsx",
              lineNumber: 108,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/cases.new.tsx",
            lineNumber: 97,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV9("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDEV9("label", { className: "block text-sm font-medium text-gray-700", children: "Orden de Producci\xF3n" }, void 0, !1, {
              fileName: "app/routes/cases.new.tsx",
              lineNumber: 113,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV9(
              "input",
              {
                type: "text",
                name: "productionOrder",
                className: "w-full rounded-md border px-3 py-2",
                placeholder: "N\xFAmero de orden"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/cases.new.tsx",
                lineNumber: 116,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/cases.new.tsx",
            lineNumber: 112,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV9("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDEV9("label", { className: "block text-sm font-medium text-gray-700", children: "C\xF3digo de Producto" }, void 0, !1, {
              fileName: "app/routes/cases.new.tsx",
              lineNumber: 125,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV9(
              "input",
              {
                type: "text",
                name: "productCode",
                className: "w-full rounded-md border px-3 py-2",
                placeholder: "C\xF3digo del producto"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/cases.new.tsx",
                lineNumber: 128,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/cases.new.tsx",
            lineNumber: 124,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV9("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDEV9("label", { className: "block text-sm font-medium text-gray-700", children: "\xC1rea" }, void 0, !1, {
              fileName: "app/routes/cases.new.tsx",
              lineNumber: 137,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV9(
              "select",
              {
                name: "area",
                className: "w-full rounded-md border px-3 py-2",
                children: [
                  /* @__PURE__ */ jsxDEV9("option", { value: "", children: "Seleccione un \xE1rea" }, void 0, !1, {
                    fileName: "app/routes/cases.new.tsx",
                    lineNumber: 144,
                    columnNumber: 21
                  }, this),
                  areas.map((area) => /* @__PURE__ */ jsxDEV9("option", { value: area, children: area.charAt(0).toUpperCase() + area.slice(1) }, area, !1, {
                    fileName: "app/routes/cases.new.tsx",
                    lineNumber: 146,
                    columnNumber: 23
                  }, this))
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/cases.new.tsx",
                lineNumber: 140,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/cases.new.tsx",
            lineNumber: 136,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV9("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDEV9("label", { className: "block text-sm font-medium text-gray-700", children: "Reportado por" }, void 0, !1, {
              fileName: "app/routes/cases.new.tsx",
              lineNumber: 154,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV9(
              "input",
              {
                type: "text",
                name: "reportedBy",
                className: "w-full rounded-md border px-3 py-2",
                placeholder: "Nombre completo"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/cases.new.tsx",
                lineNumber: 157,
                columnNumber: 19
              },
              this
            ),
            actionData?.errors?.reportedBy && /* @__PURE__ */ jsxDEV9("p", { className: "text-red-600 text-sm", children: actionData.errors.reportedBy }, void 0, !1, {
              fileName: "app/routes/cases.new.tsx",
              lineNumber: 164,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/cases.new.tsx",
            lineNumber: 153,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV9("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDEV9("label", { className: "block text-sm font-medium text-gray-700", children: "Correo electr\xF3nico" }, void 0, !1, {
              fileName: "app/routes/cases.new.tsx",
              lineNumber: 169,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV9(
              "input",
              {
                type: "email",
                name: "reporterEmail",
                className: "w-full rounded-md border px-3 py-2",
                placeholder: "correo@ejemplo.com"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/cases.new.tsx",
                lineNumber: 172,
                columnNumber: 19
              },
              this
            ),
            actionData?.errors?.reporterEmail && /* @__PURE__ */ jsxDEV9("p", { className: "text-red-600 text-sm", children: actionData.errors.reporterEmail }, void 0, !1, {
              fileName: "app/routes/cases.new.tsx",
              lineNumber: 179,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/cases.new.tsx",
            lineNumber: 168,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cases.new.tsx",
          lineNumber: 66,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV9("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxDEV9("label", { className: "block text-sm font-medium text-gray-700", children: "Descripci\xF3n del caso" }, void 0, !1, {
            fileName: "app/routes/cases.new.tsx",
            lineNumber: 185,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV9(
            "textarea",
            {
              name: "description",
              rows: 4,
              className: "w-full rounded-md border px-3 py-2",
              placeholder: "Describe el caso o mejora..."
            },
            void 0,
            !1,
            {
              fileName: "app/routes/cases.new.tsx",
              lineNumber: 188,
              columnNumber: 17
            },
            this
          ),
          actionData?.errors?.description && /* @__PURE__ */ jsxDEV9("p", { className: "text-red-600 text-sm", children: actionData.errors.description }, void 0, !1, {
            fileName: "app/routes/cases.new.tsx",
            lineNumber: 195,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cases.new.tsx",
          lineNumber: 184,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV9("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxDEV9("label", { className: "block text-sm font-medium text-gray-700", children: "Evidencia fotogr\xE1fica" }, void 0, !1, {
            fileName: "app/routes/cases.new.tsx",
            lineNumber: 200,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV9(
            "input",
            {
              type: "file",
              name: "evidence",
              accept: "image/*",
              multiple: !0,
              className: "w-full"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/cases.new.tsx",
              lineNumber: 203,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/cases.new.tsx",
          lineNumber: 199,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV9("div", { className: "flex justify-end gap-4", children: [
          /* @__PURE__ */ jsxDEV9(
            Button,
            {
              type: "button",
              variant: "secondary",
              onClick: () => window.history.back(),
              children: "Cancelar"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/cases.new.tsx",
              lineNumber: 213,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV9(Button, { type: "submit", children: "Crear Caso" }, void 0, !1, {
            fileName: "app/routes/cases.new.tsx",
            lineNumber: 220,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cases.new.tsx",
          lineNumber: 212,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/cases.new.tsx",
        lineNumber: 65,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/cases.new.tsx",
        lineNumber: 64,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cases.new.tsx",
      lineNumber: 62,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/cases.new.tsx",
    lineNumber: 59,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/cases.new.tsx",
    lineNumber: 58,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  default: () => Dashboard,
  loader: () => loader4
});
import { json as json5 } from "@remix-run/node";
import { useLoaderData as useLoaderData4 } from "@remix-run/react";
import { motion as motion2 } from "framer-motion";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);
var container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}, item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};
async function loader4() {
  return json5({
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
      { id: 1, title: "No conformidad en l\xEDnea de producci\xF3n", type: "non_conformity", status: "open", date: "2023-12-10" },
      { id: 2, title: "Reclamo de cliente por entrega tard\xEDa", type: "complaint", status: "in_progress", date: "2023-12-09" },
      { id: 3, title: "Propuesta de mejora en empaque", type: "improvement", status: "resolved", date: "2023-12-08" }
    ]
  });
}
function Dashboard() {
  let { stats, byType, byPriority, recentActivity } = useLoaderData4(), typeChartData = {
    labels: Object.values(tiposCaso),
    datasets: [
      {
        data: Object.values(byType),
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)"
        ]
      }
    ]
  }, priorityChartData = {
    labels: ["\xDAltimos 7 d\xEDas"],
    datasets: [
      {
        label: "Alta",
        data: [byPriority.high],
        backgroundColor: "rgba(255, 99, 132, 0.5)"
      },
      {
        label: "Media",
        data: [byPriority.medium],
        backgroundColor: "rgba(54, 162, 235, 0.5)"
      },
      {
        label: "Baja",
        data: [byPriority.low],
        backgroundColor: "rgba(75, 192, 192, 0.5)"
      }
    ]
  };
  return /* @__PURE__ */ jsxDEV10(Layout, { children: /* @__PURE__ */ jsxDEV10(
    motion2.div,
    {
      variants: container,
      initial: "hidden",
      animate: "show",
      className: "space-y-6",
      children: [
        /* @__PURE__ */ jsxDEV10(motion2.div, { variants: item, children: /* @__PURE__ */ jsxDEV10("h1", { className: "text-2xl font-bold", children: "Panel de Control" }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 119,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 118,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV10(
          motion2.div,
          {
            variants: item,
            className: "grid grid-cols-1 md:grid-cols-4 gap-4",
            children: [
              /* @__PURE__ */ jsxDEV10(Card, { className: "bg-blue-50", children: /* @__PURE__ */ jsxDEV10(CardContent, { className: "p-4", children: [
                /* @__PURE__ */ jsxDEV10("div", { className: "text-sm text-blue-600", children: "Total de Casos" }, void 0, !1, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 128,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV10("div", { className: "text-2xl font-bold", children: stats.total }, void 0, !1, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 129,
                  columnNumber: 15
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 127,
                columnNumber: 13
              }, this) }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 126,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ jsxDEV10(Card, { className: "bg-yellow-50", children: /* @__PURE__ */ jsxDEV10(CardContent, { className: "p-4", children: [
                /* @__PURE__ */ jsxDEV10("div", { className: "text-sm text-yellow-600", children: "Casos Abiertos" }, void 0, !1, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 134,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV10("div", { className: "text-2xl font-bold", children: stats.open }, void 0, !1, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 135,
                  columnNumber: 15
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 133,
                columnNumber: 13
              }, this) }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 132,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ jsxDEV10(Card, { className: "bg-green-50", children: /* @__PURE__ */ jsxDEV10(CardContent, { className: "p-4", children: [
                /* @__PURE__ */ jsxDEV10("div", { className: "text-sm text-green-600", children: "En Progreso" }, void 0, !1, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 140,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV10("div", { className: "text-2xl font-bold", children: stats.inProgress }, void 0, !1, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 141,
                  columnNumber: 15
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 139,
                columnNumber: 13
              }, this) }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 138,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ jsxDEV10(Card, { className: "bg-purple-50", children: /* @__PURE__ */ jsxDEV10(CardContent, { className: "p-4", children: [
                /* @__PURE__ */ jsxDEV10("div", { className: "text-sm text-purple-600", children: "Resueltos" }, void 0, !1, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 146,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV10("div", { className: "text-2xl font-bold", children: stats.resolved }, void 0, !1, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 147,
                  columnNumber: 15
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 145,
                columnNumber: 13
              }, this) }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 144,
                columnNumber: 11
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 122,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ jsxDEV10(motion2.div, { variants: item, className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxDEV10(Card, { children: [
            /* @__PURE__ */ jsxDEV10(CardHeader, { children: "Distribuci\xF3n por Tipo" }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 154,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV10(CardContent, { children: /* @__PURE__ */ jsxDEV10("div", { className: "h-64", children: /* @__PURE__ */ jsxDEV10(Pie, { data: typeChartData, options: { maintainAspectRatio: !1 } }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 157,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 156,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 155,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 153,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV10(Card, { children: [
            /* @__PURE__ */ jsxDEV10(CardHeader, { children: "Casos por Prioridad (\xDAltimos 7 d\xEDas)" }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 163,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV10(CardContent, { children: /* @__PURE__ */ jsxDEV10("div", { className: "h-64", children: /* @__PURE__ */ jsxDEV10(
              Bar,
              {
                data: priorityChartData,
                options: {
                  maintainAspectRatio: !1,
                  scales: {
                    y: {
                      beginAtZero: !0
                    }
                  }
                }
              },
              void 0,
              !1,
              {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 166,
                columnNumber: 17
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 165,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 164,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 162,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 152,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV10(motion2.div, { variants: item, children: /* @__PURE__ */ jsxDEV10(Card, { children: [
          /* @__PURE__ */ jsxDEV10(CardHeader, { children: "Actividad Reciente" }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 184,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV10(CardContent, { children: /* @__PURE__ */ jsxDEV10("div", { className: "divide-y", children: recentActivity.map((activity) => /* @__PURE__ */ jsxDEV10("div", { className: "py-3", children: /* @__PURE__ */ jsxDEV10("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxDEV10("div", { children: [
              /* @__PURE__ */ jsxDEV10("h3", { className: "font-medium", children: activity.title }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 191,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV10("p", { className: "text-sm text-gray-500", children: [
                tiposCaso[activity.type],
                " - ",
                estadosCaso[activity.status]
              ] }, void 0, !0, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 192,
                columnNumber: 25
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 190,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDEV10("div", { className: "text-sm text-gray-500", children: new Date(activity.date).toLocaleDateString("es-ES") }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 196,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 189,
            columnNumber: 21
          }, this) }, activity.id, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 188,
            columnNumber: 19
          }, this)) }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 186,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 185,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 183,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 182,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 112,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 111,
    columnNumber: 5
  }, this);
}

// app/routes/settings.tsx
var settings_exports = {};
__export(settings_exports, {
  action: () => action2,
  default: () => Settings,
  loader: () => loader5
});
import { json as json6 } from "@remix-run/node";
import { useLoaderData as useLoaderData5, useNavigation, Form as Form2, useActionData as useActionData2 } from "@remix-run/react";
import { motion as motion3 } from "framer-motion";
import { Save } from "lucide-react";
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
var container2 = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}, item2 = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};
async function loader5() {
  return json6({
    general: {
      companyName: "Mi Empresa",
      email: "contacto@miempresa.com",
      phone: "+34 123 456 789"
    },
    notifications: {
      emailNotifications: !0,
      dailyDigest: !0,
      criticalAlerts: !0
    },
    workflow: {
      requireApproval: !0,
      autoCloseAfterDays: 30,
      defaultPriority: "medium"
    }
  });
}
async function action2({ request }) {
  let formData = await request.formData(), settings = {
    general: {
      companyName: formData.get("companyName"),
      email: formData.get("email"),
      phone: formData.get("phone")
    },
    notifications: {
      emailNotifications: formData.get("emailNotifications") === "on",
      dailyDigest: formData.get("dailyDigest") === "on",
      criticalAlerts: formData.get("criticalAlerts") === "on"
    },
    workflow: {
      requireApproval: formData.get("requireApproval") === "on",
      autoCloseAfterDays: Number(formData.get("autoCloseAfterDays")),
      defaultPriority: formData.get("defaultPriority")
    }
  };
  return console.log("Saving settings:", settings), json6({ success: !0, settings });
}
function Settings() {
  let settings = useLoaderData5(), actionData = useActionData2(), isSubmitting = useNavigation().state === "submitting";
  return /* @__PURE__ */ jsxDEV11(Layout, { children: /* @__PURE__ */ jsxDEV11(
    motion3.div,
    {
      variants: container2,
      initial: "hidden",
      animate: "show",
      className: "space-y-6",
      children: [
        /* @__PURE__ */ jsxDEV11(motion3.div, { variants: item2, children: [
          /* @__PURE__ */ jsxDEV11("h1", { className: "text-2xl font-bold", children: "Configuraci\xF3n" }, void 0, !1, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 88,
            columnNumber: 11
          }, this),
          actionData?.success && /* @__PURE__ */ jsxDEV11("p", { className: "mt-2 text-sm text-green-600", children: "Configuraci\xF3n guardada correctamente" }, void 0, !1, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 90,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 87,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV11(Form2, { method: "post", children: /* @__PURE__ */ jsxDEV11(motion3.div, { variants: item2, className: "space-y-6", children: [
          /* @__PURE__ */ jsxDEV11(Card, { children: [
            /* @__PURE__ */ jsxDEV11(CardHeader, { children: "Configuraci\xF3n General" }, void 0, !1, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 99,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV11(CardContent, { className: "space-y-4", children: [
              /* @__PURE__ */ jsxDEV11("div", { children: [
                /* @__PURE__ */ jsxDEV11("label", { htmlFor: "companyName", className: "block text-sm font-medium text-gray-700", children: "Nombre de la Empresa" }, void 0, !1, {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 102,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV11(
                  "input",
                  {
                    type: "text",
                    id: "companyName",
                    name: "companyName",
                    defaultValue: settings.general.companyName,
                    className: "mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/settings.tsx",
                    lineNumber: 105,
                    columnNumber: 19
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 101,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV11("div", { children: [
                /* @__PURE__ */ jsxDEV11("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700", children: "Email" }, void 0, !1, {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 114,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV11(
                  "input",
                  {
                    type: "email",
                    id: "email",
                    name: "email",
                    defaultValue: settings.general.email,
                    className: "mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/settings.tsx",
                    lineNumber: 117,
                    columnNumber: 19
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 113,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV11("div", { children: [
                /* @__PURE__ */ jsxDEV11("label", { htmlFor: "phone", className: "block text-sm font-medium text-gray-700", children: "Tel\xE9fono" }, void 0, !1, {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 126,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV11(
                  "input",
                  {
                    type: "tel",
                    id: "phone",
                    name: "phone",
                    defaultValue: settings.general.phone,
                    className: "mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/settings.tsx",
                    lineNumber: 129,
                    columnNumber: 19
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 125,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 100,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 98,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV11(Card, { children: [
            /* @__PURE__ */ jsxDEV11(CardHeader, { children: "Notificaciones" }, void 0, !1, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 141,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV11(CardContent, { className: "space-y-4", children: [
              /* @__PURE__ */ jsxDEV11("div", { className: "flex items-center", children: [
                /* @__PURE__ */ jsxDEV11(
                  "input",
                  {
                    type: "checkbox",
                    id: "emailNotifications",
                    name: "emailNotifications",
                    defaultChecked: settings.notifications.emailNotifications,
                    className: "h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/settings.tsx",
                    lineNumber: 144,
                    columnNumber: 19
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV11("label", { htmlFor: "emailNotifications", className: "ml-2 block text-sm text-gray-900", children: "Notificaciones por email" }, void 0, !1, {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 151,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 143,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV11("div", { className: "flex items-center", children: [
                /* @__PURE__ */ jsxDEV11(
                  "input",
                  {
                    type: "checkbox",
                    id: "dailyDigest",
                    name: "dailyDigest",
                    defaultChecked: settings.notifications.dailyDigest,
                    className: "h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/settings.tsx",
                    lineNumber: 156,
                    columnNumber: 19
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV11("label", { htmlFor: "dailyDigest", className: "ml-2 block text-sm text-gray-900", children: "Resumen diario" }, void 0, !1, {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 163,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 155,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV11("div", { className: "flex items-center", children: [
                /* @__PURE__ */ jsxDEV11(
                  "input",
                  {
                    type: "checkbox",
                    id: "criticalAlerts",
                    name: "criticalAlerts",
                    defaultChecked: settings.notifications.criticalAlerts,
                    className: "h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/settings.tsx",
                    lineNumber: 168,
                    columnNumber: 19
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV11("label", { htmlFor: "criticalAlerts", className: "ml-2 block text-sm text-gray-900", children: "Alertas cr\xEDticas" }, void 0, !1, {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 175,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 167,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 142,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 140,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV11(Card, { children: [
            /* @__PURE__ */ jsxDEV11(CardHeader, { children: "Flujo de Trabajo" }, void 0, !1, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 183,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV11(CardContent, { className: "space-y-4", children: [
              /* @__PURE__ */ jsxDEV11("div", { className: "flex items-center", children: [
                /* @__PURE__ */ jsxDEV11(
                  "input",
                  {
                    type: "checkbox",
                    id: "requireApproval",
                    name: "requireApproval",
                    defaultChecked: settings.workflow.requireApproval,
                    className: "h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/settings.tsx",
                    lineNumber: 186,
                    columnNumber: 19
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV11("label", { htmlFor: "requireApproval", className: "ml-2 block text-sm text-gray-900", children: "Requerir aprobaci\xF3n" }, void 0, !1, {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 193,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 185,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV11("div", { children: [
                /* @__PURE__ */ jsxDEV11("label", { htmlFor: "autoCloseAfterDays", className: "block text-sm font-medium text-gray-700", children: "Cerrar autom\xE1ticamente despu\xE9s de (d\xEDas)" }, void 0, !1, {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 198,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV11(
                  "input",
                  {
                    type: "number",
                    id: "autoCloseAfterDays",
                    name: "autoCloseAfterDays",
                    defaultValue: settings.workflow.autoCloseAfterDays,
                    min: "1",
                    max: "365",
                    className: "mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/settings.tsx",
                    lineNumber: 201,
                    columnNumber: 19
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 197,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV11("div", { children: [
                /* @__PURE__ */ jsxDEV11("label", { htmlFor: "defaultPriority", className: "block text-sm font-medium text-gray-700", children: "Prioridad por defecto" }, void 0, !1, {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 212,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV11(
                  "select",
                  {
                    id: "defaultPriority",
                    name: "defaultPriority",
                    defaultValue: settings.workflow.defaultPriority,
                    className: "mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm",
                    children: [
                      /* @__PURE__ */ jsxDEV11("option", { value: "low", children: "Baja" }, void 0, !1, {
                        fileName: "app/routes/settings.tsx",
                        lineNumber: 221,
                        columnNumber: 21
                      }, this),
                      /* @__PURE__ */ jsxDEV11("option", { value: "medium", children: "Media" }, void 0, !1, {
                        fileName: "app/routes/settings.tsx",
                        lineNumber: 222,
                        columnNumber: 21
                      }, this),
                      /* @__PURE__ */ jsxDEV11("option", { value: "high", children: "Alta" }, void 0, !1, {
                        fileName: "app/routes/settings.tsx",
                        lineNumber: 223,
                        columnNumber: 21
                      }, this)
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "app/routes/settings.tsx",
                    lineNumber: 215,
                    columnNumber: 19
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 211,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 184,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 182,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV11("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxDEV11(Button, { type: "submit", disabled: isSubmitting, children: [
            /* @__PURE__ */ jsxDEV11(Save, { className: "w-4 h-4 mr-2" }, void 0, !1, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 231,
              columnNumber: 17
            }, this),
            isSubmitting ? "Guardando..." : "Guardar cambios"
          ] }, void 0, !0, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 230,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 229,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 97,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 96,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/settings.tsx",
      lineNumber: 81,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/settings.tsx",
    lineNumber: 80,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta
});
import { Link as Link3 } from "@remix-run/react";
import { motion as motion4 } from "framer-motion";
import { jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
var meta = () => [
  { title: "Sistema de Gesti\xF3n de Calidad" },
  { name: "description", content: "Sistema Digital de Gesti\xF3n para Control de Calidad" }
], container3 = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}, item3 = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};
function Index() {
  return /* @__PURE__ */ jsxDEV12(Layout, { children: /* @__PURE__ */ jsxDEV12("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxDEV12(
      motion4.div,
      {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
        className: "text-center",
        children: [
          /* @__PURE__ */ jsxDEV12("h1", { className: "text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl", children: "Sistema de Gesti\xF3n de Calidad" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 40,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV12("p", { className: "mt-6 text-lg leading-8 text-gray-600", children: "Digitalice la gesti\xF3n de no conformidades, reclamos y mejoras" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 43,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 34,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV12(
      motion4.div,
      {
        variants: container3,
        initial: "hidden",
        animate: "show",
        className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
        children: [
          /* @__PURE__ */ jsxDEV12(motion4.div, { variants: item3, children: /* @__PURE__ */ jsxDEV12(Card, { children: [
            /* @__PURE__ */ jsxDEV12(CardHeader, { children: "Gesti\xF3n de Casos" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 56,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV12(CardContent, { children: [
              /* @__PURE__ */ jsxDEV12("p", { className: "text-gray-600", children: "Gestione y realice seguimiento de casos incluyendo no conformidades, reclamos y mejoras de manera eficiente." }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 58,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV12(Link3, { to: "/cases/new", children: /* @__PURE__ */ jsxDEV12(Button, { className: "mt-4", children: "Crear Nuevo Caso" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 63,
                columnNumber: 19
              }, this) }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 62,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 57,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 55,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 54,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV12(motion4.div, { variants: item3, children: /* @__PURE__ */ jsxDEV12(Card, { children: [
            /* @__PURE__ */ jsxDEV12(CardHeader, { children: "Panel de Control" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 71,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV12(CardContent, { children: [
              /* @__PURE__ */ jsxDEV12("p", { className: "text-gray-600", children: "Monitoree indicadores clave de rendimiento y siga el progreso con an\xE1lisis en tiempo real." }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 73,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV12(Link3, { to: "/dashboard", children: /* @__PURE__ */ jsxDEV12(Button, { className: "mt-4", children: "Ver Panel" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 78,
                columnNumber: 19
              }, this) }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 77,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 72,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 70,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 69,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV12(motion4.div, { variants: item3, children: /* @__PURE__ */ jsxDEV12(Card, { children: [
            /* @__PURE__ */ jsxDEV12(CardHeader, { children: "Configuraci\xF3n del Sistema" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 86,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV12(CardContent, { children: [
              /* @__PURE__ */ jsxDEV12("p", { className: "text-gray-600", children: "Configure ajustes del sistema, gestione departamentos y personalice flujos de trabajo." }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 88,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV12(Link3, { to: "/settings", children: /* @__PURE__ */ jsxDEV12(Button, { className: "mt-4", children: "Administrar Configuraci\xF3n" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 93,
                columnNumber: 19
              }, this) }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 92,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 87,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 85,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 84,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 48,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 33,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-A3UT6J3A.js", imports: ["/build/_shared/chunk-4ZNTBH4S.js", "/build/_shared/chunk-WWEL7QKW.js", "/build/_shared/chunk-SZF5NYHC.js", "/build/_shared/chunk-7SRK3KT3.js", "/build/_shared/chunk-N4FG5RPV.js", "/build/_shared/chunk-OPGM6WIO.js", "/build/_shared/chunk-2AFRYLX2.js", "/build/_shared/chunk-RODUX5XG.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-XSD2KY2T.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-TT5BK6AX.js", imports: ["/build/_shared/chunk-VLIYEANG.js", "/build/_shared/chunk-UHM3X5LG.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/cases.$id": { id: "routes/cases.$id", parentId: "root", path: "cases/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/cases.$id-2SLXGHFG.js", imports: ["/build/_shared/chunk-BRVSUSJ4.js", "/build/_shared/chunk-VLIYEANG.js", "/build/_shared/chunk-TMJLOEVS.js", "/build/_shared/chunk-UHM3X5LG.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/cases.$id.edit": { id: "routes/cases.$id.edit", parentId: "routes/cases.$id", path: "edit", index: void 0, caseSensitive: void 0, module: "/build/routes/cases.$id.edit-W6L6EAHU.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/cases._index": { id: "routes/cases._index", parentId: "root", path: "cases", index: !0, caseSensitive: void 0, module: "/build/routes/cases._index-63QBN5P4.js", imports: ["/build/_shared/chunk-BRVSUSJ4.js", "/build/_shared/chunk-LZQOAN3A.js", "/build/_shared/chunk-VLIYEANG.js", "/build/_shared/chunk-TMJLOEVS.js", "/build/_shared/chunk-UHM3X5LG.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/cases.new": { id: "routes/cases.new", parentId: "root", path: "cases/new", index: void 0, caseSensitive: void 0, module: "/build/routes/cases.new-4TOCZ44U.js", imports: ["/build/_shared/chunk-VLIYEANG.js", "/build/_shared/chunk-TMJLOEVS.js", "/build/_shared/chunk-UHM3X5LG.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/dashboard": { id: "routes/dashboard", parentId: "root", path: "dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard-7H2D66AO.js", imports: ["/build/_shared/chunk-BRVSUSJ4.js", "/build/_shared/chunk-TMJLOEVS.js", "/build/_shared/chunk-UHM3X5LG.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/settings": { id: "routes/settings", parentId: "root", path: "settings", index: void 0, caseSensitive: void 0, module: "/build/routes/settings-OOVXVSLB.js", imports: ["/build/_shared/chunk-LZQOAN3A.js", "/build/_shared/chunk-VLIYEANG.js", "/build/_shared/chunk-TMJLOEVS.js", "/build/_shared/chunk-UHM3X5LG.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "622983ad", hmr: { runtime: "/build/_shared/chunk-7SRK3KT3.js", timestamp: 1740878054869 }, url: "/build/manifest-622983AD.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !0, v3_relativeSplatPath: !0, v3_throwAbortReason: !0, v3_routeConfig: !1, v3_singleFetch: !0, v3_lazyRouteDiscovery: !0, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/cases.$id.edit": {
    id: "routes/cases.$id.edit",
    parentId: "routes/cases.$id",
    path: "edit",
    index: void 0,
    caseSensitive: void 0,
    module: cases_id_edit_exports
  },
  "routes/cases._index": {
    id: "routes/cases._index",
    parentId: "root",
    path: "cases",
    index: !0,
    caseSensitive: void 0,
    module: cases_index_exports
  },
  "routes/cases.$id": {
    id: "routes/cases.$id",
    parentId: "root",
    path: "cases/:id",
    index: void 0,
    caseSensitive: void 0,
    module: cases_id_exports
  },
  "routes/cases.new": {
    id: "routes/cases.new",
    parentId: "root",
    path: "cases/new",
    index: void 0,
    caseSensitive: void 0,
    module: cases_new_exports
  },
  "routes/dashboard": {
    id: "routes/dashboard",
    parentId: "root",
    path: "dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/settings": {
    id: "routes/settings",
    parentId: "root",
    path: "settings",
    index: void 0,
    caseSensitive: void 0,
    module: settings_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
