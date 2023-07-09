import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import AuthPage from "./pages/auth"
import ProfilePage from "./pages/profile"

export default function Router() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/auth" element={<AuthPage />} />
			<Route path="/profile/:id" element={<ProfilePage />} />
		</Routes>
	)
}
