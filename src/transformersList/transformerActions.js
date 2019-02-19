import axios from 'axios'
const URL = 'http://localhost:3000/db'


export const search = () => {

    return (dispatch, getState) => {
        // console.log(getState().todo);
        const request = axios.get(`${URL}`)
            .then(resp => dispatch({ type: 'TRANSFORMER_SEARCHED', payload: resp.data }))
    }
}