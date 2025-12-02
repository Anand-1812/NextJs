const UsersDetails = async ({ params }: { params: Promise<{ id: String }> }) => {
  const { id } = await params;
  return (
    <div>
        <h1 className="text-indigo-400">Showing details of users: {id}</h1>
    </div>
  )
}

export default UsersDetails
