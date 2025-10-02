export interface IconStyle {
	size: "sm" | "md" | "lg";
}

export const iconStyleVariant: Record<Required<IconStyle>["size"], string> = {
	sm: "size-2",
	md: "size-4",
	lg: "size-6",
};
