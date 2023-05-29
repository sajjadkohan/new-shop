import Image from 'next/image'
import pStyles from '../styles/Public.module.css';
import styles from '../styles/Index.module.css';
import Header from '@/components/Header';
import SliderImage from '@/components/SliderImage';
import Title_c from '@/components/smallComponents/Title_c';
import CardClassic from '@/components/smallComponents/CardClassic';
import CardOfficial from '@/components/smallComponents/CardOfficial';
import SwiperProduct from '@/components/smallComponents/SwiperProduct';

// images
import bannerSm1 from '../../images/pngwing.com.png';
import bannerSm3 from '../../images/watch3.png';
import bannerSm4 from '../../images/kisspng-macbook-pro-macbook-air-mockup-optical-disc-drive-apple-laptops-apple-device-5a705c207854a7.4232902715173130564929.png';
import bigBanner from '../../images/1.jpg';
import bigBanner2 from '../../images/two.png';
import bigBanner3 from '../../images/4.png';
import { API_BASE } from '../../constanst';
import 'swiper/css';

export default async function Home() {

  const res = await fetch(`${API_BASE}/user/product/getAllProducts`,{
    headers :{"Content-Type": "application/json"},
    cache:"no-store",
    method:"POST"
  })
  const data = await res.json();

  return (
    <main className={styles.indexPage}>
      <Header />
    
    <div className={`${pStyles.container} ${styles.contentPage}`}>

    <div className={styles.bannerTop}>
      <div className={styles.right}>
        <SliderImage/>
      </div>
    </div>

      <Title_c title='دسته بندی' hrefPath='/' />
      <div className={styles.section2 + " " + "dFlex"}> 
      <CardClassic text='لوارم جانبی' srcImage={bannerSm1.src}/>
      <CardClassic text='card1' srcImage={bannerSm3.src}/>
      <CardClassic text='تیشرت' srcImage={bannerSm1.src}/>
      <CardClassic text='card1' srcImage={bannerSm4.src}/>

      </div>

      <div className={styles.section3 + " " + "dFlex"}>
      <CardOfficial text={<span>شیک <br/>خاص <br/>جذاب</span>} textAlign='left' srcImage={bigBanner2.src}/>
      <CardOfficial text={<span>جدیدترین مد روز را <br/> از ما بخواهید</span>} textAlign='center' srcImage={bigBanner.src}/>
      <CardOfficial text={<span> لباس<br/>رسمی <br/>برازندته</span>} textAlign='right' srcImage={bigBanner3.src}/>

      </div>


      <div className={styles.section4}>
      <SwiperProduct data={data.data} titleValue='جدیدترین ها' titleHref='newests' />
      </div>

      <div className={styles.section5}>
        <SwiperProduct data={data.data} titleValue='جدیدترین ها' titleHref='newests' />
      </div>

 
    </div>

   </main>
  )
}
