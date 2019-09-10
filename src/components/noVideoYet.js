import React, { Component } from 'react';

export default class noVideoYet extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='noSearchingYet col-lg-12 text-center mt-4'>
            <p>I will get the videos when you start searching !</p>
            <img
              alt='roboot'
              src={process.env.PUBLIC_URL + '/images/gif/robot.gif'}
            />
          </div>
        </div>
      </div>
    );
  }
}
