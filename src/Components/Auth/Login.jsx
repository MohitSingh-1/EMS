import React, { useState } from "react";

const Login = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
    props.loginHandler(email,password);
    setEmail('');
    setPassword('');
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex h-screen w-screen items-center justify-center p-4 bg-center bg-cover bg-[url('/images/bg.jpeg')]">
      <div className="border-2 border-emerald-800 rounded-2xl w-full max-w-md flex flex-col justify-center items-center p-6 h-1/2 backdrop-blur-md">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center w-full"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            type="email"
            placeholder="Enter your email"
            className="border-2 border-emerald-500 bg-transparent outline-none rounded-full py-4 px-6 text-base md:text-xl placeholder:text-black text-black w-full"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            type="password"
            placeholder="Enter password"
            className="border-2 border-emerald-500 bg-transparent outline-none rounded-full py-4 px-6 text-base md:text-xl placeholder:text-black text-black mt-3 w-full"
          />
          <button className="border-none bg-emerald-500 outline-none rounded-full py-3 px-10 md:px-20 text-black text-base md:text-xl mt-7 w-full">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
