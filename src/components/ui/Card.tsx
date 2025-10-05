import { DeleteIcon } from "@/icons/DeleteIcon";
import { DocumentTextIcon } from "@/icons/DocumentTextIcon";
import { PlayIcon } from "@/icons/PlayIcon";
import { ShareIcon } from "@/icons/ShareIcon";
import { XIcon } from "@/icons/XIcon";
import { getYTVideoId } from "@/utils/getYTEmbedLink";

interface CardProps {
	type: "youtube" | "tweet";
	link: string;
	title: string;
}

export function Card(props: CardProps) {
	return (
		<div className="bg-white rounded-md shadow-lg ring-[#f5f5f5] ring p-4 w-2xs max-h-fit">
			<div className="flex justify-between items-center mb-6">
				<div className="flex gap-4 items-center">
					{props.type === "youtube" ? (
						<PlayIcon size="md" color="#525252" />
					) : (
						<XIcon size="md" color="#525252" />
					)}
					<span className="text-xl font-medium">{props.title}</span>
				</div>
				<div className="flex gap-4 items-center">
					<a href={props.link} target="_blank">
						<ShareIcon size="md" color="#a3a3a3" />
					</a>
					<DeleteIcon size="md" color="#a3a3a3" />
				</div>
			</div>
			<div className="mb-6">
				{props.type === "youtube" && (
					<iframe
						className="rounded-md w-full"
						src={`https://youtube.com/embed/${getYTVideoId(
							props.link
						)}`}
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					></iframe>
				)}
				{props.type === "tweet" && (
					<blockquote className="twitter-tweet">
						<a href={props.link.replace("x.com", "twitter.com")} />
					</blockquote>
				)}
			</div>
			<div>#tags</div>
			<div>Added On 10/10/2025</div>
		</div>
	);
}
