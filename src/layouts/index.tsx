import { Link, Outlet, history,useLocation } from 'umi';
import styles from './index.less';
import {Layout} from 'antd';
import { logo } from '@/assets/api';

export default ()=>{
  const location = useLocation();
  if(location.pathname === '/') history.replace('/wusiLink')
  console.log(location)
  return (
    <Layout className={styles.container}>
      <Layout.Header className={styles.header}>
        <div className={styles.brand}>
          <img className={styles.logo} src={logo} alt="logo" />
          <span>钨丝WUSI</span>
        </div>
        
      </Layout.Header>
      <Layout.Content className={styles.content}>
        <Outlet/>
      </Layout.Content>
      <Layout.Footer className={styles.footer} >WUSI系列项目网址导航</Layout.Footer>
    </Layout>
  )
}
