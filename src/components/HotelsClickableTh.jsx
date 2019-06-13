import React from 'react';
import PropTypes from 'prop-types';

const HotelsClickableTh = ({
  label, sortKey, isSelected, onSort,
}) => (
  <th className="hotels-clickable-th" onClick={() => onSort(sortKey)}>
    {label}
    {isSelected ? '▲' : ''}
  </th>
);

HotelsClickableTh.propTypes = {
  label: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  sortKey: PropTypes.string.isRequired,
  onSort: PropTypes.func.isRequired,
};

export default HotelsClickableTh;
