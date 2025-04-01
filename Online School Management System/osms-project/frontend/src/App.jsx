import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import TeacherPortal from './components/TeacherPortal/TeacherPortal';
import StudentPortal from './components/StudentPortal/StudentPortal';
import ParentPortal from './components/ParentPortal/ParentPortal';
import CommunicationSystem from './components/CommunicationSystem/CommunicationSystem';
import PaymentSystem from './components/PaymentSystem/PaymentSystem';
import TimetableScheduling from './components/TimetableScheduling/TimetableScheduling';
import './styles/main.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/admin" component={AdminDashboard} />
        <Route path="/teacher" component={TeacherPortal} />
        <Route path="/student" component={StudentPortal} />
        <Route path="/parent" component={ParentPortal} />
        <Route path="/communication" component={CommunicationSystem} />
        <Route path="/payment" component={PaymentSystem} />
        <Route path="/timetable" component={TimetableScheduling} />
      </Switch>
    </Router>
  );
}

export default App;