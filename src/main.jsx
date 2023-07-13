import { GeistProvider } from "@geist-ui/core"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import "./App.css"
import Router from "./Router"
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<GeistProvider>
			<QueryClientProvider client={queryClient}>
				<BrowserRouter>
					<Router />
				</BrowserRouter>
			</QueryClientProvider>
		</GeistProvider>
	</React.StrictMode>,
)
