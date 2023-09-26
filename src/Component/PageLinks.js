import React from "react";
import { pageLinks } from "../data";

const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id="nav-links">
      {pageLinks.map((Link) => {
        return (
          <li key={Link.id}>
            <a href={Link.href} className={itemClass}>
              {Link.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default PageLinks;
