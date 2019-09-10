import React from 'react';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const LeftArrow = props => {
  return (
    <div className='backArrow arrow' onClick={props.goToPrevSlide}>
      <FontAwesomeIcon className='arrowLeft' icon={faChevronLeft} />
    </div>
  );
};

export default LeftArrow;
