const INITIAL_STATE = {
  list: []
};

export default function reducers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "@contact/SET_CONTACT_LIST_SUCCESS":
      return {
        ...state,
        list: action.payload,
      };

    default:
      return state;
  }
}
