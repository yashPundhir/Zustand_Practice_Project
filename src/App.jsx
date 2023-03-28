import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";

function App() {
	return (
		<div className="main-container">
			<h1>My Course List</h1>
			<CourseForm />
			<CourseList />
		</div>
	);
}

export default App;
