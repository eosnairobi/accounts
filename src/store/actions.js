module.exports = {
  HANDLE_INPUT_CHANGE: "HANDLE_INPUT_CHANGE",
  SHOW_MODAL: "SHOW_MODAL",
  SHOW_KEYGEN: "SHOW_KEYGEN",

  handleInputChange: function(event) {
    return {
      type: this.HANDLE_INPUT_CHANGE,
      data: { name: event.target.name, value: event.target.value }
    };
  }
};
