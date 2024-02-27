import { useState } from "react";
import MenuList from "./MenuList";

export default function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  return (
    <li className="menu-item-container">
      <div style={{ display: "flex", gap: "20px" }}>
        <p>{item.title}</p>
        {item && item.children && item.children.length ? <span>+</span> : null}
      </div>
      {item && item.children && item.children.length > 0 ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
