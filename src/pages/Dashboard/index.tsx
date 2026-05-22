import { useSelector } from "react-redux";

import type { RootState } from "../../redux/rootReducer";

import styles from "./dashboard.module.scss";

const Dashboard = () => {
  const students = useSelector(
    (state: RootState) =>
      state.students.data
  );

  const courses = useSelector(
    (state: RootState) =>
      state.course.data
  );

  const activeStudents =
    students.filter(
      (student: any) =>
        student.status ===
        "active"
    );

  const inactiveStudents =
    students.filter(
      (student: any) =>
        student.status ===
        "inactive"
    );

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h2>Total Students</h2>

        <p>{students.length}</p>
      </div>

      <div className={styles.card}>
        <h2>Active Students</h2>

        <p>
          {activeStudents.length}
        </p>
      </div>

      <div className={styles.card}>
        <h2>
          Inactive Students
        </h2>

        <p>
          {
            inactiveStudents.length
          }
        </p>
      </div>

      <div className={styles.card}>
        <h2>Total Courses</h2>

        <p>{courses.length}</p>
      </div>
    </div>
  );
};

export default Dashboard;