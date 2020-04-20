import * as actionTypes from "./actionTypes";

export const category = (category) => {
  return {
    type: actionTypes.CATEGORY,
    category: category,
  };
};

export const addMyList = (title, body, image, duration, category, rate) => {
  return (dispatch) => {
    dispatch(addMyListSuccess(title, body, image, duration, category, rate));
    dispatch(addMyListNumber());
    dispatch(addButtonToggle(title));
  };
};
export const addMyListNumber = () => {
  return {
    type: actionTypes.ADDMYLISTNUMBER,
  };
};
export const addMyListSuccess = (
  title,
  body,
  image,
  duration,
  category,
  rate
) => {
  return {
    type: actionTypes.ADDMYLISTSUCCESS,
    title: title,
    body: body,
    image: image,
    duration: duration,
    category: category,
    rate: rate,
  };
};

export const addButtonToggle = (title) => {
  return {
    type: actionTypes.ADDBUTTONTOGGLE,
    title: title,
  };
};

export const removeMyList = (title) => {
  return (dispatch) => {
    dispatch(removeMyListSuccess(title));
    dispatch(removeButtonToggle(title));
    dispatch(removeMyListNumber());
  };
};

export const removeMyListSuccess = (title) => {
  return {
    type: actionTypes.REMOVEMYLISTSUCCESS,
    title: title,
  };
};

export const removeButtonToggle = (title) => {
  console.log(title);

  return {
    type: actionTypes.REMOVEBUTTONTOGGLE,
    title: title,
  };
};

export const removeMyListNumber = () => {
  return {
    type: actionTypes.REMOVEMYLISTNUMBER,
  };
};

export const searchDivToggle = (booleanToggle) => {
  return {
    type: actionTypes.SEARCHDIVTOGGLE,
    booleanToggle: booleanToggle,
  };
};

export const modalToggle = () => {
  return {
    type: actionTypes.MODALTOGGLE,
  };
};

export const jsonArrayConverter = () => {
  return (dispatch) => {
    /* This function receive the json object and convert itno array */
    const jsonFile = require("../data/movies.json");
    const jsonFileArray = Object.keys(jsonFile).map((key, value) => {
      return jsonFile[key];
    });
    console.log("DISPATCJ JSON ", jsonFileArray);
    dispatch(jsonArrayConverterSuccess(jsonFileArray));
    /** we pass the (json array) to jsonArrayConverterSuccess function */
  };
};

export const jsonArrayConverterSuccess = (jsonArray) => {
  /** and here finally we pass the json array to the reducer with action name jsonArray */
  return {
    type: actionTypes.JSONARRAYCONVERTERSUCCESS,
    jsonArray: jsonArray,
  };
};
