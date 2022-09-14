import React from 'react';
import { Badge, TabBar } from 'antd-mobile';
import { AppOutline, MessageFill, MessageOutline, UnorderedListOutline, UserOutline } from 'antd-mobile-icons';
import { useHistory } from 'ice';
import styles from './index.module.css';

const tabs = [
  {
    key: 'home',
    title: '首页',
    icon: <AppOutline />,
    badge: Badge.dot,
  },
  {
    key: 'video-template',
    title: '视频模板',
    icon: <UnorderedListOutline />,
  },
  {
    key: 'message',
    title: '我的消息',
    icon: (active) => (active ? <MessageFill /> : <MessageOutline />),
    badge: '99+',
  },
  {
    key: 'personalCenter',
    title: '个人中心',
    icon: <UserOutline />,
  },
];

export default ({ children }) => {
  const history = useHistory();
  return (
    <div className={styles.container}>
      <div className={styles.body}>{children}</div>
      <div className={styles.footer}>
        <TabBar onChange={(key) => history.push(`/${key}`)}>
          {tabs.map((item) => (
            <TabBar.Item key={item.key} badge={item.badge} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      </div>
    </div>
  );
};
