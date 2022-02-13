import s from './Products.module.css';
import Section from '../Section/Section';
import React from 'react';
const Itemcard = props => {
  return (
    <Section>
      <div className={s.Card__items}>
        <img src={props.img} className={s.Card__image} />
        <div className={s.Card__body}>
          <h4 className={s.Card__title}>{props.title}</h4>
          <h4 className={s.Card__brand}>{props.brand}</h4>
          <p className={s.Card__text}>{props.description}</p>
          <h4 className={s.Card__title}> $ {props.price}</h4> 
          <button className={s.Card__btn}>View More</button>
        </div>
      </div>
    </Section>
  );
};

export default Itemcard;
