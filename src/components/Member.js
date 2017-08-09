import React from 'react';
import PropTypes from 'prop-types';

const Member = ({ onClickDetail, onClickDelete, name }) => (
  <tr>
    <td>
      {name}
    </td>
    <td>
      <button onClick={onClickDetail}>Rincian</button>
    </td>
    <td>
      <button onClick={onClickDelete}>Hapus</button>
    </td>
  </tr>
);

Member.propTypes = {
  onClickDetail: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

export default Member;
