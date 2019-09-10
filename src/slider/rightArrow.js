import React from 'react';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const RightArrow = props => {
  return (
    <div className='nextArrow arrow' onClick={props.goToNextSlide}>
      <FontAwesomeIcon className='arrowRight' icon={faChevronRight} />
    </div>
  );
};

export default RightArrow;
