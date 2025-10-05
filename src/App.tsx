import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/Button";
import { Card } from "./components/ui/Card";
import { ContentModel } from "./components/ui/ContentModel";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";

function App() {
	const [contentModel, setContentModel] = useState(false);
	return (
		<div className="font-geist ">
			<ContentModel
				open={contentModel}
				onClose={() => {
					setContentModel(false);
				}}
			/>
			<div className="flex justify-end gap-2 m-8">
				<Button
					text="Share Brain"
					variant="secondary"
					size="md"
					startIcon={<ShareIcon size="md" />}
				/>
				<Button
					text="Add Content"
					variant="primary"
					size="md"
					startIcon={<PlusIcon size="md" />}
					onClick={() => {
						setContentModel(true);
					}}
				/>
			</div>
			<div className="grid grid-cols-3 w-full justify-items-center">
				<Card
					title="Youtube"
					link="https://www.youtube.com/watch?v=lTCzIDITaac"
					type="youtube"
				/>
				<Card
					title="Twitter"
					link="https://x.com/Tankcodes_dev/status/1957778082523197491"
					type="tweet"
				/>
				<Card
					title="Twitter"
					link="https://x.com/Tankcodes_dev/status/1951992457891057791"
					type="tweet"
				/>
			</div>
		</div>
	);
}

export default App;
