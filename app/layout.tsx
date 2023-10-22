import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/components";
import { Toaster } from "sonner";

export const metadata: Metadata = {
	title: "Car Hub",
	description: "Discover the best car in he world",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className="relative">
				<Toaster richColors position="top-right" />
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
