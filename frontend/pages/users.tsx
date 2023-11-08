// frontend/pages/users.tsx
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/contacts').then((response) => {
      setUsers(response.data);
    });
  }, []);

return (
    <div>
        <h1>All Users</h1>
        <ul>
            {users.map((user: any) => (
                <li key={user.id}>
                    <strong>Name:</strong> {user.name}, <strong>Email:</strong> {user.email}
                </li>
            ))}
        </ul>
    </div>
);
}
