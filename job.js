import React from 'react';

const Jobs = () => {
    const applications = [
        { applicant: "the Applicant name", experience: '2 Years', email: 'usertwo@gmail.com', mobile: '002011289304' },
        { applicant: "the company name", experience: '3 Years', email: 'usertwo@gmail.com', mobile: '002011289304' },
        { applicant: "the company name", experience: '1 Year', email: 'usertwo@gmail.com', mobile: '002011289304' },
        { applicant: "the company name", experience: '3 Years', email: 'usertwo@gmail.com', mobile: '002011289304' },
        { applicant: "the company name", experience: '2 Years', email: 'usertwo@gmail.com', mobile: '002011289304' },
        { applicant: "the company name", experience: '4 Years', email: 'usertwo@gmail.com', mobile: '002011289304' },
    ];

    return (
        <div className="container mt-3">
            <div className="row align-items-center justify-content-between mb-3">
                <div className="col-md-12 text-md-start text-center">
                    <div className="header-title">
                        Applications For "Job" at "company name"
                        <div className="linee mx-auto mx-md-0"></div>
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
                                {/* <span className="">Applicant</span> */}
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
        </div>
    );
};

export default Jobs;
