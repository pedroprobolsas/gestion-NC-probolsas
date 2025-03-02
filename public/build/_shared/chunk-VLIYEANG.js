import {
  twMerge
} from "/build/_shared/chunk-UHM3X5LG.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-WWEL7QKW.js";
import {
  createHotContext
} from "/build/_shared/chunk-7SRK3KT3.js";
import {
  __toESM
} from "/build/_shared/chunk-RODUX5XG.js";

// app/components/ui/Button.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/Button.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/Button.tsx"
  );
  import.meta.hot.lastModified = "1740866091910";
}
function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: twMerge("inline-flex items-center justify-center rounded-md font-medium transition-colors", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2", "disabled:pointer-events-none disabled:opacity-50", variant === "primary" && "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500", variant === "secondary" && "bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-gray-500", variant === "danger" && "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500", size === "sm" && "h-8 px-3 text-sm", size === "md" && "h-10 px-4", size === "lg" && "h-12 px-6 text-lg", className), ...props }, void 0, false, {
    fileName: "app/components/ui/Button.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}
_c = Button;
var _c;
$RefreshReg$(_c, "Button");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Button
};
//# sourceMappingURL=/build/_shared/chunk-VLIYEANG.js.map
