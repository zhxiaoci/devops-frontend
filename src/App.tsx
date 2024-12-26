import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Layout, ConfigProvider, theme, Spin } from 'antd';
import { UserProvider } from './contexts/UserContext';
import { WsProvider } from './contexts/WsContext'
import AppHeader from './components/Layout/AppHeader';
import Sidebar from './components/Layout/Sidebar';


// import RequirementsList from './components/Requirements/RequirementsList';
// import RequirementsBoard from './components/Requirements/RequirementsBoard';
// import TeamRoles from './components/Team/TeamRoles';
// import BranchesView from './components/Repository/BranchesView';
// import Dashboard from './components/Dashboard/Dashboard';
// import AuthCallback from './components/Auth/AuthCallback';
// import TeamMembers from './components/Team/TeamMembers';
// import RepositoryDetail from './components/Repository/RepositoryDetail';
// import WorkItemsList from './components/WorkItems/WorkItemsList';
// import WorkItemsBoard from './components/WorkItems/WorkItemsBoard';

const Home = lazy(() => import('./components/Dashboard/Dashboard')); 
const AuthCallback = lazy(() => import('./components/Auth/AuthCallback')); 
const RepositoryDetail = lazy(() => import('./components/Repository/RepositoryDetail')); 
const WorkItemsList = lazy(() => import('./components/WorkItems/WorkItemsList')); 
const WorkItemsBoard = lazy(() => import('./components/WorkItems/WorkItemsBoard')); 
const TeamMembers = lazy(() => import('./components/Team/TeamMembers')); 

const { Content } = Layout;
const queryClient = new QueryClient();

function App() {
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
          <Router basename='/devops-frontend'>
            <Layout className="app-layout">
              <AppHeader />
              <Layout>
                <Sidebar />
                <Content className="app-content">
                  <Suspense>   
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/auth/callback" element={<AuthCallback />} />
                      <Route path="/repository/:repoName" element={
                        <WsProvider>
                          <RepositoryDetail />
                        </WsProvider>
                      }/>
                      <Route path="/work-items/list" element={<WorkItemsList />} />
                      <Route path="/work-items/board" element={<WorkItemsBoard />} />
                      <Route path="/team/members" element={<TeamMembers />} />
                    </Routes>
                  </ Suspense>
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