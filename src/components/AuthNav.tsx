"use client"
import React from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"

function AuthNav() {
  const pathname = usePathname()

  return (
    <div className="fixed top-5 left-0 w-full">
      <div className="container mx-auto flex items-center justify-between">
        <div>Route groups {pathname} </div>

        <div className="flex items-center gap-5">
          <Link
            href={"/profile"}
            className="grid place-items-center px-5 hover:text-gray-300 duration-300"
          >
            Profile
          </Link>
          <Link
            href={"/dashboard"}
            className="grid place-items-center px-5 hover:text-gray-300 duration-300"
          >
            Dashboard
          </Link>
          <Link
            href={"/settings"}
            className="grid place-items-center px-5 hover:text-gray-300 duration-300"
          >
            Settings
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AuthNav
