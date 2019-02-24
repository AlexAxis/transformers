import axios from 'axios'
const URL = 'http://localhost:3000/db'
const URLtransformers = 'http://localhost:3000/transformers'

/**
 * This funciton is responsible to fetch the data from endpoint
 */
export const fetch = () => {

    return (dispatch, getState) => {
        // console.log(getState().todo);
        const request = axios.get(`${URL}`)
            .then(resp => dispatch({ type: 'TRANSFORMER_FETCH', payload: resp.data }))
    }
}
/**
 * This function is responsible to send the radio selection to the reducer:
 * '0' isAutobots, '1' is Decepticons, and 'all' is all transformers 
 */
export const changeFaction = event => ({
    type: 'FACTION_CHANGE',
    payload: event
})

/**
 * Action that will have the reference to the reducer that changes the value of the variable 'name' in the store
 *  according to what was introduced by the user in the input element 
 */
export const changeName = event => {
    if (event == ''){
        return {
            type: 'NAME_CHANGE',
            payload: event
        }
    }  else {
        return {
            type: 'NAME_CHANGE',
            payload: event.target.value
        }
    }  

}
// export const changeWeapon = event => ({
//     type: 'WEAPON_CHANGE',
//     payload: event.target.value
// })


/**
 * This next action is to put a temporary faction/status/group/type/model at the temporaryList.
 * 
 * The payloadTYPE is to know which variable to change on the temporaryList Object
 */
export const tempListAll = (event, event2) => ({
    type: 'TEMP_LIST',
    payload: event,
    payloadTYPE: event2
})

/**
 * this funcitons are to remove/add a gear
 */
export const removeGear = (event) => ({
    type: 'TEMP_LIST_GEAR_REMOVE',
    payload: event
})

export const addGear = (event) => ({
    type: 'TEMP_LIST_GEAR_ADD',
    payload: event
})

/**
 * this function insert the transformer to the database and calls the action that refresh the list (get)
 */
export const insertTransformer = (list, id) => {
    return dispatch => {
        axios.post(URLtransformers, {id, name: list.name, faction: list.faction, vehicleGroup: list.vehicleGroup, vehicleType: list.vehicleType, vehicleModel: list.vehicleModel, gear: list.gear, status:list.status})
            .then(resp => dispatch(fetch()))
    }
}

export const updateTransformer = (list, id) => {
    return dispatch => {
        axios.put(URLtransformers, {id, name: list.name, faction: list.faction, vehicleGroup: list.vehicleGroup, vehicleType: list.vehicleType, vehicleModel: list.vehicleModel, gear: list.gear, status:list.status})
            .then(resp => dispatch(fetch()))
    }
}

export const deleteTransformer = (id) => {
    return dispatch => {
        axios.put(`${URLtransformers}/${id}`)
            .then(resp => dispatch(fetch()))
    }
}