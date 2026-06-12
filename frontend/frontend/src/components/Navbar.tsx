import React from "react";

type NavbarProps = {
	brand?: string;
	subtitle?: string;
};

export default function Navbar({
	brand = "Student Manager",
	subtitle = "Add, review, and manage student records",
}: NavbarProps) {
	return (
		<header className="navbar">
			<div className="navbar__brand">
				<p className="navbar__eyebrow">MERN CRUD</p>
				<h1>{brand}</h1>
				<p>{subtitle}</p>
			</div>

			<nav className="navbar__links" aria-label="Page sections">
				<a href="#add">Add</a>
				<a href="#view">View</a>
			</nav>
		</header>
	);
}
