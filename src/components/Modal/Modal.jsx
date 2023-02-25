import { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

export const Modal = ({ children, onClose }) => {
  const memo = useCallback(handelKeyClose, [handelKeyClose]);

  useEffect(() => {
    window.addEventListener('keydown', memo);

    return () => {
      window.removeEventListener('keydown', memo);
    };
  }, [memo]);

  function handelKeyClose(evt) {
    if (evt.code === 'Escape') {
      onClose();
    }
  }

  function handelClose(evt) {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  }
  return (
    <div onClick={handelClose}>
      <div>{children}</div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
};
