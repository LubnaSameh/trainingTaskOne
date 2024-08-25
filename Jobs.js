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
        <div className="container mt-3">
            <div className="row">
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
                            <div className="search-container">
                                <input type="text" className="search-input" placeholder="Search In Jobs" />
                                <button className="search-btn"><i className="bi bi-search"></i></button>
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
                                    <th>#Applications</th>
                                </tr>
                            </thead>
                            <tbody>
                                {jobs.map((job, index) => (
                                    <tr key={index}>
                                        <td data-label="Company">{job.company}</td>
                                        <td data-label="Position">{job.position}</td>
                                        <td data-label="Status">
                                            <span className={`btn ${job.status === 'Open' ? 'bg-success' : 'bg-secondary'}`}>
                                                {job.status}
                                            </span>
                                        </td>
                                        <td data-label="Posted At">
                                            <span className="date-time">
                                                {`${job.dateTime.split(' ')[0]} ${job.dateTime.split(' ')[1]} ${job.dateTime.split(' ')[2]}`}<br />
                                                {`${job.dateTime.split(' ')[3]} ${job.dateTime.split(' ')[4]}`}
                                            </span>
                                        </td>



                                        <td data-label="# Applications">{job.applications}</td>
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

                    <div class="pagination">
                        <a href="#" class="arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon">
                                <circle cx="12" cy="12" r="11" fill="none" stroke="#BF9530" stroke-width="2" />
                                <path d="M14 16l-4-4 4-4" fill="none" stroke="#BF9530" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>
                        <a href="#">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <span>.....</span>

                        <a href="#" class="arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon">
                                <circle cx="12" cy="12" r="11" fill="none" stroke="#BF9530" stroke-width="2" />
                                <path d="M10 8l4 4-4 4" fill="none" stroke="#BF9530" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Jobs;
