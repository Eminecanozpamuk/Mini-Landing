import { useState } from "react";
import styles from "./Accordion.module.scss";

type AccordionItemProps = {
  question: string;
  answer: string;
};

export default function AccordionItem({
  question,
  answer,
}: AccordionItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.item}>
      <button
        className={styles.trigger}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {question}
      </button>

      {open && <p className={styles.content}>{answer}</p>}
    </div>
  );
}
