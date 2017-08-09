let nextMemberId = 1;
export const addNewMember = (memberName, memberDesc) => ({
  type: 'ADD_MEMBER',
  id: nextMemberId++,
  name: memberName,
  desc: memberDesc
});

export const showDetail = (id) => ({
  type: 'SHOW_DETAIL',
  id: id
});

export const deleteMember = (id) => ({
  type: 'DELETE_MEMBER',
  id: id
});
