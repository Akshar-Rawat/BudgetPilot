import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=1297a119"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=1297a119"; const StrictMode = __vite__cjsImport1_react["StrictMode"];
import __vite__cjsImport2_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=1297a119"; const createRoot = __vite__cjsImport2_reactDom_client["createRoot"];
import "/src/index.css?t=1761481017217";
import App from "/src/App.jsx?t=1761493793154";
import { createBrowserRouter, RouterProvider } from "/node_modules/.vite/deps/react-router-dom.js?v=1297a119";
import Dashboard, { dashboardLoader } from "/src/pages/Dashboard.jsx?t=1761493830183";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: /* @__PURE__ */ jsxDEV(App, {}, void 0, false, {
        fileName: "C:/Users/aksha/OneDrive/Desktop/Financial Analyzer/Budget Tracker/src/main.jsx",
        lineNumber: 11,
        columnNumber: 12
      }, this),
      children: [
        {
          path: "/",
          element: /* @__PURE__ */ jsxDEV(Dashboard, {}, void 0, false, {
            fileName: "C:/Users/aksha/OneDrive/Desktop/Financial Analyzer/Budget Tracker/src/main.jsx",
            lineNumber: 15,
            columnNumber: 14
          }, this),
          loader: dashboardLoader
        },
        {}
      ]
    }
  ]
);
createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxDEV(RouterProvider, { router }, void 0, false, {
    fileName: "C:/Users/aksha/OneDrive/Desktop/Financial Analyzer/Budget Tracker/src/main.jsx",
    lineNumber: 26,
    columnNumber: 3
  }, this)
);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBVWE7QUFWYixTQUFTQSxrQkFBa0I7QUFDM0IsU0FBU0Msa0JBQWtCO0FBQzNCLE9BQU87QUFDUCxPQUFPQyxTQUFTO0FBQ2hCLFNBQVNDLHFCQUFxQkMsc0JBQXNCO0FBQ3BELE9BQU9DLGFBQWFDLHVCQUF1QjtBQUUzQyxNQUFNQyxTQUFTSjtBQUFBQSxFQUFvQjtBQUFBLElBQ2pDO0FBQUEsTUFDRUssTUFBTTtBQUFBLE1BQ05DLFNBQVMsdUJBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQUk7QUFBQSxNQUNiQyxVQUFVO0FBQUEsUUFDUjtBQUFBLFVBQ0VGLE1BQU07QUFBQSxVQUNOQyxTQUFTLHVCQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBVTtBQUFBLFVBQ25CRSxRQUFRTDtBQUFBQSxRQUNWO0FBQUEsUUFDQSxDQUVBO0FBQUEsTUFBQztBQUFBLElBRUw7QUFBQSxFQUFDO0FBQ0Y7QUFFREwsV0FBV1csU0FBU0MsZUFBZSxNQUFNLENBQUMsRUFBRUM7QUFBQUEsRUFDMUMsdUJBQUMsa0JBQWUsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUErQjtBQUNqQyIsIm5hbWVzIjpbIlN0cmljdE1vZGUiLCJjcmVhdGVSb290IiwiQXBwIiwiY3JlYXRlQnJvd3NlclJvdXRlciIsIlJvdXRlclByb3ZpZGVyIiwiRGFzaGJvYXJkIiwiZGFzaGJvYXJkTG9hZGVyIiwicm91dGVyIiwicGF0aCIsImVsZW1lbnQiLCJjaGlsZHJlbiIsImxvYWRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsibWFpbi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RyaWN0TW9kZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9BcHAuanN4XCI7XG5pbXBvcnQgeyBjcmVhdGVCcm93c2VyUm91dGVyLCBSb3V0ZXJQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgRGFzaGJvYXJkLCB7IGRhc2hib2FyZExvYWRlciB9IGZyb20gXCIuL3BhZ2VzL0Rhc2hib2FyZC5qc3hcIjtcblxuY29uc3Qgcm91dGVyID0gY3JlYXRlQnJvd3NlclJvdXRlcihbXG4gIHtcbiAgICBwYXRoOiBcIi9cIixcbiAgICBlbGVtZW50OiA8QXBwIC8+LFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL1wiLFxuICAgICAgICBlbGVtZW50OiA8RGFzaGJvYXJkIC8+LFxuICAgICAgICBsb2FkZXI6IGRhc2hib2FyZExvYWRlcixcbiAgICAgIH0sXG4gICAgICB7XG5cbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbl0pO1xuXG5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKSkucmVuZGVyKFxuICA8Um91dGVyUHJvdmlkZXIgcm91dGVyPXtyb3V0ZXJ9IC8+XG4pO1xuIl0sImZpbGUiOiJDOi9Vc2Vycy9ha3NoYS9PbmVEcml2ZS9EZXNrdG9wL0ZpbmFuY2lhbCBBbmFseXplci9CdWRnZXQgVHJhY2tlci9zcmMvbWFpbi5qc3gifQ==