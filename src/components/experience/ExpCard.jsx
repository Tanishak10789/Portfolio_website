import './Experience.css'
import PropTypes from 'prop-types'; // Import PropTypes
import Bubble from './Bubble';
import { GiCrystalGrowth } from "react-icons/gi";

const ExpCard = ({heading, subHeading, timeSpan, desc1, desc2}) => {
    return (
        <div className="expCard">
            <GiCrystalGrowth className='growthIcon' />
            <p className='expHeading'>{heading}</p>
            <p className="expSubHeading">{subHeading}</p>
            <Bubble str={timeSpan} />
            <p className="expDescription">{desc1}</p>
            <p className="expDescription">{desc2}</p>
        </div>
    )
}

ExpCard.propTypes = {
    heading: PropTypes.string.isRequired, // Heading (required)
    subHeading: PropTypes.string.isRequired, // Sub-heading (required)
    timeSpan: PropTypes.string.isRequired, // Time span (required)
    desc1: PropTypes.string, // Description line 1 (required)
    desc2: PropTypes.string // Description line 2 (required)
};

export default ExpCard