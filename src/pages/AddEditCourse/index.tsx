import {
  useState,
} from "react";

import { toast } from "react-toastify";

import styles from "./addEditCourse.module.scss";

const AddEditCourse = () => {
  const [title, setTitle] =
    useState("");

  const [teacher, setTeacher] =
    useState("");

  const [capacity, setCapacity] =
    useState(1);

  const [errors, setErrors] =
    useState<any>({});

  const validate = () => {
    const newErrors: any = {};

    if (!title.trim()) {
      newErrors.title =
        "Title is required";
    }

    if (!teacher.trim()) {
      newErrors.teacher =
        "Teacher is required";
    }

    if (capacity < 1) {
      newErrors.capacity =
        "Capacity minimum 1";
    }

    setErrors(newErrors);

    return (
      Object.keys(newErrors)
        .length === 0
    );
  };

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    const isValid =
      validate();

    if (!isValid) {
      toast.error(
        "Please fill all fields correctly"
      );

      return;
    }

    toast.success(
      "Course added successfully"
    );

    console.log({
      title,
      teacher,
      capacity,
    });

    setTitle("");

    setTeacher("");

    setCapacity(1);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h1 className={styles.title}>
          Add Course
        </h1>

        <form
          onSubmit={
            handleSubmit
          }
        >
          <div
            className={
              styles.formGroup
            }
          >
            <label>
              Course Title
            </label>

            <input
              type="text"
              placeholder="Enter title"
              value={title}
              onChange={(e) =>
                setTitle(
                  e.target.value
                )
              }
            />

            {errors.title && (
              <p
                className={
                  styles.error
                }
              >
                {
                  errors.title
                }
              </p>
            )}
          </div>

          <div
            className={
              styles.formGroup
            }
          >
            <label>
              Teacher Name
            </label>

            <input
              type="text"
              placeholder="Enter teacher"
              value={teacher}
              onChange={(e) =>
                setTeacher(
                  e.target.value
                )
              }
            />

            {errors.teacher && (
              <p
                className={
                  styles.error
                }
              >
                {
                  errors.teacher
                }
              </p>
            )}
          </div>

          <div
            className={
              styles.formGroup
            }
          >
            <label>
              Capacity
            </label>

            <input
              type="number"
              value={capacity}
              onChange={(e) =>
                setCapacity(
                  Number(
                    e.target.value
                  )
                )
              }
            />

            {errors.capacity && (
              <p
                className={
                  styles.error
                }
              >
                {
                  errors.capacity
                }
              </p>
            )}
          </div>

          <button
            type="submit"
            className={
              styles.button
            }
          >
            Save Course
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEditCourse;