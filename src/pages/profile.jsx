import ArrowLeft from "@geist-ui/icons/arrowLeft"
import { Link, useParams } from "react-router-dom"
import { useGetUserPost } from "../api/usePost"
import Post from "../components/Post"

export default function ProfilePage() {
	const params = useParams()
	const { data } = useGetUserPost(params.id)
	return (
		<div className="ProfilePageContainer">
			<div>
				<div>
					<Link to="/">
						<ArrowLeft />
					</Link>
					{data?.user.username}
				</div>
			</div>
			<div></div>
			<div>
				<div>
					<div>
						<img
							src={`https://cdn.discordapp.com/avatars/${data?.user?.discordId}/${data?.user?.avatar}.png`}
							alt=""
						/>
					</div>
					<div>{data?.user.username}</div>
				</div>
			</div>
			<div>
				{data?.userPosts.map((post) => (
					<Post key={post.id} post={post} />
				))}
			</div>
		</div>
	)
}
