import React from 'react';
import Articles from './Articles';
import Jobs from './Jobs';
import Users from './usersStudent';
import ApplicantJobs from './ApplicantJobs';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
    return (
        <div className="App">
            <Articles/>
            <ApplicantJobs/>
           <Users/>
            <Jobs/>
        </div>
    );
}

export default App;

// npm start
