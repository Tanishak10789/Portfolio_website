import './Experience.css'
import PropTypes from 'prop-types';

const Bubble = ({str}) => {
  return (
    <span className='expTime'>{str}</span>
  )
}

Bubble.propTypes = {
    str: PropTypes.string.isRequired, // Validate that 'str' prop is a required string
  };
  

export default Bubble