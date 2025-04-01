import React from 'react';
import AdminDashboard from '../components/AdminDashboard/AdminDashboard';
import TeacherPortal from '../components/TeacherPortal/TeacherPortal';
import StudentPortal from '../components/StudentPortal/StudentPortal';
import ParentPortal from '../components/ParentPortal/ParentPortal';
import CommunicationSystem from '../components/CommunicationSystem/CommunicationSystem';
import PaymentSystem from '../components/PaymentSystem/PaymentSystem';
import TimetableScheduling from '../components/TimetableScheduling/TimetableScheduling';

const DashboardPage = () => {
    return (
        <div className="dashboard-page">
            <h1>Dashboard</h1>
            <AdminDashboard />
            <TeacherPortal />
            <StudentPortal />
            <ParentPortal />
            <CommunicationSystem />
            <PaymentSystem />
            <TimetableScheduling />
        </div>
    );
};

export default DashboardPage;