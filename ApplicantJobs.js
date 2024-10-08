import React from 'react';
import styled from 'styled-components';

//  npm install styled-components
const Line = styled.div`
    width: 470px;
    height: 2px;
    background-color: #BF9530;
    transition: width 0.3s ease;
    margin-top: 5px;

     @media (max-width: 768px) {
            width: 100px;
          margin: 5px auto 0 auto; 
        }
`;

const ApplicantJobs = () => {
    const applications = [
        { applicant: "the Applicant name", experience: '2 Years', email: 'usertwo@gmail.com', mobile: '002011289304' },
        { applicant: "the company name", experience: '3 Years', email: 'usertwo@gmail.com', mobile: '002011289304' },
        { applicant: "the company name", experience: '1 Year', email: 'usertwo@gmail.com', mobile: '002011289304' },
        { applicant: "the company name", experience: '3 Years', email: 'usertwo@gmail.com', mobile: '002011289304' },
        { applicant: "the company name", experience: '2 Years', email: 'usertwo@gmail.com', mobile: '002011289304' },
        { applicant: "the company name", experience: '4 Years', email: 'usertwo@gmail.com', mobile: '002011289304' },
    ];

    return (
        <div className="container mt-3 mb-5 ">
            <div className="row">
                <div className="top-bar mb-0 mb-md-5 d-flex justify-content-between align-items-center mb-3">
                    <div className="top-info text-white mb-0 mb-md-5 ">
                        <div className="admin-panel-title">
                            Admin Panel
                            <div className="lineP "></div>
                        </div>
                        <p className="panel-date mb-0 mb-md-5">6th June 2023</p>
                    </div>
                </div>
                {/* Left Div */}
                <div className="col-lg-3 col-md-12 mb-3">
                    <div className="left-content mt-3">
                        <p className="text-white">you can add the content you want to place on the left side.</p>
                    </div>
                </div>

                {/* Right Div */}
                <div className="col-lg-9 col-md-12">
                    {/* content of right div */}
                    <div className="row align-items-center justify-content-between mb-3">
                        <div className="col-md-12 text-md-start text-center">
                            <div className="header-title">
                                Applications For "Job" at "company name"
                                <Line />
                            </div>
                        </div>
                    </div>

                    <div className="table-responsive">
                        <table className="table table-dark articles-table">
                            <thead>
                                <tr>
                                    <th>Applicant</th>
                                    <th>Experience</th>
                                    <th>Email</th>
                                    <th>Mobile Number</th>
                                </tr>
                            </thead>
                            <tbody>
                                {applications.map((application, index) => (
                                    <tr key={index}>
                                        <td className='subtitle-right' data-label="Applicant">
                                            {application.applicant}</td>
                                        <td data-label="Experience">{application.experience}</td>
                                        <td data-label="Email">{application.email}</td>
                                        <td data-label="Mobile Number">{application.mobile}</td>
                                        <td className="text-end">
                                            <button
                                                className="btn btn-download-cv w-100 w-sm-100"
                                                style={{ backgroundColor: '#BF9530' }}
                                            >
                                                DOWNLOAD CV
                                            </button>
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

                </div>
            </div>
        </div>
    );
};

export default ApplicantJobs;
