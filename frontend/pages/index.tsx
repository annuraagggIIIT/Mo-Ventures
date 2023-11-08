// frontend/pages/index.tsx
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/contacts').then((response) => {
      setUsers(response.data);
    });
  }, []);

return (
    <div>
        <h1>Contact List</h1>
        <ul>
            {users.map((user: { id: number, name: string, email: string }) => (
                <li key={user.id}>
                    <strong>Name:</strong> {user.name}, <strong>Email:</strong> {user.email}
                </li>
            ))}
        </ul>
    </div>
);
}
