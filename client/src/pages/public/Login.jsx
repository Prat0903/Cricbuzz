import { API_URL } from "../../utils/env";

const Login = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <button
        onClick={() => (window.location.href = `${API_URL}/auth/google`)}
        className="px-3 py-1 rounded border border-gray-500 cursor-pointer"
      >
        Login with Google
      </button>
    </div>
  );
};

export default Login;
