import React from 'react'
import cls from '../Home/Home.module.css'
import BG from '../../images/computer.png'

const Poster = () => {
  return (
    <section className={cls.home}>
      <div className={cls.title}>BIG SALE 20%</div>
      <div className={cls.product}>
        <div className={cls.text}>
          <div className={cls.subtitle}>the bestsellter 2022</div>
          <h1 className={cls.head}> LENNON r2d2 with NVIDIA 5090TI</h1>
          <button className={cls.button}>Shop now</button>
        </div>
        <div className={cls.image}>
          <img src={BG} alt="bg" />
        </div>
      </div>
    </section>
  )
}

export default Poster