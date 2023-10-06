

/* SELECTORS */
export const getSeats = ({ seats }) => seats.data;

/* ACTIONS */

// action name creator

/* THUNKS */


/* INITIAL STATE */

const initialState = {
  data: [],
  requests: {},
};

/* REDUCER */

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}