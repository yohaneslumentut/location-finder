import { Layout } from 'antd';
import logo from './assets/logo.svg';
import './App.css';

const { Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Content>
          <img src={logo} className="App-logo" alt="logo" />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
