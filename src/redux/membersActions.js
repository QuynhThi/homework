export const membersInitialState = {
  members: {
    list: [{ id: 1, name: "Thi 1" }],
    detail: {},
  },
};

export const membersActions = {
  FETCH_MEMBERS: (state) => ({
    members: {
      list: [{ id: 1, name: "Thi 1" }],
    },
  }),
  ADD_MEMBER: (state) => ({
    members: {
      list: [
        ...state.members.list,
        {
          id: state.members.list.length + 1,
          name: `Thi ${state.members.list.length + 1}`,
        },
      ],
    },
  }),
};
