import React from "react";

type SidebarProps = {
	brand?: string;
	subtitle?: string;
	theme: string;
	toggleTheme: () => void;
	activeTab: "view" | "add";
	setActiveTab: (tab: "view" | "add") => void;
	totalRecords: number;
};

export default function Sidebar({
	brand = "Student Manager",
	subtitle = "Add, review, and manage student records",
	theme,
	toggleTheme,
	activeTab,
	setActiveTab,
	totalRecords,
}: SidebarProps) {
	return (
		<aside className="sidebar">
			<div className="sidebar__brand">
				<p className="sidebar__eyebrow">Dashboard</p>
				<h1>{brand}</h1>
				<p>{subtitle}</p>
			</div>

			<nav className="sidebar__nav" aria-label="Main Navigation">
				<button 
					className={`nav-button ${activeTab === "view" ? "active" : ""}`}
					onClick={() => setActiveTab("view")}
				>
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
						<rect x="3" y="3" width="7" height="7"></rect>
						<rect x="14" y="3" width="7" height="7"></rect>
						<rect x="14" y="14" width="7" height="7"></rect>
						<rect x="3" y="14" width="7" height="7"></rect>
					</svg>
					Directory
					<span style={{ marginLeft: 'auto', background: 'var(--panel-border)', padding: '2px 8px', borderRadius: '12px', fontSize: '0.8rem' }}>
						{totalRecords}
					</span>
				</button>
				<button 
					className={`nav-button ${activeTab === "add" ? "active" : ""}`}
					onClick={() => setActiveTab("add")}
				>
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
						<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
						<circle cx="12" cy="7" r="4"></circle>
					</svg>
					Add Student
				</button>
			</nav>

			<div className="sidebar__footer">
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
				<span style={{ fontSize: '0.85rem', color: 'var(--text-color-muted)' }}>
					{theme === 'light' ? 'Light Mode' : 'Dark Mode'}
				</span>
			</div>
		</aside>
	);
}
