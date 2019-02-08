import React from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {

    const assignedClasses = [];
    let btnClass = '';

    if(props.showPersons){
        btnClass = classes.Red;
        console.log('red', classes.Red)
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }

    if (props.persons.length <= 1)
    {
        assignedClasses.push(classes.bold);
      
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Dolly guaraná!</h1>
            <p className={assignedClasses.join(' ')}>Reacting</p>
            <button 
                className={btnClass}
                onClick={props.clicked}>Switch Name</button>
        </div>
    );
}

export default cockpit;