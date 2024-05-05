import { useState } from "react";
import CisCourse from "./CisCourse";
import MathCourse from "./MathCourse";


const Institution = () => {

 const [courses,setCourses] = useState({
  cisCourse : [
    {
      title: 'CIS110',
      date: 'March 15, 2024',
      description: 'Introduction to Computer Science, covering fundamental concepts such as algorithms, data structures, and programming principles.'
    },
    {
      title: 'CIS120',
      date: 'April 20, 2024',
      description: 'Data Structures and Algorithms, delving deeper into advanced data structures, algorithms, and problem-solving techniques.'
    },
    {
      title: 'CIS210',
      date: 'June 5, 2024',
      description: 'Database Management Systems, focusing on the design, implementation, and administration of database systems.'
    },
    {
      title: 'CIS220',
      date: 'July 15, 2024',
      description: 'Software Engineering, covering software development methodologies, project management, and team collaboration.'
    },
    {
      title: 'CIS230',
      date: 'August 25, 2024',
      description: 'Web Development, exploring client-side and server-side web technologies, frameworks, and best practices.'
    }
  ],
  mathCourse : [
    {
      title: 'Math101',
      date: 'February 5, 2024',
      description: 'Introduction to Calculus, covering basic differentiation, integration, and their applications.'
    },
    {
      title: 'Math201',
      date: 'March 20, 2024',
      description: 'Linear Algebra, exploring vector spaces, matrices, and their applications in various fields.'
    },
    {
      title: 'Math301',
      date: 'April 10, 2024',
      description: 'Probability and Statistics, covering probability theory, statistical inference, and data analysis techniques.'
    }]
 })


  return ( 
    <div className="institutuin">
      <h2>Olympic College Courses</h2>
      <CisCourse courses={courses} />
      <MathCourse courses={courses} />
    </div>
   );
}
 
export default Institution;