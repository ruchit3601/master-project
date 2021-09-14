import axios from "axios";

import { GET_RESTAURANT } from "./restaurant.type";

export const getRestaurant = () => async (dispatch) => {
  try {
    const restaurantList = await axios({
      method: "GET",
      url: "http://localhost:5000/restaurant?city=Ahmedabad",
    });
    return dispatch({
      type: GET_RESTAURANT,
      payload: restaurantList.data,
    });
  } catch (error) {
    return dispatch({
      type: "ERROR",
      payload: error,
    });
  }
};