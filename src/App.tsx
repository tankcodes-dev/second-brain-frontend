import "./App.css";
import { Button } from "./components/ui/Button";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";

function App() {
	return (
		<div className="font-geist flex">
			<Button
				text="Add Content"
				variant="primary"
				size="md"
				startIcon={<PlusIcon size="md" />}
			/>
			<Button
				text="Share Brain"
				variant="secondary"
				size="md"
				startIcon={<ShareIcon size="md" />}
			/>
		</div>
	);
}

export default App;
