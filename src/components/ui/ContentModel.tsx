import { XIcon } from "@/icons/XIcon";
import { Button } from "./Button";

interface InputContentProps {
	placeholder: string;
	label: string;
}

export function ContentModel({
	open,
	onClose,
}: {
	open: boolean;
	onClose: () => void;
}) {
	return (
		<div>
			{open && (
				<>
					<div className="w-screen h-screen fixed top-0 left-0 opacity-20 bg-[#0a0a0a] flex justify-center items-center" onClick={onClose}></div>
					<div className="bg-white opacity-100 absolute z-10 top-[50%] left-[50%] p-6  -translate-1/2 rounded-md shadow-xl w-fit h-fit">
						<div className="flex justify-between mb-8 items-center">
							<span className="text-xl font-medium">
								Add Content
							</span>
							<XIcon
								size="lg"
								onClick={onClose}
								className="hover:cursor-pointer"
							/>
						</div>
						<div className="flex flex-col">
							<InputContent label="Title" placeholder="Podcast..." />
							<InputContent label="Link" placeholder="https://" />
							<InputContent label="Type" placeholder="youtube | tweet" />
						</div>
						<div className="flex justify-end gap-2">
							<Button
								size="md"
								text="Cancel"
								variant="secondary"
                                onClick={onClose}
							/>
							<Button size="md" text="Add" variant="primary" />
						</div>
					</div>
				</>
			)}
		</div>
	);
}

function InputContent(props: InputContentProps) {
	return (
		<div>
			<label className="block mb-2">{props.label}</label>

			<input
				placeholder={props.placeholder}
				className="px-4 py-2 rounded-md ring mb-6"
			/>
		</div>
	);
}
