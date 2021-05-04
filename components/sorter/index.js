import { useState, useEffect } from "react";

import styles from "./Sorter.module.css";

const Sorter = ({ toggleBy = ['storlek', 'pris'], getSortValue }) => {
  const [toggled, setToggled] = useState('');

  useEffect(() => {
    setToggled(toggled);
  }, [toggled]);

  const handleToggle = (e) => {
    e.stopPropagation();
    if (toggled !== e.target.name) {
      setToggled(e.target.name);
      getSortValue(e.target.name)
    } else if (toggled === e.target.name && toggled !== '') {
      setToggled('');
      getSortValue('')
    }
  };

  return (
    <div className={styles.sorter}>
      <form className={styles.sorterForm}>
        <formfield className={styles.sorterFormField}>Sortera</formfield>
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
              <label htmlFor={`toggle${item}`} value={`Sortera på ${item}`}>
                <input
                  id={`toggle${item}`}
                  onChange={(e) => handleToggle(e)}
                  checked={toggled === item}
                  type="checkbox"
                  value={item}
                  name={item}
                  className='visually-hidden'
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
