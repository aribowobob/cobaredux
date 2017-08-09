const members = (state = [], action) => {
  let objMember;

  switch (action.type) {
    case 'ADD_MEMBER':
      objMember = {
        id: action.id,
        name: action.name,
        desc: action.desc
      };

      return [
        ...state,
        objMember
      ];

    case 'SHOW_DETAIL':
      objMember = state.filter((obj) => {
        return obj.id === action.id;
      })

      return state;

    case 'DELETE_MEMBER':
      objMember = state.filter((obj) => {
        return obj.id !== action.id
      });

      return objMember;
    default:
      return state;
  }
}

export default members;
