export interface IconStyle {
	size: "sm" | "md" | "lg";
	color?: string;
	onClick?: () => void;
	className?: string;
}

export const iconStyleVariant: Record<Required<IconStyle>["size"], string> = {
	sm: "size-3",
	md: "size-5",
	lg: "size-7",
};
