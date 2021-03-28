export default function reducer(state, action) {
  if (action.type === "FLIGHT_KEY") {
    return { ...state, flightKey: action.flightKey };
  }
  if (action.type === "LOADING_FALSE") {
    return { ...state, loading: false };
  }
  if (action.type === "API_CALL") {
    const { data } = action;
    return { ...state, data: data };
  }
  return state;
}
