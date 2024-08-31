import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ListUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch users from the API
        axios.get('http://127.0.0.1:8000/admin/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the users!", error);
            });
    }, []);

    return (
        <div className="container">
            <h2>User List</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <React.StrictMode>
        <ListUsers />
    </React.StrictMode>
);
export default ListUsers;
