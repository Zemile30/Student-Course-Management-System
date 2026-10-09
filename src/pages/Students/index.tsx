import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import { Link } from "react-router-dom";

import type { RootState } from "../../redux/rootReducer";

import {
  GET_STUDENTS_REQUEST,
  DELETE_STUDENT_REQUEST,
} from "../../redux/types/studentTypes";

import Spinner from "../../components/Spinner";

import useDebounce from "../../hooks/useDebounce";

import styles from "./students.module.scss";

const Students = () => {
  const dispatch = useDispatch();

  const {
    data: students,
    loading,
    error,
  } = useSelector(
    (state: RootState) =>
      state.students
  );

  const [search, setSearch] =
    useState("");

  const [status, setStatus] =
    useState("");

  const [faculty, setFaculty] =
    useState("");

  const [currentPage, setCurrentPage] =
    useState(1);

  const perPage = 5;

  const debouncedSearch =
    useDebounce(search, 500);

  useEffect(() => {
    dispatch({
      type:
        GET_STUDENTS_REQUEST,
    });
  }, [dispatch]);

  const filteredStudents =
    useMemo(() => {
      return students.filter(
        (student: any) => {
          const matchesSearch =
            student.fullName
              .toLowerCase()
              .includes(
                debouncedSearch.toLowerCase()
              );

          const matchesStatus =
            status
              ? student.status ===
              status
              : true;

          const matchesFaculty =
            faculty
              ? student.faculty ===
              faculty
              : true;

          return (
            matchesSearch &&
            matchesStatus &&
            matchesFaculty
          );
        }
      );
    }, [
      students,
      debouncedSearch,
      status,
      faculty,
    ]);

  const start =
    (currentPage - 1) *
    perPage;

  const paginatedStudents =
    filteredStudents.slice(
      start,
      start + perPage
    );

  const totalPages =
    Math.ceil(
      filteredStudents.length /
      perPage
    );

  const handleDelete = (
    id: string
  ) => {
    const confirmDelete =
      window.confirm(
        "Delete student?"
      );

    if (!confirmDelete)
      return;

    dispatch({
      type:
        DELETE_STUDENT_REQUEST,

      payload: id,
    });
  };

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <h2>
        Error: {error}
      </h2>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <h1>Students</h1>
      </div>

      <div
        className={styles.filters}
      >
        <input
          type="text"
          placeholder="Search student..."
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
        />

        <select
          value={status}
          onChange={(e) =>
            setStatus(
              e.target.value
            )
          }
        >
          <option value="">
            All Status
          </option>

          <option value="active">
            Active
          </option>

          <option value="inactive">
            Inactive
          </option>
        </select>

        <select
          value={faculty}
          onChange={(e) =>
            setFaculty(
              e.target.value
            )
          }
        >
          <option value="">
            All Faculties
          </option>

          <option value="IT">
            IT
          </option>

          <option value="Design">
            Design
          </option>
        </select>
      </div>

      {filteredStudents.length ===
        0 && (
          <h2>
            No Students Found
          </h2>
        )}

      {filteredStudents.length >
        0 && (
          <>
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
                      Full Name
                    </th>

                    <th>Age</th>

                    <th>Email</th>

                    <th>
                      Faculty
                    </th>

                    <th>
                      Status
                    </th>

                    <th>
                      Courses
                    </th>

                    <th>
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {paginatedStudents.map(
                    (
                      student: any
                    ) => (
                      <tr
                        key={
                          student.id
                        }
                      >
                        <td>
                          {
                            student.fullName
                          }
                        </td>

                        <td>
                          {
                            student.age
                          }
                        </td>

                        <td>
                          {
                            student.email
                          }
                        </td>

                        <td>
                          {
                            student.faculty
                          }
                        </td>

                        <td>
                          {
                            student.status
                          }
                        </td>

                        <td>
                          {
                            student
                              .courses
                              .length
                          }
                        </td>

                        <td
                          className={
                            styles.actions
                          }
                        >
                          <Link
                            to={`/students/${student.id}`}
                          >
                            Details
                          </Link>

                          <Link
                            to={`/students/edit/${student.id}`}
                          >
                            Edit
                          </Link>

                          <button
                            onClick={() =>
                              handleDelete(
                                student.id
                              )
                            }
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>

            <div
              className={
                styles.pagination
              }
            >
              <button
                disabled={
                  currentPage ===
                  1
                }
                onClick={() =>
                  setCurrentPage(
                    (
                      prev
                    ) =>
                      prev -
                      1
                  )
                }
              >
                Prev
              </button>

              <span>
                Page{" "}
                {currentPage} of{" "}
                {totalPages}
              </span>

              <button
                disabled={
                  currentPage ===
                  totalPages
                }
                onClick={() =>
                  setCurrentPage(
                    (
                      prev
                    ) =>
                      prev +
                      1
                  )
                }
              >
                Next
              </button>
            </div>
          </>
        )}
    </div>
  );
};

export default Students;