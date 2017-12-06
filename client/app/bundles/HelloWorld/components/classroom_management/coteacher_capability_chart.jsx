import React from 'react';

export default class extends React.Component {

  render() {
    return (
      <div id='coteacher-capability-chart'>
        <h1>What can coteachers do?</h1>
        <div className='flex-row'>
          <ul>
            <li>Manage your class and edit students</li>
            <li>Assign students to existing Activity Packs</li>
            <li>Launch Quill Lessons with class</li>
            <li>View diagnostic and basic reporting</li>
          </ul>
          <ul className='cant-do'>
            <li>Archive Classes</li>
            <li>Edit/Archive Activity Packs</li>
            <li>View Premium reporting (unless they<br/><span> have a Premium account)</span></li>
          </ul>
        </div>
      </div>
  	);
  }
}
