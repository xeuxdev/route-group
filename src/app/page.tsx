import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <header className="my-10">This is the home page</header>

      <div className="space-y-8">
        <Link
          href={"/signup"}
          className="grid place-items-center px-5 bg-slate-500 h-10 w-32 rounded-md hover:px-7 hover:w-36 duration-300"
        >
          SignUp
        </Link>
        <Link
          href={"/login"}
          className="grid place-items-center px-5 bg-slate-500 h-10 w-32 rounded-md hover:px-7 hover:w-36 duration-300"
        >
          Login
        </Link>
      </div>
    </main>
  )
}
