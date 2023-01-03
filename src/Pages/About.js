import React from 'react';

function About() {
    return (
        <div className='about'>
            <h2>How To Use This App</h2>
            <li>You should see a Navigation Bar with various links</li>
            <li>The Home Link should take you to the Home Page</li>
            <li>The 'Logs' Lonk should take you an index page listing all Captain Logs</li>
            <li>The 'New Log' Link to take you to a form where you can type in data for a new log</li>
            <li>Upon submitting a new log, you should be redirected to the log index page where you can see your newly added log</li>
            <li>Clicking a log title on the logs index page should take you to the logs 'show' page displaying information pertaining that particular log</li>
            <li>On the logs 'show' page, clicking the 'Edit' button should take you to a page where you can update the existing data for the selected log</li>
            <li>The data types for the Captain's Name, title, and post should be a STRING, the days Since Last Crisis should be a NUMBER data type, and the Mistakes Were Made Today should be represented by a checkbox indicating a true/false value</li>
            <li>All data fields for all forms in the application should have a correct value and datatype unless an error will be returned</li>
            <li>Clicking the 'Back' button on any forms page will dismiss all changes made and redirect you back to the 'Logs' index page</li>
            <li>Clicking the 'Delete' button on a selected logs show page will prompt you with a message making sure you wish to PERMANENTLY delete the selected log</li>
            <li>Thank You For Visiting My App! </li>
        </div>
    );
}

export default About;