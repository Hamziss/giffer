/* eslint-disable react/prop-types */
import classes from "./style.module.css"

export default function Profile({ user }) {
	return (
		<div className={classes.container}>
			<div className={classes.upperdiv}>
				<div>
					<img src="" alt="" />
				</div>
				<a href="/">{user.username}</a>
			</div>
			<div>
				<a href="/">Home</a>
				<a href="/settings">Settings</a>
				<a href="/">Messages</a>
				<a href="/auth" onClick={() => localStorage.removeItem("user")}>
					Logout
				</a>
			</div>
		</div>
	)
}
