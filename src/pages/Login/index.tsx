import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate =
    useNavigate();

  const handleLogin = () => {
    localStorage.setItem(
      "token",
      "fake_token"
    );

    navigate("/");
  };

  return (
    <div
      style={{ padding: "20px" }}
    >
      <h1>Login</h1>

      <button
        onClick={handleLogin}
      >
        Add
      </button>
    </div>
  );
};

export default Login;