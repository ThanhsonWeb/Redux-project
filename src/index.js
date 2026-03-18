import React from "react";
import ReactDOM from "react-dom/client";
// b1 import Provider 
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		{/*  give the entire app able to access to the store */}
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
);
