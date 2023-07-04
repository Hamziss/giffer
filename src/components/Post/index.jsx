/* eslint-disable react/prop-types */
import classes from "./style.module.css"
export default function Post({ post }) {
	console.log(post)
	return (
		<div className={classes.container}>
			<div className={classes.profile}>
				<img src={``} alt="" />
			</div>
			<div className={classes.layout}>
				<div>{post.username}</div>
				<div>
					<img
						src={
							"https://media.tenor.com/5lLcKZgmIhgAAAAC/american-psycho-patrick-bateman.gif"
						}
						alt=""
						width={"100%"}
					/>
				</div>
			</div>
		</div>
	)
}
