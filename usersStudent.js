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
        <div className="container mt-3 mb-5">
            <div className="row">
                {/* Top Div */}
                <div className="top-bar mb-0 mb-md-5 d-flex justify-content-between align-items-center mb-3">
                    <div className="top-info text-white mb-0 mb-md-5 ">
                        <div className="admin-panel-title">
                            Admin Panel
                            <div className="lineP "></div>
                        </div>
                        <p className="panel-date mb-0 mb-md-5">6th June 2023</p>
                    </div>
                    <div className="d-none d-lg-block">
                        <button className="btn btn-gold">Create New User</button>
                    </div>
                </div>

                {/* Left Div */}
                <div className="col-lg-3 col-md-12">
                    <div className="left-content">
                        <ul className="sidebar-list pt-2 py-md-3 px-3 ">
                            <li className='title titleActive'>Users</li>
                            <ul className="sub-list">
                                <li>Admins</li>
                                <li>Editors</li>
                                <li>Instructors</li>
                                <li style={{ color: '#BF9530' }}>Students</li>
                            </ul>
                            <li className='title '>Articles</li>
                            <ul className="sub-list">
                                <li>Published Articles</li>
                                <li>Scheduled Articles</li>
                                <li>Saved Drafts</li>
                            </ul>
                            <li className='title'>Jobs</li>
                            <ul className="sub-list">
                                <li>Published Jobs</li>
                                <li>Saved Drafts</li>
                            </ul>
                            <li className='title'>Courses</li>
                            <ul className="sub-list">
                                <li>Published Courses</li>
                                <li>Scheduled Courses</li>
                                <li>Saved Drafts</li>
                            </ul>
                            {/* Upload Certificates Button */}
                            <div className="upload-button  mt-md-5 mb-md-3  d-none d-lg-block">
                                <button className="btn btn-gold ">Upload Certificates</button>
                            </div>
                        </ul>
                    </div>
                </div>

                {/* Right Div */}
                <div className="col-lg-9 col-md-12">
                    {/* content of right div */}
                    <div className="row align-items-center justify-content-between mb-3">
                        <div className="col-md-5 text-md-start text-center">
                            <div className="header-title">
                                Users - Students
                                <div className="linee mx-auto mx-md-0"></div>
                            </div>
                        </div>
                        <div className="col-md-5 mt-3 mt-md-0">
                            {/* Search Div for Desktop */}
                            <div className="search-container d-none d-lg-flex">
                                <input type="text" className="search-input" placeholder="Search In Users" />
                                <button className="search-btn"><i className="fas fa-search"></i></button>
                            </div>
                            {/* Menu for Mobile */}
                            <div className="d-block d-lg-none">
                                <div className="mobile-dropdown">
                                    <button className="dropdown-btn">
                                        Students
                                        <i className="fas fa-chevron-down dropdown-arrow"></i> 
                                    </button>
                                </div>
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
                                                <button className="me-1 btn-act"><i className="fas fa-edit"></i></button>
                                                <button className="btn-act"><i className="fas fa-trash-alt"></i></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="pagination">
                        <a href="#" className="arrow">
                            <i className="fas fa-chevron-left" style={{ color: '#BF9530' }}></i>
                        </a>
                        <a href="#">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <span>.....</span>
                        <a href="#" className="arrow">
                            <i className="fas fa-chevron-right" style={{ color: '#BF9530' }}></i>
                        </a>
                    </div>

                    {/* Button displaying bottom only in mobile*/}
                    <div className="d-block d-lg-none text-center">
                        <button className="btn btn-gold">Create New Article</button>
                    </div>

                    <div className="upload-button d-block d-lg-none text-center">
                        <button className="btn btn-gold btngoldCertificates">Upload Certificates</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Users;
