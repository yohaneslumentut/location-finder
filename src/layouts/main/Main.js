import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Main.css';

const { Sider, Content } = Layout;

function MainLayout(props) {
  const { children } = props;

  return (
    <Layout>
      <Sider width={300} className="app-sider">
        <Link to="/about" className="app-about-link">
          About
        </Link>
        <Link to="/check" className="app-about-link">
          Check
        </Link>
        <h1 className="app-sider-title">Location Finder App</h1>
      </Sider>
      <Content>{children}</Content>
    </Layout>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
