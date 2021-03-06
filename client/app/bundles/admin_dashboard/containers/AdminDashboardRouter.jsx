import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import AdminDashboard from 'bundles/admin_dashboard/containers/AdminDashboard';
import AdminDashboardContainer from 'bundles/admin_dashboard/containers/AdminDashboardContainer';
import DistrictActivityScoresProgressReport from 'bundles/admin_dashboard/containers/DistrictActivityScores';
import DistrictConceptReportsProgressReport from 'bundles/admin_dashboard/containers/DistrictConceptReports';
import DistrictStandardsReportsProgressReport from 'bundles/admin_dashboard/containers/DistrictStandardsReports';
import ActivityScoresStudentOverview from 'bundles/admin_dashboard/components/activity_scores_student_overview';

const AdminDashboardRouter = (props) => {
  return (
    <Router Router history={browserHistory}>
      <Route path="teachers/admin_dashboard" component={AdminDashboardContainer} >
        <IndexRoute component={AdminDashboard} adminId={props.id} />
        <Route path="district_activity_scores" component={DistrictActivityScoresProgressReport} />
        <Route path="district_activity_scores/student_overview" component={ActivityScoresStudentOverview} />
        <Route path="district_concept_reports" component={DistrictConceptReportsProgressReport} />
        <Route path="district_standards_reports" component={DistrictStandardsReportsProgressReport} />
      </Route>
    </Router>
  );
};

export default AdminDashboardRouter;
