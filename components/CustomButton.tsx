"use client";

import { CustomButtonProps } from "@/types";
import Image from "next/image";

export default function CustomButton({
	title,
	btnType,
	handleClick,
	containerStyles,
	rightIcon,
	textStyles,
}: CustomButtonProps) {
	return (
		<button
			disabled={false}
			type={btnType || "button"}
			className={`custom-btn ${containerStyles}`}
			onClick={handleClick}
		>
			<span className={`flex-1 ${textStyles}`}>{title}</span>
			{rightIcon && (
				<div className="h-6 w-6 relative">
					<Image src={rightIcon} alt="" fill className="object-contain" />
				</div>
			)}
		</button>
	);
}
