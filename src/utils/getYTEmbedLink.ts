export function getYTVideoId(url: string): string {
	// Check for YouTube standard format
	const youtubeRegex =
		/(?:https?:\/\/(?:www\.)?youtube\.com\/(?:watch\?v=|(?:.*?[?&]v=)))([a-zA-Z0-9_-]{11})/;
	const youtubeMatch = url.match(youtubeRegex);
	if (youtubeMatch) {
		return youtubeMatch[1];
	}

	// Check for YouTube shortened format
	const shortenedYoutubeRegex =
		/(?:https?:\/\/(?:www\.)?youtu\.be\/)([a-zA-Z0-9_-]{11})/;
	const shortenedMatch = url.match(shortenedYoutubeRegex);
	if (shortenedMatch) {
		return shortenedMatch[1];
	}

	return url; // Return null if no video ID was found
}
