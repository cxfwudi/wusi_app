import styles from './index.less'
import { Card } from 'antd';
import blog from '@/assets/img/blog.png';
import chat from '@/assets/img/chat.png';
const { Meta } = Card;
export default () => {
  return (
    <div className={styles.container}>
      <Card
        hoverable
        bordered
        className={styles.card}
        cover={<img style={{width:'15vw',height:'10vw',padding:'1px 3px 0px 1px'}} alt="example" src={blog} />}
        onClick={()=>{window.location.href = 'http://blog.wusi.fun'}}
      >
        <Meta title="钨丝系列博客网站" description="blog.wusi.fun" />
      </Card>
      <Card
        hoverable
        className={styles.card}
        cover={<img style={{width:'15vw',height:'10vw',padding:'1px 3px 0px 1px'}} alt="example" src={chat} />}
        onClick={()=>{window.location.href = 'http://chat.wusi.fun'}}
      >
        <Meta title="钨丝系列实时聊天网站" description="chat.wusi.fun" />
      </Card>
    </div>
  )
}