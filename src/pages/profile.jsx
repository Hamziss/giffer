import ArrowLeft from "@geist-ui/icons/arrowLeft"
import { Link, useParams } from "react-router-dom"
import Post from "../components/Post"

export default function ProfilePage() {
	const params = useParams()
	const posts = []
	const postsOfUser = posts.filter((post) => post.user.id == params.id)

	return (
		<div className="ProfilePageContainer">
			<div>
				<div>
					<Link to="/">
						<ArrowLeft />
					</Link>
					{postsOfUser[0]?.user.username}
				</div>
			</div>
			<div></div>
			<div>
				<div>
					<div>
						<img src="/random.jpeg" alt="" />
					</div>
					<div>{postsOfUser[0]?.user.username}</div>
				</div>
			</div>
			<div>
				{postsOfUser.map((post) => (
					<Post key={post.id} post={post} />
				))}
			</div>
		</div>
	)
}
