import { useState } from "react";
import MenuList from "./MenuList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggleChildren(getCurrentTitle) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentTitle]: !displayCurrentChildren[getCurrentTitle],
    });
  }

  console.log(displayCurrentChildren);

  return (
    <li>
      <div className="menu-item">
        <p>{item.title}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleChildren(item.title)}>
            {displayCurrentChildren[item.title] ? (
              <FontAwesomeIcon color="#fff" size={25} icon={faMinus} />
            ) : (
              <FontAwesomeIcon color="#fff" size={25} icon={faPlus} />
            )}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.title] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
