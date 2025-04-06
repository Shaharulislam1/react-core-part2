import { use } from "react";

export default function Users({ fetchUser }) {
  const users = use(fetchUser);

  return (
    <div className="card">
      <h2>Users: {users.length} </h2>
      
    </div>
  );
}
