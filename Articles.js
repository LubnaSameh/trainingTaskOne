import React from 'react';
import './css/styleOfTables.css';

const Articles = () => {
    const articles = [
        { title: "Here's the article title", category: 'Tech', status: 'Published', dateTime: 'Monday, June 5th 12:30 PM' },
        { title: "Here's the article title", category: 'Education', status: 'Published', dateTime: 'Monday, June 5th 12:30 PM' },
        { title: "Here's the article title", category: 'Business', status: 'Draft', dateTime: 'Monday, June 5th 12:30 PM' },
        { title: "Here's the article title", category: 'Tech', status: 'Draft', dateTime: 'Monday, June 5th 12:30 PM' },
        { title: "Here's the article title", category: 'Education', status: 'Draft', dateTime: 'Monday, June 5th 12:30 PM' },
        { title: "Here's the article title", category: 'Business', status: 'Draft', dateTime: 'Monday, June 5th 12:30 PM' },
    ];

    return (
        <div className="container mt-3 mb-5">
            <div className="row mt-4">
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
                        <button className="btn btn-gold">Create New Article</button>
                    </div>
                </div>

                {/* Left Div */}
                <div className="col-lg-3 col-md-12">
                    <div className="left-content">
                        <ul className="sidebar-list pt-2 py-md-3 px-3 ">
                            <li className='title'>Users</li>
                            <ul className="sub-list">
                                <li>Admins</li>
                                <li>Editors</li>
                                <li>Instructors</li>
                                <li>Students</li>
                            </ul>
                            <li className='title titleActive'>Articles</li>
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
                        </ul>
                    </div>
                </div>

                {/* Right Div */}
                <div className="col-lg-9 col-md-12">
                    {/* Content of the right div */}
                    <div className="row align-items-center justify-content-between mb-3">
                        <div className="col-md-5 text-md-start text-center">
                            <div className="header-title">
                                Articles
                                <div className="linee mx-auto mx-md-0"></div>
                            </div>
                        </div>
                        {/* Search of right div */}
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
                                       Published Articles
                                        <i className="fas fa-chevron-down dropdown-arrow"></i> 
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* Table */}
                    <div className="table-responsive">
                        <table className="table table-dark articles-table">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Category</th>
                                    <th>Status</th>
                                    <th>Date & Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {articles.map((article, index) => (
                                    <tr key={index}>
                                        <td data-label="Title">{article.title}</td>
                                        <td data-label="Category">{article.category}</td>
                                        <td data-label="Status">
                                            <span className={`btn ${article.status === 'Published' ? 'bg-primary' : 'bg-grey'}`}>
                                                {article.status}
                                            </span>
                                        </td>
                                        <td data-label="Date & Time">
                                            <span className="date-time">
                                                {`${article.dateTime.split(' ')[0]} ${article.dateTime.split(' ')[1]} ${article.dateTime.split(' ')[2]}`}<br />
                                                {`${article.dateTime.split(' ')[3]} ${article.dateTime.split(' ')[4]}`}
                                            </span>
                                        </td>
                                        <td className="text-end">
                                            <div className="action-buttons">
                                            <button className="me-1 btn-act"><i className="fas fa-edit"></i></button>                                                <button className="btn-act "><i className="fas fa-trash-alt"></i></button>
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

                    {/* Button at the bottom */}
                    <div className="d-block d-lg-none text-center ">
                        <button className="btn btn-gold">Create New Article</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Articles;
