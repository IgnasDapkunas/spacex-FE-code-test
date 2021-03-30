export default function reducer(state, action) {
  if (action.type === "FAVOURITE_ADD") {
    const fav = state.data[action.payload.id - 1];
    fav.favourited = action.payload.favourited;
    const dataFav = state.data[action.payload.id - 1];
    dataFav.favourited = action.payload.favourited;

    return {
      ...state,
      favourites: [...state.favourites, fav],
      data: [...state.data, dataFav],
    };
  }
  if (action.type === "FAVOURITE_REMOVE") {
    const unfav = state.data[action.payload.id - 1];
    unfav.favourited = action.payload.favourited;
    const dataUnfav = state.data[action.payload.id - 1];
    dataUnfav.favourited = action.payload.favourited;
    return {
      ...state,
      favourites: state.favourites.filter((launch) => launch.flight_number !== action.payload.id),
      data: [...state.data, dataUnfav],
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
