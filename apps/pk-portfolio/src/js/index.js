import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { createRoot } from 'react-dom/client';
import pkLogo from '../assets/pk-crane.svg';
import "../scss/index.scss";

const One = () => {
	return (
		<div><h1>One</h1></div>
	)
}

const Two = () => {
	return (
		<div><h1>Two</h1></div>
	)
}

const Three = () => {
	return (
		<div><h1>Three</h1></div>
	)
}

const App = () => {
	const location = useLocation();

	return (
		<div className="app-pk-portfolio__container">
			<nav>
				<ul>
					<li><img src={pkLogo} alt="React Logo" /><Link to="/">Paul Kaspriskie</Link></li>
					<li><Link to="/two">Two</Link></li>
					<li><Link to="/three">Three</Link></li>
				</ul>
			</nav>
			<main>
				<Routes>
					<Route index element={<One/>} />
					<Route path="two" element={<Two/>} />
					<Route path="three" element={<Three/>} />
				</Routes>
			</main>
		</div>
	)
}

const root = createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<App/>
	</BrowserRouter>
);
