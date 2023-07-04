import "./App.css"
import Post from "./components/Post"
import Profile from "./components/Profile"

export default function App() {
	const posts = [
		{
			id: 1,
			username: "Lamo",
		},
		{
			id: 2,
			username: "androtate",
		},
		{
			id: 3,
			username: "rcym",
		},
		{
			id: 4,
			username: "jozee",
		},
	]
	const user = {
		username: "LazyClicks",
	}
	return (
		<main>
			<div className="first-div">
				<Profile user={user} />
			</div>
			<div className="second-div">
				<div></div>
				{posts.map((post) => (
					<Post key={post.id} post={post} />
				))}
			</div>
			<div className="third-div"></div>
		</main>
	)
}
