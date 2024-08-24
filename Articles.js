import React from 'react';
import './css/Articles.css';

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
        <div className="container mt-3">
            <div className="row align-items-center justify-content-between mb-3">
                <div className="col-md-5 text-md-start text-center">
                    <div className="header-title">
                        Articles
                        <div className="linee mx-auto mx-md-0"></div>
                    </div>
                </div>
                <div className="col-md-5 mt-3 mt-md-0">
                    <div className="search-container">
                        <input type="text" className="search-input" placeholder="Search In Jobs" />
                        <button className="search-btn"><i className="bi bi-search"></i></button>
                    </div>
                </div>
            </div>

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
    );
};

export default Articles;
