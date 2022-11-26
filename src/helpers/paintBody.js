export const paintBody = ( parameter ) => {
  switch (parameter) {
    case "Player1":
      document.querySelector("body").style.backgroundColor = "#FD6687";
      break;
    case "Player2":
      document.querySelector("body").style.backgroundColor = "#FFCE67";
      break;
    default:
      document.querySelector("body").style.backgroundColor = "#5C2DD5";
      break;
  }
};
