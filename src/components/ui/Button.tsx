export interface ButtonProps {
	variant?: "primary" | "secondary";
	size?: "sm" | "md" | "lg";
	text: string;
	onClick?: () => void;
	startIcon?: React.ReactNode;
	endIcon?: React.ReactNode;
	className?: string;
}

const variantStyle: Record<Required<ButtonProps>["variant"], string> = {
	primary: "bg-[#5046e4] text-white",
	secondary: "bg-[#e0e7ff] text-[#463bcb]",
};

const sizeStyle: Record<Required<ButtonProps>["size"], string> = {
	sm: "px-2 py-1",
	md: "px-4 py-2",
	lg: "px-6 py-4",
};

const defaultStyle =
	"text-center rounded-xl text-[14px] flex items-center gap-1 hover:cursor-pointer";

function getButtonStyles(
	variant: Required<ButtonProps>["variant"],
	size: Required<ButtonProps>["size"],
	className?: string
): string {
	return `${variantStyle[variant]} ${sizeStyle[size]} ${defaultStyle} ${
		className || ""
	}`;
}

export const Button = ({
	text,
	variant = "primary",
	size = "md",
	startIcon,
	endIcon,
	onClick,
	className,
}: ButtonProps) => {
	return (
		<button
			type="submit"
			className={getButtonStyles(variant, size, className)}
			onClick={onClick}
		>
			{startIcon}
			<span>{text}</span>
			{endIcon}
		</button>
	);
};
