import { Button } from "@geist-ui/core"
import Smile from "@geist-ui/icons/smile"
import GifPicker from "gif-picker-react"
import { useState } from "react"
import "./App.css"
import Post from "./components/Post"
import Profile from "./components/Profile"
export default function App() {
	const [isOpen, setIsOpen] = useState(false)
	const [selected, setSelected] = useState(null)
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
								<img src="/random.jpeg" alt="" />
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
							<Button auto>Post</Button>{" "}
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
				{posts.map((post) => (
					<Post key={post.id} post={post} />
				))}
			</div>
			<div className="third-div"></div>
		</main>
	)
}
