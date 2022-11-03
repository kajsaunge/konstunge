import { useState, useEffect } from "react";

import styles from "./Sorter.module.css";

const Sorter = ({ toggleBy = ["storlek", "pris", "status"], getSortValue }) => {
  const [toggled, setToggled] = useState("status");

  useEffect(() => {
    setToggled(toggled);
  }, [toggled]);

  const handleToggle = (e) => {
    e.stopPropagation();
    if (toggled !== e.target.name) {
      setToggled(e.target.name);
      getSortValue(e.target.name);
    } else if (toggled === e.target.name && toggled !== "") {
      setToggled("");
      getSortValue("");
    }
  };

  return (
    <div className={styles.sorter}>
      <form className={styles.sorterForm}>
        <ul className={styles.sorterList}>
          {toggleBy.map((item, i) => (
            <li
              key={i}
              className={
                toggled === item
                  ? styles.sorterListItemToggled
                  : styles.sorterListItem
              }
            >
              <label
                className={styles.sorterItemLabel}
                htmlFor={`toggle${item}`}
                value={`Sortera på ${item}`}
              >
                <input
                  id={`toggle${item}`}
                  onChange={(e) => handleToggle(e)}
                  checked={toggled === item}
                  type="checkbox"
                  value={item}
                  name={item}
                  className="visually-hidden"
                />
                {item}
              </label>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default Sorter;
