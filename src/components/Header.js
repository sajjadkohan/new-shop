'use client';
import React, { useContext, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
// styles
import styles from "../styles/Header.module.css";
import pStyles from "../styles/Public.module.css";

import logo from "../../images/vector.webp";
import Search from './smallComponents/Search';

// import 'antd/dist/antd.css';
import Icon, { UserOutlined , HeartOutlined , ShoppingCartOutlined } from '@ant-design/icons';
import Link from 'next/link';

// dropDown
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';


// Context
import GlobalContext, { MyContext } from '../context/getProductsCtx';
import { AuthContext } from '../context/AuthCtx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// fontawesome
import { faClose } from '@fortawesome/free-solid-svg-icons'

// svg icon
import profileSvg from '../../svg/user.svg';
import faveriteSvg from '../../svg/heart.svg';
import logoutSvg from '../../svg/log-out.svg';
import MiniCart from './smallComponents/MiniCart';
import { useRouter } from 'next/navigation';
import { API_BASE } from '../../constanst';

const Header = () => {

  const [displayState,setDisplayState] = useState(true);
  const {isLogin,userInformation,logOut} = useContext(AuthContext);

  const router = useRouter();

  const goCart = () => {
    router.push('/cart');
  }

  useEffect(()=> {
    // console.log(userInformation.mobile);
    fetch(`${API_BASE}/auth/david`,{credentials : 'include'});
  },[])

  const menu = (
    <Menu
      items={[
        {
          key: '1',
          type: 'group',
          label: userInformation?
          <div style={{textAlign:"right",display:"block",padding:'5px 10px',background:'rgb(247, 247, 247)',borderRadius:'10px'}} className={styles.label}>
            <span style={{marginRight:'15px'}}>{userInformation.mobile}</span> <UserOutlined />
            </div>
          : <div></div>,
          children: [

            {
              key: '1-2',
              label: <Link legacyBehavior href='/user/mypanel'><a style={{textAlign:"right",display:"block",marginTop:'7px'}} className={styles.label}> 
              <span>پروفایل</span>
              <span className={styles.iconSvg}>
              <img src={profileSvg.src} style={{maxWidth:"23px",marginLeft:'20px'}} alt='svgProfile' />
              </span>
              </a></Link>,
            },
            {
              key: '1-3',
              label: <Link legacyBehavior href='/user/mypanel'><a style={{textAlign:"right",display:"block",marginTop:'7px'}} className={styles.label}>
              <span>محصولات مورد علاقه</span>
              <span className={styles.iconSvg}>
              <img src={faveriteSvg.src} style={{maxWidth:"23px",marginLeft:'20px'}} alt='svgFaverite' />
              </span>  
              </a></Link>,
            },
            {
              key: '1-4',
              label: <div onClick={() => logOut()} style={{textAlign:"right",display:"block",marginTop:'7px'}} className={styles.label}>
              <span>خروج</span>
              <span className={styles.iconSvg}>
              <img src={logoutSvg.src} style={{maxWidth:"23px",marginLeft:'20px'}} alt='svgLogOut' />
              </span>
              </div>,
            },
          ],
        }

      ]}
    />
  );

  const basketTag = (<MiniCart />);

  const menuTag = useRef(null);

  const toggleMenu = () => {
    menuTag.current.classList.toggle(styles.dNone);
    // container.current.classList.toggle(pStyles.blurStyle)
    // console.log(container);
  }

  const hoverBasket = () => {
    setDisplayState(!displayState);
    // console.log(displayState); 
    // setDisplayState('block');
  }

  const LeaveHoverBasket = () => {
    setTimeout(()=> {
      setDisplayState('none');
    },1500)
  }

  const items = [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: '0',
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: '3rd menu item',
      key: '3',
    },
  ];



  return (

    <header className={styles.header}>
        <div className={styles.headerTop}>
            <div className={styles.container + " " + pStyles.jstBetween}>
                <div className={styles.left}>
                {/* href='/user/mypanel' */}
                  <div className={styles.loginDiv}>
                    {
                      isLogin? 
       
                    <Dropdown className={styles.dropDown} menu={menu} trigger={['click']}>
                      <a onClick={(e) => e.preventDefault()}>
                      <Space>
                          <UserOutlined style={{fontSize:'23px'}} />
                          <DownOutlined />
                      </Space>
                      </a>
                    </Dropdown>          
                      :
                      <Link legacyBehavior href='auth/login'><a>ورود / ثبت نام</a></Link>

                    }
                  </div>

                </div>



                <div className={styles.center}>
                    <Search/>
                    <button onClick={toggleMenu} className={styles.toggleBtn}></button>
                </div>

                
                <div className={`${styles.rigth} ${pStyles.jstBetween}`}>
                  <div className={styles.logoDiv}>
                      <img alt='logo' className={styles.logoShop} src={logo.src} />
                    </div>
                </div>

            </div>
        </div>

        <div className={styles.navParent}>
          <div className={styles.container}>
          <div ref={menuTag} className={styles.nav + " " + styles.dNone}>
                <div className={styles.left}>
                    <div className={styles.parrentDropdown + " " + pStyles.jstBetween}>
                    {/* <Dropdown menu={basketTag}> */}
                    {/* <Dropdown menu={menu}> */}
                    <div 
                    onClick={hoverBasket}
                    // onMouseLeave={LeaveHoverBasket}
                    // onClick={goCart}
                     className={styles.parrentIcon + " " + styles.basketIcon}>
                        <div>
                          {
                            displayState?
                            <svg strokeWidth='30' width="32" height="32" viewBox="0 0 36 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1" y="11" width="34" height="28" rx="5" stroke="#162944" strokeWidth="2"/>
                            <path d="M6 16C6 -6.02971 32.0417 -1.86194 29.8715 16" stroke="#162944" strokeWidth="2"/>
                            </svg>
                            : 
                            <button className={styles.closeBtn}><FontAwesomeIcon icon={faClose} /></button>
                          }
                
                        </div>
                    </div>
                  {/* </Dropdown> */}
                      <MiniCart visableProps={displayState} />


                    <div title='محصولات مورد علاقه' className={styles.parrentIcon}>
                        <Link legacyBehavior href='/user'>
                        <a>
                        <HeartOutlined style={{fontSize : "29px"}} />
                        </a>
                        </Link>
                    </div>

                    </div>
                    <div className={styles.loginDiv}>
                      login
                    </div>
                    <ul className={`${styles.ulNav} ${pStyles.jstBetween}`}>
                        <li className={styles.navItem + " " + styles.parrentCategoryMobile}><Link legacyBehavior href='/'><a>دسته بندی ها</a></Link></li>
                        <li className={styles.navItem}><Link legacyBehavior href='/'><a>صفحه اصلی</a></Link></li>
                        <li className={styles.navItem}><Link legacyBehavior href='/'><a>محصولات پر فروش</a></Link></li>
                        <li className={styles.navItem}><Link legacyBehavior href='/'><a>تماس با ما</a></Link></li>
                        <li className={styles.navItem}><Link legacyBehavior href='/'><a>پیگیری محصول</a></Link></li>
                    </ul>
                </div>

                <div className={styles.right}>
                    <div>
                        <h3 className={styles.phoneNumber}>+98 939 981 9093</h3>
                        <span>پاسخگو 24 ساعته</span>
                    </div>
                </div>

            </div>
          </div>
        </div>


    </header>
  )
}

export default Header;
