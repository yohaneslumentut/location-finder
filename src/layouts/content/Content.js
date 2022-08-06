import { Layout, PageHeader } from 'antd';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const { Content } = Layout;

function ContentLayout(props) {
  const { children, title = null, subTitle = null } = props;
  const navigate = useNavigate();

  return (
    <Layout>
      <PageHeader
        className="site-page-header"
        onBack={() => navigate('/')}
        title={title}
        subTitle={subTitle}
      />
      <Content>{children}</Content>
    </Layout>
  );
}

ContentLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContentLayout;
