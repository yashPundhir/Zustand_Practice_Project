import React from "react";

import useCourseStore from "../app/courseStore";

import "../App.css";

const CourseList = () => {
	const { courses, removeCourse, toggleCourseStatus } = useCourseStore(
		(state) => ({
			courses: state.courses,
			removeCourse: state.removeCourse,
			toggleCourseStatus: state.toggleCourseStatus,
		})
	);

	const courseList = courses.map((course, i) => (
		<React.Fragment key={i}>
			<li
				className="course-item"
				style={{
					borderColor: course.completed ? "rgb(52 211 153)" : "rgb(239 68 68)",
				}}
			>
				<span className="course-item-col-1">
					<input
						checked={course.completed}
						onChange={(e) => {
							toggleCourseStatus(course.id);
						}}
						type="checkbox"
					/>
				</span>

				<span
					style={{
						textDecoration: course.completed
							? "line-through solid red 2px"
							: "none",
					}}
				>
					{course?.title}
				</span>
				<button
					onClick={() => {
						removeCourse(course.id);
					}}
					className="delete-btn"
				>
					Delete
				</button>
			</li>
		</React.Fragment>
	));

	return (
		<>
			<ul>{courseList}</ul>
		</>
	);
};

export default CourseList;
