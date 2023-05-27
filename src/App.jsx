import "./app.scss";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Navbar from "./components/navbar/Navbar";
import Trex from "./assets/images/t-rex.svg"
function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Navbar />
				<div className="layout">
				<div className="bg">
				<div className="bgImg"><img src={Trex} /></div>
				<div className="bgImg-2"><img src={Trex}/></div>
				</div>
					<div className="routes"><Routes>
						<Route path="/" element={<Home />} />
						<Route path="projects" element={<Projects />} />
						<Route path="contact" element={<Contact />} />
						<Route path="about" element={<About />} />
					</Routes></div>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
