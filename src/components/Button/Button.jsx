import PropTypes from 'prop-types';


const Button = ({ onClick, children, status }) => {
  return (
    <div className='loader_wrapper'>
      <div className='loader'>{status === 'pending' && children()}</div>
      {status === 'resolved' && (
        <button className='Button' type="button" onClick={onClick}>
          Load more
        </button>
      )}
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
};

export default Button;