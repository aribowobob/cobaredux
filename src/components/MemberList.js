import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Member from './Member';
import axios from 'axios';
import { deleteMember } from '../actions';

let onDeleteClick = (id, dispatch) => (
  axios({
    method: 'delete',
    url: 'https://jsonplaceholder.typicode.com/users/' + id
  }).then(function (data) {
    return dispatch(deleteMember(id));
  })
);

let MemberList = ({ members, onMemberClick, dispatch }) => (
  <table>
    <thead>
      <tr>
        <th>Nama</th>
        <th>#</th>
        <th>!</th>
      </tr>
    </thead>
    <tbody>
    {members.map(member =>
      <Member
        key={member.id}
        {...member}
        onClickDetail={() => onMemberClick(member.id)}
        onClickDelete={() => onDeleteClick(member.id, dispatch)}
      />
    )}
    </tbody>
  </table>
);

MemberList.propTypes = {
  members: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onMemberClick: PropTypes.func.isRequired
};

MemberList = connect()(MemberList);

export default MemberList;
