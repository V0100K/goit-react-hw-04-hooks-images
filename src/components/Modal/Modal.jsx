import PropTypes from 'prop-types';
import { useEffect } from 'react';

const Modal = ({ ModalCloseClickHandler, ModalCloseKeyHandler, largePic }) => {
  useEffect(() => {
    window.addEventListener('keydown', ModalCloseKeyHandler);

  }, );

  useEffect(() => {
    return () => {
      window.removeEventListener('keydown', ModalCloseKeyHandler);
    };

  }, );

  return (
    <div className="Overlay" onClick={ModalCloseClickHandler}>
      <div className="Modal">
        <img src={largePic} alt="Large pic" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  ModalCloseClickHandler: PropTypes.func.isRequired,
  ModalCloseKeyHandler: PropTypes.func.isRequired,
  largePic: PropTypes.string.isRequired,
};

export default Modal;