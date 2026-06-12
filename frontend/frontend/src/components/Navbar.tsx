import React from "react";

type NavbarProps = {
	brand?: string;
	subtitle?: string;
	theme: string;
	toggleTheme: () => void;
};

export default function Navbar({
	brand = "Student Manager",
	subtitle = "Add, review, and manage student records",
	theme,
	toggleTheme,
}: NavbarProps) {
	return (
		<header className="navbar">
			<div className="navbar__brand">
				<p className="navbar__eyebrow">MERN CRUD</p>
				<h1>{brand}</h1>
				<p>{subtitle}</p>
			</div>

			<div className="navbar__actions">
				<nav className="navbar__links" aria-label="Page sections">
					<a href="#add">Add</a>
					<a href="#view">View</a>
				</nav>
				
				<button 
					onClick={toggleTheme} 
					className="theme-toggle" 
					aria-label="Toggle Theme"
					title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
				>
					{theme === "light" ? (
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<circle cx="12" cy="12" r="5"></circle>
							<line x1="12" y1="1" x2="12" y2="3"></line>
							<line x1="12" y1="21" x2="12" y2="23"></line>
							<line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
							<line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
							<line x1="1" y1="12" x2="3" y2="12"></line>
							<line x1="21" y1="12" x2="23" y2="12"></line>
							<line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
							<line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
						</svg>
					) : (
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
						</svg>
					)}
				</button>
			</div>
		</header>
	);
}
