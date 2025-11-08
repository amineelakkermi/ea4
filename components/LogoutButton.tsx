'use client'

import { signOut } from "next-auth/react"

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: '/' })}
      className="
        px-5 py-2 rounded-lg
        bg-red-500 text-white font-semibold
        shadow-md hover:shadow-lg
        hover:bg-red-600
        transition-all duration-200
        active:scale-95
      "
    >
      Déconnexion
    </button>
  )
}
