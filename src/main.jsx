import { GeistProvider } from "@geist-ui/core"
import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import "./App.css"
import Router from "./Router"
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<GeistProvider>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</GeistProvider>
	</React.StrictMode>,
)
