import { Avatar, Card } from 'antd';
import { EnvironmentOutlined, GithubOutlined } from '@ant-design/icons';
import ContentLayout from '../layouts/content';
import styles from '../styles/about';

function Paragraph({ children, style }) {
  return <p style={style}>{children}</p>;
}

function Header({ children, style }) {
  return <h1 style={style}>{children}</h1>;
}

function AboutPage() {
  return (
    <ContentLayout title="About">
      <Card style={styles.card}>
        <Header style={styles.title}>
          <EnvironmentOutlined />
          {'  '}
          Location Finder App
        </Header>
        <Paragraph style={styles.paragraph}>
          A Google Maps application built on
          <b> React, Redux-Observable Epic, & Antd </b> application.
          <br />
          Made by Yohanes O.Lumentut
        </Paragraph>
        <Avatar
          style={styles.avatar}
          src="https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci82N2JkZjhjM2JhNjk4ZmQ4NmQ1MWJiOTM0M2VmZDRhYT9zaXplPTUwJmRlZmF1bHQ9cmV0cm8ifQ.x1SCwRpLQ3LIO-_1J2HXRWxUstAkCG0AXIXzGblwqKs"
        />
        <Paragraph style={styles.paragraphInfo}>
          <EnvironmentOutlined /> Jakarta
        </Paragraph>
        <Paragraph style={styles.paragraphInfo}>
          <GithubOutlined />{' '}
          <a href="https://github.com/yohaneslumentut">
            https://github.com/yohaneslumentut
          </a>
        </Paragraph>
      </Card>
    </ContentLayout>
  );
}

export default AboutPage;
