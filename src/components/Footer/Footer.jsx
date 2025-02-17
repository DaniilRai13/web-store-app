import React from 'react'
import { Link } from 'react-router-dom'
import LOGO from '../../images/logo.png'
import { ROUTES } from '../../utils/routes.js'
import cls from './Footer.module.css'

const Footer = () => {
  return (
    <section className={cls.footer}>
      <div className={cls.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="Stuff" />
        </Link>
      </div>

      <div className={cls.rights}>
        Developed by{" "}
        <a href="/" target="_blank" rel="noreferrer">
          Daniil Rai
        </a>
      </div>

      <div className={cls.socials}>
        <a href="/" target="_blank" rel="noreferrer">
          <svg className="icon">
            <use xlinkHref={`../../../public//sprite.svg#instagram`} />
          </svg>
        </a>

        <a href="/" target="_blank" rel="noreferrer">
          <svg className="icon">
            <use xlinkHref={`../../../public//sprite.svg#facebook`} />
          </svg>
        </a>

        <a href="/" target="_blank" rel="noreferrer">
          <svg className="icon">
            <use xlinkHref={`../../../public//sprite.svg#youtube`} />
          </svg>
        </a>
      </div>
    </section>
  )
}

export default Footer