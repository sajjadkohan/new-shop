'use client';
import { useContext, useEffect } from 'react';
import styles from '../../styles/Address.module.css';
import { AutoComplete } from 'antd';
import { AuthContext } from '../../context/AuthCtx';
import { useState } from 'react';
import { UserContext } from '@/context/UserCtx';
import { useRouter } from 'next/navigation';


const FormAddress = () => {

  const {isLogin} = useContext(AuthContext);
  const {changeValue,changeState,getCity,citiesL,errorState,fullAddress} = useContext(UserContext)

  const [stateSt,setStateSt] = useState([
    {
      key : 0,
      value: 'فارس',
      e_name : 'fars'
    },
    {
      key : 1,
      value: 'تهران',
      e_name : 'tehran'
    },
    {
      key : 2,
      value: 'بوشهر',
      e_name : 'bushehr'
    },
    {
      key : 3,
      value: 'مازندران',
      e_name : 'bushehr'
    },
    {
      key : 4,
      value: 'قم',
      e_name : 'bushehr'
    },
  ]);

  const [fullAddressSate,setFullAddressSate] = useState(
    {
    cityName :	"",
    ostanName :	"",
    description :	"",
    lang :	"",             
    lat :	"",             
    mobile :	"",
    name :	"",
    postalCode :	""
    }
    );

    useEffect(() => {
    changeValue(fullAddressSate)
    }, [fullAddressSate]);


  const [stateVal,setStateVal] = useState('');

  let cit = null;

  return (
    <div className={styles.formAddress}>
      
      <div className={styles.rowC+' '+'row w100'}>
        <span className={styles.title+' '+styles.required}>نشانی پستی</span>
        <textarea 
        name='description'
        defaultValue={fullAddress.description}
        value={fullAddress.description}
        onChange={(e) => {changeValue(e)}}
        className={styles.inputC+' '+styles.textAreaC}
        />
      </div>

      <div className={'row w100 dFlex'}>
        <div className='w50'>
        <span className={styles.title+' '+styles.required}>استان</span>
        <input hidden name='ostanName' value={fullAddressSate.ostanName} 
        onChange={(e) => {
          changeValue(e);
          setFullAddressSate({...fullAddressSate,[e.target.name] : e.target.value})
        }} />
        <AutoComplete
            name='ostanName'
            className={styles.inputC1}
            style={{width:'100%',borderRadius:'12px'}}
            options={stateSt}
            placeholder="استان خود را انتخاب کنید"
            onChange={(e)=> {
              cit=e;
              setFullAddressSate({...fullAddressSate,ostanName : e})
              getCity(e);
              // changeValue(e);
              setFullAddressSate({...fullAddressSate,ostanName : e});
            }}
            filterOption={(inputValue, option) =>{
              option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1;
            }
            
            }
        />
        </div>
        <div className='w50'>
        <span className={styles.title+' '+styles.required}>شهر</span>
        <input name='cityName' hidden value={fullAddressSate.cityName}        
        onChange={(e) => {
          changeValue(e);
          setFullAddressSate({...fullAddressSate,[e.target.name] : e.target.value})
        }} /> 
        <AutoComplete
            name='cityName'
            disabled={errorState}
            className={styles.inputC1}
            style={{width:'100%',borderRadius:'12px'}}
            onChange={(e) => {
              setFullAddressSate({...fullAddressSate,cityName : e});
            }}
            options={citiesL}
            placeholder="شهر خود را انتخاب کنید"
            filterOption={(inputValue, option) =>
            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
            }
        />
        </div>
      </div>

      <div className={'row w100 dFlex mt20'}>
        <div className='w50'>
        <span className={styles.title}>پلاک</span>
        <input className={styles.inputC} placeholder='پلاک خود را وارد کنید' />
        </div>

        <div className='w50'>
        <span className={styles.title+' '+styles.required}>کد پستی</span>
          <input 
          name='postalCode'
          onChange={(e) => {changeValue(e)}}
          value={fullAddress.postalCode}
          className={styles.inputC} placeholder='کد پستی' />
        </div>

      </div>

    </div>
  )
}

export default FormAddress
