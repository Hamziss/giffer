/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import classes from "./style.module.css"

export default function Profile({ user }) {
	return (
		<div className={classes.container}>
			<div className={classes.upperdiv}>
				<div>
					<img
						src={`https://cdn.discordapp.com/avatars/${user?.discordId}/${user?.avatar}.png`}
						alt=""
					/>
				</div>
				<Link href="/">{user?.username}</Link>
			</div>
			<div>
				<Link to="/">Home</Link>
				<Link to="/settings">Settings</Link>
				<Link to="/">Messages</Link>
				<Link to="/auth" onClick={() => localStorage.removeItem("user")}>
					Logout
				</Link>
			</div>
		</div>
	)
}
