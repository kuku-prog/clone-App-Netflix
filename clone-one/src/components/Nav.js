import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
	const [show, setShow] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				setShow(true);
				// return show;
			} else setShow(false);
			// needs to have a cleaning at the end of useffect
		});
		return () => {
			window.removeEventListener("scroll", null);
		};
	}, []);
	return (
		<div className={`nav ${show && "nav__black"}`}>
			<img
				className="nav__logo"
				src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
				alt="Netflix Logo"
			/>

			<img
				className="nav__avatar"
				// src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
				src="./favicon.ico"
				alt="Avatar logo"
			/>
		</div>
	);
}

export default Nav;
