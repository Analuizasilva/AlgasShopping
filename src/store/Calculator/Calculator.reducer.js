export default function (state = 0, action) {
  switch (action.type) {
    case "Sum":
      return action.payload[0] + action.payload[1];
    case "Subtract":
      return action.payload[0] - action.payload[1];
    default:
      return state;
  }
}
