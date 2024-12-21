import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Layout, ConfigProvider, theme } from 'antd';
import { UserProvider } from './contexts/UserContext';
import Dashboard from './components/Dashboard/Dashboard';
import AuthCallback from './components/Auth/AuthCallback';
import AppHeader from './components/Layout/AppHeader';
import Sidebar from './components/Layout/Sidebar';
import RequirementsList from './components/Requirements/RequirementsList';
import RequirementsBoard from './components/Requirements/RequirementsBoard';
import TeamMembers from './components/Team/TeamMembers';
import TeamRoles from './components/Team/TeamRoles';
import BranchesView from './components/Repository/BranchesView';
import RepositoryDetail from './components/Repository/RepositoryDetail';
import WorkItemsList from './components/WorkItems/WorkItemsList';
import WorkItemsBoard from './components/WorkItems/WorkItemsBoard';

const { Content } = Layout;
const queryClient = new QueryClient();

function App() {
  console.log(1)
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          colorPrimary: '#1890ff',
          borderRadius: 8,
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
        },
      }}
    >
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <Router>
            <Layout className="app-layout">
              <AppHeader />
              <Layout>
                <Sidebar />
                <Content className="app-content">
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/auth/callback" element={<AuthCallback />} />
                    <Route path="/repository/:repoName" element={<RepositoryDetail />} />
                    <Route path="/work-items/list" element={<WorkItemsList />} />
                    <Route path="/work-items/board" element={<WorkItemsBoard />} />
                    <Route path="/team/members" element={<TeamMembers />} />
                  </Routes>
                </Content>
              </Layout>
            </Layout>
          </Router>
        </UserProvider>
      </QueryClientProvider>
    </ConfigProvider>
  );
}

export default App; 
