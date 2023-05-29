'use client';
import React, { useState } from 'react'
// import { Rating } from 'react-simple-star-rating';
import StarRatings from 'react-star-ratings';
import styles from '../../styles/Product.module.css';
import dynamic from 'next/dynamic';
// const StarRatings = dynamic(import('react-star-ratings'),{ ssr: false })
const RateDisplay = (props) => {

  const [countRating, setCountRating] = useState(0);

  const changeRating =(newRating,name) => {
    setCountRating(newRating);
    }
    
    const render = () => {
    //rating=2;
    return(
    <StarRatings
    rating={this.state.rating}
    starRatedColor="blue"
    changeRating={this.changeRating}
    numberOfStars={6}
    name='rating'
    />
    );
    }

  
  return (

    <div className={styles.RateDisplayParent}>
    <StarRatings
      rating={props.rateValue}
      starDimension="30px"
      starSpacing="1px"
      starRatedColor="#ffbf00"
    />
      <span className={styles.rateValue}>{props.rateValue}</span>
    </div>

  )
}

export default RateDisplay;
