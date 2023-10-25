import { Link } from "react-router-dom";
import login from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);


  const handleLogin = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);

    signIn(email, password)
    .then(result =>{
      const user = result.user;
      console.log(user)
    })
    .then(error =>{
      console.error(error)
    })


  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center mb-10">
      <div className="w-full lg:w-1/2">
        <img src={login} alt="Login" className="mx-auto h-64" />
      </div>
      <div className="w-full lg:w-1/2 p-4 bg-white rounded shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-700 text-center">
          Login
        </h2>

        <form onSubmit={handleLogin} className="mt-6">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center">
          New cars doctor?{" "}
          <Link to="/up" className="text-red-500">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
