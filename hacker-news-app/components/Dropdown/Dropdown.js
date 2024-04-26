/**
 * Component: Dropdown
 * Description: A NextJS component that renders a simple UI dropdown element
 */
import { useState } from "react";
import styles from "../../styles/Dropdown.module.css";

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const Stories = ["Ask", "Best", "Job", "New", "Show", "Top", "Leaders"];

  return (
    <>
      <div className={`${styles.dropdown} ${open ? styles.open : ""}`}>
        <h3 className={styles.dropdownTitle} onClick={() => setOpen(!open)}>
          Select Story
        </h3>
        {/* when 'open' is set to true, the dropdown menu is displayed */}
        {open && (
          <div className={styles.dropdownContent}>
            <ul>
              {Stories.map((story, idx) => (
                <li key={idx}>
                  <a
                    href={`/${story.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                  >
                    {story}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Dropdown;
