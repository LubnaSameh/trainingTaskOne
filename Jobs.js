import React from 'react';

const Jobs = () => {
    const jobs = [
        { company: "Here's the company name", position: "Here's the position", status: 'Open', dateTime: 'Monday, June 5th 12:30 PM', applications: 20 },
        { company: "Here's the company name", position: "Here's the position", status: 'Open', dateTime: 'Monday, June 5th 12:30 PM', applications: 25 },
        { company: "Here's the company name", position: "Here's the position", status: 'Closed', dateTime: 'Monday, June 5th 12:30 PM', applications: 48 },
        { company: "Here's the company name", position: "Here's the position", status: 'Closed', dateTime: 'Monday, June 5th 12:30 PM', applications: 0 },
        { company: "Here's the company name", position: "Here's the position", status: 'Closed', dateTime: 'Monday, June 5th 12:30 PM', applications: 11 },
        { company: "Here's the company name", position: "Here's the position", status: 'Closed', dateTime: 'Monday, June 5th 12:30 PM', applications: 19 },
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
                        <button className="btn btn-gold">Create New Job</button>
                    </div>
                </div>
                {/* Left Div */}
                <div className="col-lg-3 col-md-12 mb-3">
                    <div className="left-content mt-3">
                        <p className="text-white">Here you can add the content you want to place on the left side.</p>
                    </div>
                </div>

                {/* Right Div */}
                <div className="col-lg-9 col-md-12">
                    {/* content of right div */}
                    <div className="row align-items-center justify-content-between mb-3">
                        <div className="col-md-5 text-md-start text-center">
                            <div className="header-title">
                                Jobs
                                <div className="linee mx-auto mx-md-0"></div>
                            </div>
                        </div>
                        {/* search of right div */}
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
                                       Published Jobs
                                        <i className="fas fa-chevron-down dropdown-arrow"></i> 
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* table */}
                    <div className="table-responsive">
                        <table className="table table-dark articles-table">
                            <thead>
                                <tr>
                                    <th>Company</th>
                                    <th>Position</th>
                                    <th>Status</th>
                                    <th>Posted At</th>
                                    <th>Applications</th>
                                </tr>
                            </thead>
                            <tbody>
                                {jobs.map((job, index) => (
                                    <tr key={index}>
                                        <td data-label="Company">{job.company}</td>
                                        <td data-label="Position">{job.position}</td>
                                        <td data-label="Status">
                                            <span className={`btn ${job.status === 'Open' ? 'bg-primary' : 'bg-secondary'}`}>
                                                {job.status}
                                            </span>
                                        </td>
                                        <td data-label="Posted At">
                                            <span className="date-time">
                                                {`${job.dateTime.split(' ')[0]} ${job.dateTime.split(' ')[1]} ${job.dateTime.split(' ')[2]}`}<br />
                                                {`${job.dateTime.split(' ')[3]} ${job.dateTime.split(' ')[4]}`}

                                            </span>
                                        </td>

                                        <td data-label="Applications" className=" text-start text-md-center">{job.applications}</td>
                                        <td className="text-end">
                                            <div className="action-buttons">
                                                <button className="btn-act me-1 me-md-0 me-xl-1"><i className="fas fa-edit"></i></button>
                                                <button className="btn-act"><i className="fas fa-trash-alt"></i></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

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

                     {/* Button at the bottom */}
                     <div className="d-block d-lg-none text-center ">
                        <button className="btn btn-gold">Create New Job</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jobs;
