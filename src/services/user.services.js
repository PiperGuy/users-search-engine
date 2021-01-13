import {USER_FETCH_URL} from "../constants/constants"

export const getInitialUserList = async () =>{
    const requestOptions = {
        method: 'GET',
        headers: {
         'Content-Type': 'application/json',
        },
    };
   return  fetch(USER_FETCH_URL, requestOptions).then(data=> data.json())
}
