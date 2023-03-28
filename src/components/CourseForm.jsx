import React, { useState } from "react";

import useCourseStore from "../app/courseStore";

import "../App.css";

const CourseForm = () => {
	const addCourse = useCourseStore((state) => state.addCourse);

	const [courseTitle, setCourseTitle] = useState("");

	const handleCourseSubmit = () => {
		if (!courseTitle) {
			return alert("please add course title");
		}
		addCourse({
			id: Math.ceil(Math.random() * 1000000),
			title: courseTitle,
			completed: false,
		});
		setCourseTitle("");
	};

	console.log("Course Form Rendered");

	return (
		<div className="form-container">
			<input
				type="text"
				className="form-input"
				value={courseTitle}
				onChange={(e) => {
					setCourseTitle(e.target.value);
				}}
			/>
			<button
				className="form-submit-btn"
				onClick={() => {
					handleCourseSubmit();
				}}
			>
				Add Course
			</button>
		</div>
	);
};

export default CourseForm;
