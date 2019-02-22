import axios from 'axios'
const URL = 'http://localhost:3000/db'

/**
 * This funciton is responsible to fetch the data 
 */
export const fetch = () => {

    return (dispatch, getState) => {
        // console.log(getState().todo);
        const request = axios.get(`${URL}`)
            .then(resp => dispatch({ type: 'TRANSFORMER_FETCH', payload: resp.data }))
    }
}

/**
 * Action that will have the reference to the reducer that changes the value of the variable 'name' in the store
 *  according to what was introduced by the user in the input element 
 */
export const changeName = event => ({
    type: 'NAME_CHANGE',
    payload: event.target.value
})

