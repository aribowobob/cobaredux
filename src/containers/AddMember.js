import React from 'react';
import { connect } from 'react-redux';
import { addNewMember } from '../actions';

let AddMember = ({ dispatch }) => {
  let name, desc;

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        if (!name.value.trim() || !desc.value.trim()) {
          return;
        }
        dispatch(addNewMember(name.value, desc.value));
        name.value = '';
        desc.value = '';
      }}>
        <input placeholder="Nama.." ref={node => {
          name = node
        }}/>
        <input placeholder="Keterangan.." ref={node => {
          desc = node
        }} />
        <button type="submit">
          Add New Member
        </button>
      </form>
    </div>
  )
};
AddMember = connect()(AddMember);

export default AddMember;
