import React from 'react';
import ReactTable from 'react-table';
import EmptyStateForReport from 'bundles/HelloWorld/components/progress_reports/empty_state_for_report';
import moment from 'moment';
import 'react-table/react-table.css';
import { sortByLastName, sortFromSQLTimeStamp } from 'modules/sortingMethods';

const ConceptReportsTable = ({ data }) => {
  let columns = [
    {
      Header: 'Student',
      accessor: 'student_name',
      resizable: false,
      sortMethod: sortByLastName,
      Cell: row => row.original.student_name,
    }, {
      Header: 'Teacher',
      accessor: 'teacher_name',
      resizable: false,
      Cell: row => row.original.teacher_name,
    }, {
      Header: 'Classroom',
      accessor: 'classroom_name',
      resizable: false,
      Cell: row => row.original.classroom_name,
    }, {
      Header: 'School',
      accessor: 'school_name',
      resizable: false,
      Cell: row => row.original.school_name,
    }, {
      Header: 'Correct',
      accessor: 'correct',
      resizable: false,
      Cell: row => Number(row.original.correct),
    }, {
      Header: 'Incorrect',
      accessor: 'incorrect',
      resizable: false,
      Cell: row => Number(row.original.incorrect),
    }, {
      Header: 'Success Rate',
      accessor: 'percentage',
      resizable: false,
      Cell: row => row.original.percentage + '%',
    }
  ];

  if (data && data.length) {
    return (<div key={`${data.length}-length-for-activities-scores-by-classroom`}>
      <ReactTable data={data}
        columns={columns}
        showPagination={true}
        defaultSorted={[{id: 'last_active', desc: true}]}
        showPaginationTop={false}
        showPaginationBottom={true}
        showPageSizeOptions={false}
        defaultPageSize={100}
        minRows={1}
        className='progress-report has-green-arrow'/>
      </div>)
  } else {
    return <EmptyStateForReport/>
  }
};

export default ConceptReportsTable;
