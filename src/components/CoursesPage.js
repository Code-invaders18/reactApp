import React from "react";
import { getCourses } from "../api/courseApi";
class CoursesPage extends React.Component {
  state = {
    courses: []
  };
  componentDidMount() {
    getCourses().then(courses => this.setState({ courses: courses }));
  }

  render() {
    console.log(this.state.courses);
    return (
      <>
        <h2>Courses</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author Id</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {this.state.courses.map(courses => {
              return (
                <tr>
                  <td>{courses.title}</td>
                  <td>{courses.authorId}</td>
                  <td>{courses.category}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}
export default CoursesPage;
