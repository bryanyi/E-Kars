export default function (state = null, action) {
  switch (action.type) {
    case "SEARCH_FILTER":
      return action.payload;
    default:
      return state;
  }
}
