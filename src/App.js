import React from 'react';
import './App.css';
import 'antd/dist/antd.css';

import { AppHeader } from './components/Header/Header';
import { AppSidebar } from './components/Sidebar/Sidebar';
import { AppContent } from './components/Content/Content';
import { Layout } from 'antd';
import {
  BrowserRouter as Router,
} from "react-router-dom";

const { Header, Sider, Content } = Layout;

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Header>
            <AppHeader />
          </Header>
          <Layout>
            <Sider width={70} theme='light'>
              <AppSidebar />
            </Sider>
            <Content>
              <AppContent />
            </Content>
          </Layout>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
