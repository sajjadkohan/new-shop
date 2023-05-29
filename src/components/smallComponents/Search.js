'use client';
import React, { useEffect, useState } from 'react'

import Icon, { SearchOutlined } from '@ant-design/icons';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

// styles
import styles from "../../styles/Search.module.css";
// import 'antd/dist/antd.css';



const itemss = [
  {
    label: <div>1st menu item</div>,
    key: '0',
  },
  {
    label: <div>2nd menu item</div>,
    key: '1',
  }
];


const Search = () => {

const [searchState , setSearchState] = useState();

const handler = (e) => {
    setSearchState(e.target.value);
}

const handleChange = () => {
  console.log('s');
}
    
  return (
    <div className={styles.parrentDiv}>

        <input placeholder='محصول مورد نظر خود را جست و جو کنید . . .' className={styles.inputSearch} onChange={handler} value={searchState} />
        <span className={styles.iconSearch}> <SearchOutlined /> </span>
    </div>

  )
}

export default Search