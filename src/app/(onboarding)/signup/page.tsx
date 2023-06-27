import React from "react"

function SignUp() {
  return (
    <div>
      <header className="mb-10">Sign Up Page</header>

      <div className="space-y-5 min-w-40">
        <button className="grid place-items-center px-5 bg-slate-500 h-10 w-28 rounded-md hover:px-7 hover:w-32 duration-300">
          Sign Up
        </button>

        <p>or login</p>

        <button className="grid place-items-center px-5 bg-slate-500 h-10 w-28 rounded-md hover:px-7 hover:w-32 duration-300">
          Login
        </button>
      </div>
    </div>
  )
}

export default SignUp
