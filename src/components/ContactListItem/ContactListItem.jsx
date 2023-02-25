import PropTypes from 'prop-types';

export const ContactListItem = ({ id, name, number }) => {
  return (
    <>
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>
    </>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
