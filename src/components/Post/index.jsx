/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import classes from "./style.module.css"
export default function Post({ post }) {
	return (
		<div className={classes.container}>
			<div className={classes.profile}>
				<img
					src={`https://cdn.discordapp.com/avatars/${post.user.discordId}/${post.user.avatar}.png`}
					alt=""
				/>
			</div>
			<div className={classes.layout}>
				<div>
					<Link to={`/profile/${post.user._id}`}>{post.user.username}</Link>
				</div>
				<div>
					<img src={post.url} alt="" width={"100%"} />
				</div>
			</div>
		</div>
	)
}
