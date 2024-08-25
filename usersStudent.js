import React from 'react';

const Users = () => {
    const users = [
        { name: "Here's the username", status: 'Active', userID: 'FE-2303', role: 'Student', email: 'user@gmail.com' },
        { name: "Here's the username", status: 'Active', userID: 'BE-2302', role: 'Student', email: 'usertwo@gmail.com' },
        { name: "Here's the username", status: 'Inactive', userID: 'BE-2302', role: 'Student', email: 'usertwo@gmail.com' },
        { name: "Here's the username", status: 'Inactive', userID: 'BE-2302', role: 'Student', email: 'usertwo@gmail.com' },
        { name: "Here's the username", status: 'Inactive', userID: 'BE-2302', role: 'Student', email: 'usertwo@gmail.com' },
    ];

    return (
        <div className="container mt-3">
            <div className="row">
                {/* Left Div */}
                <div className="col-lg-4 col-md-12 mb-3">
                    <div className="left-content mt-3">
                        <p className="text-white">Here you can add the content you want to place on the left side.</p>
                    </div>
                </div>
                {/* Right Div */}
                <div className="col-lg-8 col-md-12">
                    {/* content of right div */}
                    <div className="row align-items-center justify-content-between mb-3">
                        <div className="col-md-5 text-md-start text-center">
                            <div className="header-title">
                                Users - Students
                                <div className="linee mx-auto mx-md-0"></div>
                            </div>
                        </div>
                        <div className="col-md-5 mt-3 mt-md-0">
                            <div className="search-container">
                                <input type="text" className="search-input" placeholder="Search In Users" />
                                <button className="search-btn"><i className="bi bi-search"></i></button>
                            </div>
                        </div>
                    </div>

                    <div className="table-responsive">
                        <table className="table table-dark articles-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Status</th>
                                    <th>User ID</th>
                                    <th>Role</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr key={index}>
                                        <td data-label="Name">{user.name}</td>
                                        <td data-label="Status">{user.status}</td>
                                        <td data-label="User ID">{user.userID}</td>
                                        <td data-label="Role">{user.role}</td>
                                        <td data-label="Email">{user.email}</td>
                                        <td className="text-end">
                                            <div className="action-buttons">
                                                <button className="me-1 btn-act"><i className="bi bi-pencil-square"></i></button>
                                                <button className="btn-act"><i className="bi bi-trash-fill"></i></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Users;
