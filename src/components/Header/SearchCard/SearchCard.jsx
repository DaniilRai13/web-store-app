import React from 'react'
import cls from '../Header.module.css'
import { Link } from 'react-router-dom'
const SearchCard = ({ title, images, id, handleClick }) => {
  return (
    <Link onClick={() => handleClick()} className={cls.item} to={`/products/${id}`}>
      <div
        className={cls.image}
        style={{ backgroundImage: `url(${images[0]})` }}
      />
      <div className={cls.title}>{title}</div>
    </Link >
  )
}

export default SearchCard