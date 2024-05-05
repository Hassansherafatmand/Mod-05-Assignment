
const CisCourse = (props) => {
  const courses = props.courses;

  return (  
    <div className="oc cis-course">
      <h2 className="title">CIS Courses</h2>
      {courses.cisCourse.map((course) => (
        <div className="course-preview" key={course.tilte}>
          <h2>{course.title}</h2>
          <p>{course.date}</p>
          <p>{course.description}</p>
        </div>
      ))}
    </div>
  );
}
 
export default CisCourse;