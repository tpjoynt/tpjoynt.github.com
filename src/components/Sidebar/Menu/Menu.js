// @flow strict
import React from "react";
import { Link } from "gatsby";
import styles from "./Menu.module.scss";

type Props = {
  menu: {
    label: string,
    path: string,
    href: string
  }[]
};

function LinkWrapper(props) {
  const { item } = props;
  if (item.href) {
    return (
      <a
        href={item.href}
        className={styles["menu__list-item-link"]}
        activeClassName={styles["menu__list-item-link--active"]}
      >
        {item.label}
      </a>
    );
  }
  return (
    <Link
      to={item.path}
      className={styles["menu__list-item-link"]}
      activeClassName={styles["menu__list-item-link--active"]}
    >
      {item.label}
    </Link>
  );
}

const Menu = ({ menu }: Props) => (
  <nav className={styles["menu"]}>
    <ul className={styles["menu__list"]}>
      {menu.map(item => (
        <li className={styles["menu__list-item"]} key={item.path}>
          <LinkWrapper item={item} />
        </li>
      ))}
    </ul>
  </nav>
);

export default Menu;
