import { Link, Outlet } from "react-router-dom";
import ThemeToggle from "../../components/ThemeToggle";

const MainLayout = () => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <aside
        style={{
          width: "220px",
          padding: "20px",
          background: "#f1f1f1",
          minHeight: "100vh",
        }}
      >
        <h2>Menu</h2>

        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}

        >
          <Link to="/login">
            Login
          </Link>

          <Link to="/">
            Dashboard
          </Link>

          <Link to="/students">
            Students
          </Link>

          <Link to="/courses">
            Courses
          </Link>

          <Link to="/courses/add">
            Add Course
          </Link>
          <ThemeToggle />
        </nav>
      </aside>

      <main
        style={{
          flex: 1,
          padding: "20px",
        }}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;