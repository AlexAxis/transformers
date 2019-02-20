import axios from 'axios'
const URL = 'http://localhost:3000/db'

/**
 * This funciton is responsible to fetch(axios!?) the data 
 */
export const fetch = () => {

    return (dispatch, getState) => {
        // console.log(getState().todo);
        const request = axios.get(`${URL}`)
            .then(resp => dispatch({ type: 'TRANSFORMER_FETCH', payload: resp.data }))
    }
}