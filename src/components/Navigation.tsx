"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

function Navigation() {
  const pathname = usePathname()

  return (
    <div className="fixed top-5 left-0 w-full">
      <div className="container mx-auto flex items-center justify-between">
        <div>Route groups {pathname} </div>

        <div className="flex items-center gap-5">
          <Link
            href={"/signup"}
            className="grid place-items-center px-5 bg-slate-500 h-10 w-28 rounded-md hover:px-7 hover:w-32 duration-300"
          >
            SignUp
          </Link>
          <Link
            href={"/login"}
            className="grid place-items-center px-5 bg-slate-500 h-10 w-28 rounded-md hover:px-7 hover:w-32 duration-300"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navigation
