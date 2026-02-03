import React from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import cx from "classnames";
import styles from "./modal.module.css";

type Props = {
  isVisible: boolean;
  onClose: () => void;
  className?: string;
  overlayClassName?: string;
  children: React.ReactNode;
};

const Modal = ({
  isVisible,
  onClose,
  children,
  className,
  overlayClassName,
}: Props) => {
  if (!isVisible) return null;
  return createPortal(
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={cx(styles.overlay, overlayClassName)}
          onClick={() => {
            onClose();
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.2 } }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
          <motion.div
            className={styles.modalPosition}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.2 } }}
            exit={{ opacity: 0, y: 30, transition: { duration: 0.2 } }}
          >
            <motion.div className={cx(styles.modalContainer)}>
              <div
                className={cx(styles.modal, className)}
                onClick={(e) => e.stopPropagation()}
              >
                {children}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default Modal;
