import { useState } from "react";

import styles from "./accordion.module.css";

type Props = {
  title: string;
  children: React.ReactNode;
};

const AccordionItem = ({ title, children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((state) => !state);
  };
  return (
    <div>
      <button onClick={handleClick}>{title}</button>
      <div className={styles["accordion-content"]}>
        {isOpen && <p>{children}</p>}
      </div>
    </div>
  );
};

export default AccordionItem;
