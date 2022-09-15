import React, {useState} from 'react';
import Modal from 'react-modal';
import './showcasepopup.css';
import { AnimatePresence, motion } from 'framer-motion';
import ShowcaseModal from './ShowcaseModal';


Modal.setAppElement('#root');

const ShowcasePopup = ({buttonText, title, text, alt, img, pdf, mp4}) => {

  const [modalOpen, setModalOpen] = useState(false);

  const close = () => {
    document.body.style.overflow = 'unset';
    setModalOpen(false);
  } 
  const open = () => {
    document.body.style.overflow = 'hidden';
    setModalOpen(true);
  }

  return (
    <div>
    
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {modalOpen && <ShowcaseModal modalOpen={modalOpen} handleClose={close} title={title} text={text} alt={alt} img={img} pdf={pdf} mp4={mp4} />}
      </AnimatePresence>

      <motion.button
        className="william__showcase-button"
        onClick={() => (modalOpen ? close() : open())}>
        {buttonText}
      </motion.button>

    </div>
  );
};

export default ShowcasePopup

