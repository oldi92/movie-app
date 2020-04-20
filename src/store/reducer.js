import * as actionTypes from "./actionTypes";

const initialState = {
  category: "",
  myList: 0,
  myListMovies: [],
  buttonToggle: [],
  searchDivToggle: false,
  modalToggle: false,
  jsonArray: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CATEGORY:
      return {
        ...state,
        category: action.category,
      };
    case actionTypes.ADDMYLISTSUCCESS:
      return {
        ...state,
        myListMovies: state.myListMovies.concat({
          title: action.title,
          body: action.body,
          image: action.image,
          duration: action.duration,
          category: action.category,
          rate: action.rate,
        }),
      };
    case actionTypes.ADDMYLISTNUMBER:
      return {
        ...state,
        myList: state.myList + 1,
      };
    case actionTypes.ADDBUTTONTOGGLE:
      return {
        ...state,
        buttonToggle: state.buttonToggle.concat(action.title),
      };
    case actionTypes.REMOVEMYLISTSUCCESS:
      return {
        ...state,
        myListMovies: state.myListMovies.filter(
          (element) => element.title !== action.title
        ),
      };
    case actionTypes.REMOVEBUTTONTOGGLE:
      return {
        ...state,
        buttonToggle: state.buttonToggle.filter(
          (element) => element !== action.title
        ),
      };
    case actionTypes.REMOVEMYLISTNUMBER:
      return {
        ...state,
        myList: state.myList - 1,
      };
    case actionTypes.SEARCHDIVTOGGLE:
      return {
        ...state,
        searchDivToggle: action.booleanToggle,
      };
    case actionTypes.MODALTOGGLE:
      return {
        ...state,
        modalToggle: !state.modalToggle,
      };
    case actionTypes.JSONARRAYCONVERTERSUCCESS:
      return {
        ...state,
        jsonArray: action.jsonArray,
      };
    default:
      return state;
  }
};

export default reducer;
