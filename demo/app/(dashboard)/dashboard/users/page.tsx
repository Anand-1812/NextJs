import Link from "next/link"

const Users = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-4xl text-amber-600">Users Dashboard</h1>

      <ul className="text-2xl mt-10 flex flex-col gap-3">
        <li className="text-blue-500 hover:text-blue-700"><Link href="/dashboard/users/1">Users 1</Link></li>
        <li className="text-blue-500 hover:text-blue-700"><Link href="/dashboard/users/2">Users 2</Link></li>
        <li className="text-blue-500 hover:text-blue-700"><Link href="/dashboard/users/3">Users 3</Link></li>
        <li className="text-blue-500 hover:text-blue-700"><Link href="/dashboard/users/4">Users 4</Link></li>
      </ul>
    </div>
  )
}

export default Users
