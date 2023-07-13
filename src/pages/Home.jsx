/* eslint-disable react/prop-types */
import { Button } from "@geist-ui/core"
import Smile from "@geist-ui/icons/smile"
import GifPicker from "gif-picker-react"
import { useState } from "react"

import { useCreatePost, useGetPost } from "../api/usePost"

import Post from "../components/Post"
import Profile from "../components/Profile"

export default function Home({ user }) {
	console.log("user", user)
	const [isOpen, setIsOpen] = useState(false)
	const [selected, setSelected] = useState(null)
	const { data, isLoading, refetch } = useGetPost()
	const { mutateAsync } = useCreatePost()

	const handleCreatePost = async () => {
		const payload = {
			url: selected.url,
			user: user?._id,
		}
		const response = await mutateAsync(payload)
		console.log(response)
		setSelected(null)
		refetch()
	}
	return (
		<main>
			<div className="first-div">
				<Profile user={user} />
			</div>
			<div className="second-div">
				<div
					style={{
						display: "flex",
					}}
				>
					<div>
						<div
							style={{
								position: "relative",
								display: "flex",
								alignItems: "center",
								width: "100%",
								justifyContent: "space-between",
							}}
						>
							<div className="profilepic">
								<img
									src={`https://cdn.discordapp.com/avatars/${user?.discordId}/${user?.avatar}.png`}
									alt=""
								/>
							</div>
							{isOpen && (
								<div
									style={{
										position: "absolute",
										top: "54px",
										right: "72px",
									}}
								>
									<GifPicker
										onGifClick={setSelected}
										contentFilter="high"
										theme="dark"
										tenorApiKey={"AIzaSyAEHmYxHg4PL0qHK_WtHkOtzSKOFJJB0Ps"}
									/>
								</div>
							)}
							<Button
								onClick={() => setIsOpen(!isOpen)}
								mr={0.5}
								iconRight={<Smile />}
								ml={"auto"}
								auto
								px={0.6}
							/>
							<Button onClick={handleCreatePost} auto>
								Post
							</Button>
						</div>
					</div>

					{selected && (
						<>
							<img
								src={selected.url}
								className="gif-preview"
								alt="Selected GIF"
							/>
						</>
					)}
				</div>
				{isLoading ? (
					<div>Loading...</div>
				) : (
					data.map((post) => <Post key={post._id} post={post} />)
				)}
			</div>
			<div className="third-div"></div>
		</main>
	)
}
