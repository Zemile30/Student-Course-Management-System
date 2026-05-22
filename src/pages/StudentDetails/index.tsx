import {
  useParams,
  Link,
} from "react-router-dom";

import {
  useSelector,
} from "react-redux";

import type { RootState } from "../../redux/rootReducer";

import styles from "./studentDetails.module.scss";

const StudentDetails = () => {
  const { id } = useParams();

  const students =
    useSelector(
      (state: RootState) =>
        state.students.data
    );

  const student = students.find(
    (student: any) =>
      student.id === id
  );

  if (!student) {
    return (
      <h1
        className={
          styles.notFound
        }
      >
        Student Not Found
      </h1>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div
          className={
            styles.header
          }
        >
          <h1
            className={
              styles.name
            }
          >
            {
              student.fullName
            }
          </h1>

          <span
            className={`${
              styles.status
            } ${
              student.status ===
              "active"
                ? styles.active
                : styles.inactive
            }`}
          >
            {
              student.status
            }
          </span>
        </div>

        <div
          className={
            styles.info
          }
        >
          <div
            className={
              styles.infoBox
            }
          >
            <h4>Age</h4>

            <p>
              {student.age}
            </p>
          </div>

          <div
            className={
              styles.infoBox
            }
          >
            <h4>Email</h4>

            <p>
              {
                student.email
              }
            </p>
          </div>

          <div
            className={
              styles.infoBox
            }
          >
            <h4>
              Faculty
            </h4>

            <p>
              {
                student.faculty
              }
            </p>
          </div>
        </div>

        <div
          className={
            styles.courseSection
          }
        >
          <h2
            className={
              styles.courseTitle
            }
          >
            Courses
          </h2>

          <div
            className={
              styles.courseList
            }
          >
            {student.courses
              .length ===
            0 ? (
              <p>
                No courses joined
              </p>
            ) : (
              student.courses.map(
                (
                  course: string
                ) => (
                  <div
                    key={
                      course
                    }
                    className={
                      styles.courseItem
                    }
                  >
                    {course}
                  </div>
                )
              )
            )}
          </div>
        </div>

        <Link
          to={`/students/edit/${student.id}`}
          className={
            styles.editBtn
          }
        >
          Edit Student
        </Link>
      </div>
    </div>
  );
};

export default StudentDetails;