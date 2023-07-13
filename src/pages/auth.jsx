export default function AuthPage() {
	return (
		<>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<a
					href="https://discord.com/api/oauth2/authorize?client_id=1129128976623878214&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2F&response_type=token&scope=identify"
					style={{
						background: "#3498DB",
						padding: 20,
						borderRadius: "20px",
						fontWeight: "bold",
					}}
				>
					<span>Login with Discord</span>
				</a>
			</div>
		</>
	)
}
