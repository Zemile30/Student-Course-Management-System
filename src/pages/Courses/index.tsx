import {
  useSelector,
} from "react-redux";

import { Link } from "react-router-dom";

import type { RootState } from "../../redux/rootReducer";

import styles from "./courses.module.scss";

const Courses = () => {
  const courses =
    useSelector(
      (state: RootState) =>
        state.course.data
    );

  const students =
    useSelector(
      (state: RootState) =>
        state.students.data
    );

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <h1>Courses</h1>

        <Link
          to="/courses/add"
          className={
            styles.addBtn
          }
        >
          Add Course
        </Link>
      </div>

      {courses.length ===
      0 ? (
        <div
          className={
            styles.empty
          }
        >
          No Courses Found
        </div>
      ) : (
        <div
          className={
            styles.tableWrapper
          }
        >
          <table
            className={
              styles.table
            }
          >
            <thead>
              <tr>
                <th>
                  Course Title
                </th>

                <th>
                  Teacher
                </th>

                <th>
                  Capacity
                </th>

                <th>
                  Joined Students
                </th>

                <th>
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {courses.map(
                (
                  course: any
                ) => {
                  const joinedStudents =
                    students.filter(
                      (
                        student: any
                      ) =>
                        student.courses.includes(
                          course.id
                        )
                    );

                  return (
                    <tr
                      key={
                        course.id
                      }
                    >
                      <td>
                        {
                          course.title
                        }
                      </td>

                      <td>
                        {
                          course.teacher
                        }
                      </td>

                      <td>
                        <span
                          className={
                            styles.badge
                          }
                        >
                          {
                            course.capacity
                          }
                        </span>
                      </td>

                      <td>
                        {
                          joinedStudents.length
                        }
                      </td>

                      <td
                        className={
                          styles.actions
                        }
                      >
                        <button
                          className={
                            styles.editBtn
                          }
                        >
                          Edit
                        </button>

                        <button
                          className={
                            styles.deleteBtn
                          }
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Courses;