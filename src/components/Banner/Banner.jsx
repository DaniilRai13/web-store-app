import React from 'react'
import cls from '../Home/Home.module.css'
import bannerImg from '../../images/banner.png'

const Banner = () => {
  return (
    <section className={cls.banner}>
      <div className={cls.left}>
        <p className={cls.content}>
          NEW YEAR
          <span>SALE</span>
        </p>
        <button className={cls.more}>See more</button>
      </div>

      <div
        className={cls.right}
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <p className={cls.discount}>
          save up to <span>50%</span> off
        </p>
      </div>
    </section>
  )
}

export default Banner