import { useState } from "react";
const MathCourse = (props) => {
  const courses = props.courses;

 
  return (  
    <div className="oc math-course">
      <h2 className="title">Math Courses</h2>
      {courses.mathCourse.map((course) => (
        <div className="course-preview" key={course.tilte}>
          <h2>{course.title}</h2>
          <p>{course.date}</p>
          <p>{course.description}</p>
        </div>
      ))}
    </div>
  );
}
 
export default MathCourse;