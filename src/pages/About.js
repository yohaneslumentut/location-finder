import { Link } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';
import ContentLayout from '../layouts/content';

function AboutPage() {
  return (
    <ContentLayout title="About">
      <Link to="/">
        <ArrowLeftOutlined />
      </Link>
      <div>About</div>
    </ContentLayout>
  );
}

export default AboutPage;
