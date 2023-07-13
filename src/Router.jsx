import { useEffect } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { useAuth } from "./api/useAuth"
import Home from "./pages/Home"
import AuthPage from "./pages/auth"
import ProfilePage from "./pages/profile"

export default function Router() {
	// get token from url params
	const params = new URLSearchParams(window.location.hash.slice(1))
	const [accessToken] = [params.get("access_token")]
	const { mutate } = useAuth()
	const user = JSON.parse(localStorage.getItem("user"))

	useEffect(() => {
		//login user if token is present
		if (accessToken) mutate(accessToken)
	}, [accessToken, mutate])

	return (
		<Routes>
			{/* add private route */}
			<Route
				path="/"
				element={
					user || accessToken ? <Home user={user} /> : <Navigate to={"/auth"} />
				}
			/>
			<Route path="/auth" element={<AuthPage />} />
			<Route path="/profile/:id" element={<ProfilePage />} />
		</Routes>
	)
}
