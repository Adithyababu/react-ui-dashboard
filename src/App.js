import './App.css';
import { Space } from "antd";
import AppHeader from './Components/AppHeader';
import SideMenu from './Components/SideMenu';
import PageContent from './Components/PageContent';

function App() {
  return (
    <div className="App">
    <AppHeader />
    <Space className="SideMenuAndPageContent">
      <SideMenu></SideMenu>
      <PageContent></PageContent>
    </Space>
    </div>
  );
}

export default App;
