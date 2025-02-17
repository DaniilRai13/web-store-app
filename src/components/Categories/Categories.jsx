import React from 'react'
import { Link } from 'react-router-dom';
import cls from './Categories.module.css'
import {ROUTES} from '../../utils/routes'

const Categories = ({ title, categories = [], amount }) => {
  const list = categories.filter((_, i) => i < amount);

  return (
    <section className={cls.section}>
      <h2>{title}</h2>

      <div className={cls.list}>
        {list.map(({ id, name, image }) => (
          <Link to={`${ROUTES.CATEGORIES}/${id}`} key={id} className={cls.item}>
            <div
              className={cls.image}
              style={{ backgroundImage: `url(${image})` }}
            />
            <h3 className={cls.title}>{name}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories