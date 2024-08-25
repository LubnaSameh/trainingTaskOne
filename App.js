import React from 'react';
import Articles from './Articles';
import Jobs from './Jobs';
import Users from './usersStudent';
import ApplicantJobs from './ApplicantJobs';

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
