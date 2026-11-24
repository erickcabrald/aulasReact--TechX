export function UserCard({ id, nome, curso, email }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
      <p className="mb-2 text-sm text-gray-500">ID: {id}</p>

      <h2 className="text-xl font-bold text-gray-800">{nome}</h2>

      <p className="mt-2 text-sm text-blue-700">{curso}</p>

      <p className="mt-3 text-sm text-gray-600">{email}</p>
    </div>
  );
}
