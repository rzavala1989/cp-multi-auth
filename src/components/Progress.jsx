import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from '../utils/withRouter';

const Progress = ({ location: { pathname } }) => {
  const isFirstStep = pathname === '/';
  const isSecondStep = pathname === '/second';
  const isThirdStep = pathname === '/third';

  return (
    <>
      <div className='steps'>
        <div className={`${isFirstStep ? 'step active' : 'step'}`}>
          <div>1</div>
          <div>
            {isSecondStep || isThirdStep ? (
              <Link to='/'>Step 1</Link>
            ) : (
              'Step 1'
            )}
          </div>
        </div>
        <div className={`${isSecondStep ? 'step active' : 'step'}`}>
          <div>2</div>
          <div>
            {isFirstStep || isThirdStep ? (
              <Link to='/second'>Step 2</Link>
            ) : (
              'Step 2'
            )}
          </div>
        </div>
        <div className={`${isThirdStep ? 'step active' : 'step'}`}>
          <div>3</div>
          <div>
            {isSecondStep || isFirstStep ? (
              <Link to='/third'>Step 3</Link>
            ) : (
              'Step 3'
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(Progress);
