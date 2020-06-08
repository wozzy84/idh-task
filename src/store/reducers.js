function setSlide(state = null, action) {
  switch (action.type) {
    case "SET_SLIDE":
      return action.id;
    default:
      return state;
  }
}
function isModalOpen(state = false, action) {
  switch (action.type) {
    case "OPEN_MODAL":
      return action.open;
    default:
      return state;
  }
}

export { setSlide, isModalOpen };
