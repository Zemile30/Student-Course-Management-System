import { mockStudents } from "../mocks/students";

let students = [...mockStudents];

export const fetchStudentsApi = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(students);
    }, 1000);
  });

export const addStudentApi = (
  student: any
) =>
  new Promise((resolve) => {
    setTimeout(() => {
      students.push(student);

      resolve(student);
    }, 1000);
  });

export const deleteStudentApi = (
  id: string
) =>
  new Promise((resolve) => {
    setTimeout(() => {
      students = students.filter(
        (s) => s.id !== id
      );

      resolve(id);
    }, 1000);
  });