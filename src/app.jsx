import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages";
import Exercises from "./pages/exercises";
import Solutions from "./pages/solutions";
import Portfolio from "./pages/portfolio.jsx";
import MyWork from "./pages/my-work.jsx";
import AboutMe from "./pages/about-me.jsx";

import "./styles.css";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/">
					<Route index element={<Home />} />
					<Route path="exercises/:page" element={<Exercises />} />
					<Route path="solutions/:page" element={<Solutions />} />
					<Route path="portfolio" element={<Portfolio />} />
					<Route path="my-work" element={<MyWork />} />
					<Route path="about-me" element={<AboutMe />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
