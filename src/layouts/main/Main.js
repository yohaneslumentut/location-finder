import { Layout } from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Places from '../../features/places/Places';
import './Main.css';

const { Sider, Content } = Layout;

function MainLayout(props) {
  const { children } = props;

  return (
    <Layout>
      <Sider width={300} className="app-sider">
        <h1 className="app-sider-title">
          <EnvironmentOutlined />
          {'  '} <b>Location Finder </b>App
        </h1>
        <Places />
        <div className="app-sider-link">
          <Link to="/about" className="app-about-link">
            About
          </Link>
          <Link to="/check" className="app-about-link">
            Check Configuration
          </Link>
        </div>
      </Sider>
      <Content>{children}</Content>
    </Layout>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
