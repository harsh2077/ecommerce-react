import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./state";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "./theme";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);




























// server/src/api 
// server/src/api/item 
// server/src/api/item/content-types 
// server/src/api/item/content-types/item 
// server/src/api/item/content-types/item/schema.json 
// server/src/api/item/controllers 
// server/src/api/item/controllers/item.js 
// server/src/api/item/routes 
// server/src/api/item/routes/item.js 
// server/src/api/item/services 
// server/src/api/item/services/item.js 
// server/src/api/order 
// server/src/api/order/content-types 
// server/src/api/order/content-types/order 
// server/src/api/order/content-types/order/schema.json 
// server/src/api/order/controllers 
// server/src/api/order/controllers/order.js 
// server/src/api/order/routes 
// server/src/api/order/routes/order.js 
// server/src/api/order/services 
// server/src/api/order/services/order.js