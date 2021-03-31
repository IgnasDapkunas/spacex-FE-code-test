export default function reducer(state, action) {
  if (action.type === "FAVOURITE_ADD") {
    const fav = state.data[action.payload.id - 1];
    fav.favourited = action.payload.favourited;

    return {
      ...state,
      favourites: [...state.favourites, fav],
    };
  }
  if (action.type === "FAVOURITE_REMOVE") {
    const dataUnfav = state.data[action.payload.id - 1];
    dataUnfav.favourited = action.payload.favourited;
    return {
      ...state,
      favourites: state.favourites.filter((launch) => launch.flight_number !== action.payload.id),
    };
  }
  if (action.type === "FLIGHT_KEY") {
    return { ...state, flightKey: action.flightKey };
  }
  if (action.type === "LOADING_FALSE") {
    return { ...state, loading: false };
  }
  if (action.type === "API_CALL") {
    return { ...state, data: action.payload.data };
  }
  return state;
}
