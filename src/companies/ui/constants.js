import PropTypes from 'prop-types';

export const COMPANY_SHAPE = PropTypes.shape({
  charterCapital: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  lastUpdated: PropTypes.instanceOf(Date),
  foundationDate: PropTypes.string.isRequired,
});
