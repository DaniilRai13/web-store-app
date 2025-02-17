import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useGetProductsQuery } from '../../features/api/apiSlice.js'
import { toggleForm } from '../../features/user/userSlice.js'
import AVATAR from '../../images/avatar.jpg'
import LOGO from '../../images/logo.png'
import { ROUTES } from '../../utils/routes.js'
import cls from './Header.module.css'
import SearchCard from './SearchCard/SearchCard.jsx'

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { currentUser, cart } = useSelector(({ user }) => user)

  const [searchValue, setSearchValue] = useState('')
  const [values, setValues] = useState({ name: "Guest", avatar: AVATAR })

  const { data, isLoading } = useGetProductsQuery({ title: searchValue })

  const handleClick = () => {
    if (!currentUser) {
      dispatch(toggleForm(true))
    } else {
      navigate(ROUTES.PROFILE)
    }
  }

  useEffect(() => {
    if (!currentUser) return
    setValues(currentUser)
  }, [currentUser])

  const handleSearch = ({ target: { value } }) => {
    setSearchValue(value)
  }

  const handleClearSearchValue = () => {
    setSearchValue('')
  }

  return (
    <div className={cls.header}>
      <div className={cls.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt='Stuff' />
        </Link>
      </div>
      <div className={cls.info}>
        <div className={cls.user} onClick={handleClick}>
          <div
            className={cls.avatar}
            style={{ backgroundImage: `url(${values.avatar})` }} />
          <div className={cls.username}>{values.name}</div>
        </div>
        <form className={cls.form}>
          <div className={cls.icon}>
            <svg className={cls.icon}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`} />
            </svg>
          </div>
          <div className={cls.input}>
            <input
              type='search'
              name='search'
              placeholder='Search for anything...'
              autoComplete='off'
              onChange={handleSearch}
              value={searchValue}
            ></input>
          </div>
          {searchValue && (

            <div className={cls.box}>
              {isLoading
                ? 'Loading...'
                : !data.length
                  ? 'No results'
                  : data.map(({ title, images, id }) => (
                    <SearchCard handleClick={handleClearSearchValue} key={id} title={title} images={images} id={id} />
                  ))
              }
            </div>

          )}

        </form>
        <div className={cls.account}>
          <Link to={ROUTES.HOME} className={cls.favourites}>
            <svg className={cls['icon-fav']}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`} />
            </svg>
          </Link>

          <Link to={ROUTES.CART} className={cls.cart}>
            <svg className={cls['icon-cart']} >
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`} />
            </svg>
            <span className={cls.count}>{cart.length}</span>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default Header