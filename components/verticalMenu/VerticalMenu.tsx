'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { styles } from './VerticalMenu.css'

const VerticalMenu = () => {

  const navItems = [
    { title: 'Dashboard',
      href: '/'
    },
    { title: 'Groups',
      href: '/groups'
    }
  ]
  const currentPath = usePathname()
  const date = new Date().toISOString().split('T')[0]


  return (
    <div className={styles.container}>
      <div className={styles.date}>{ date }</div>

      <ul className={styles.list}>
        {navItems.map((content, index) => (
          <li key={index}>
            <Link href={content.href} className={`${styles.link} ${content.href === currentPath ? styles.linkActive : ''}`}>
                {content.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VerticalMenu;

