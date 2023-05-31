'use client';
import { useEffect, useState } from 'react';
import styles from '../../styles/Address.module.css';
import AddressComponent from './AddressComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { Button, Modal } from 'antd';
import SimpleMap from './NeshanMap';
import { useContext } from 'react';
import { newCartCTX } from '../../context/NewCartCtx';
import FormAddress from './FormAddress';
import {UserContext} from '../../context/UserCtx';


const AddressPage = () => {

  // const {addressState} = useContext(newCartCTX);
  const {fullAddress} = useContext(UserContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormModalOpen, setIFormsModalOpen] = useState(false);

  // useEffect(() => {
  // console.log(fullAddress);
  // }, [fullAddress])

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    setIFormsModalOpen(true)
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };


  const showFormModal = () => {
    setIFormsModalOpen(true);
  };
  const handleOkFormModal = () => {
    setIFormsModalOpen(false);
  };
  const handleCancelFormModal = () => {
    setIFormsModalOpen(false);
  };

  return (
    <div className={styles.addressPage+' '+'borderC'+' '+'addressPage'}>
      
        <div className={styles.head}>
            <h1 className={styles.title}>آدرس ها</h1>
            <button onClick={showModal} className={styles.addAddress+' '+'dFlex'}>
                <span className={styles.icon}><FontAwesomeIcon icon={faPlusCircle} /></span>
                <span className={styles.text}>ثبت آدرس جدید</span>
            </button>
            <Modal 
            style={{width:'700px!important'}} 
            title="انتخاب آدرس" 
            open={isModalOpen} 
            footer={false} 
            cancelText='لغو'
            onOk={handleOk} 
            onCancel={handleCancel}>
           <SimpleMap/>
           <div className={styles.footerModal}>{fullAddress.description}</div>
           {
            fullAddress.description?
            <button className='mt10 orderBtn' onClick={handleOk}>تایید و ادامه</button>
            :
            <button className='mt10 orderBtn disabledBtn' disabled>تایید و ادامه</button>
           }

            </Modal>

            <Modal style={{width:'700px!important'}} title="انتخاب آدرس" open={isFormModalOpen} footer={false} cancelText='لغو' onOk={handleOkFormModal} onCancel={handleCancelFormModal}>
            <FormAddress/>
            <div className={styles.footerModal}>
            <button className='mt10 w100 orderBtn' onClick={handleOkFormModal}>ثبت آدرس</button>
            </div>
            
            </Modal>
        </div>

        <div className={styles.content}>
            <div className={styles.addressCo_Parent}>
            <AddressComponent/>
            </div>
            <div className={styles.addressCo_Parent}>
            <AddressComponent/>
            </div>
            <div className={styles.addressCo_Parent}>
            <AddressComponent/>
            </div>
        </div>
    </div>
  )
}

export default AddressPage