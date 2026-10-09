# Student Course Management System

A web application for managing students and courses. Users can sign in, browse and manage courses, and view student lists and detailed student profiles. All data is served from mock data, so no backend is required to run the project.

## Features

- **Authentication:** login page with protected routes
- **Courses:** view the course list, add a new course, edit or delete an existing one
- **Students:** view the student list and open a detailed profile for each student
- **Global state management** with Redux and Redux-Saga for handling async flows

## Pages

| Route | Page | Description |
| ----- | ---- | ----------- |
| `/login` | Login | User authentication |
| `/courses` | Courses | List of all courses |
| `/courses/add` | Add Course | Form to create a new course |
| `/courses/edit/:id` | Edit Course | Form to update an existing course |
| `/students` | Students | List of all students |
| `/students/:id` | Student Details | Detailed information about a student |

> Update the routes above to match the paths defined in your router.

## Tech Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) – build tool and dev server
- [Redux](https://redux.js.org/) + [Redux-Saga](https://redux-saga.js.org/) – state management and side effects
- [React Router v7](https://reactrouter.com/) – routing
- [SCSS (Sass)](https://sass-lang.com/) – styling
- [uuid](https://github.com/uuidjs/uuid) – unique ID generation
- ESLint – linting

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Zemile30/Student-Course-Management-System.git

# Go to the project folder
cd Student-Course-Management-System

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Available Scripts

| Command | Description |
| ------- | ----------- |
| `npm run dev` | Start the development server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── components/   # Reusable UI components
├── pages/        # Login, Courses, AddEditCourse, Students, StudentDetails
├── store/        # Redux store, reducers, actions, sagas
├── data/         # Mock data
└── ...
```

> Adjust the folder names to match your actual `src` structure.

## Mock Data

The application uses local mock data instead of a real API. Data changes (adding, editing, deleting) are handled through Redux and are not persisted between page reloads.


## Author

**Zemile** – [GitHub](https://github.com/Zemile30)