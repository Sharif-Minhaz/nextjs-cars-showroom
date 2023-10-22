"use client";

import { ShowMoreProps } from "@/types";
import {useRouter} from "next/navigation"
import { CustomButton } from ".";
import { updateSearchParams } from "@/utils";

export default function ShowMore({ pageNumber, isNext }: ShowMoreProps) {
	const router = useRouter();

	const handleNavigation = () => {
		// Calculate the new limit based on the page number and navigation type
		const newLimit = (pageNumber + 1) * 10;

		// Update the "limit" search parameter in the URL with the new value
		const newPathname = updateSearchParams("limit", `${newLimit}`);

		router.push(newPathname);
	}

	return (
		<div className="flex mt-10 w-full gap-5 justify-center text-center">
			{!isNext && (
				<CustomButton
					btnType="button"
					title="Show More"
					containerStyles="bg-primary-blue rounded-full text-white"
					handleClick={handleNavigation}
				/>
			)}
		</div>
	);
}