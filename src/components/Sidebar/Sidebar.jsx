import React from 'react'
import { useSelector } from 'react-redux'

import cls from './Sidebar.module.css'
import SidebarLink from './SidebarLink/SidebarLink'

const Sidebar = () => {
  const { list } = useSelector(({ categories }) => categories)

  return (
    <section className={cls.sidebar}>
      <div className={cls.title}>CATIGORIES</div>
      <nav >
        <ul className={cls.menu}>
          {list
            .filter((item, index, self) =>
              index === self.findIndex((t) => t.name === item.name))
            .slice(0, 9)
            .map(({ id, name }) => (
              <SidebarLink key={id} id={id} name={name} />
            ))
          }
        </ul>
      </nav>
      <div className={cls.footer}>
        <a href="/help" target='_blank' className={cls.link}>Help</a>
        <a href="/terms" target='_blank' className={cls.link}>Terms & Conditions</a>
      </div>
    </section>
  )
}

export default Sidebar