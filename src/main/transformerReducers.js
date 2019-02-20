const INITIAL_STATE = {
    list: []
}
//as ACÇÕES
//REDUCER (STATE,ACTION)
export default function (state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'TRANSFORMER_FETCH':
            return { ...state, list: action.payload }
        default:
            return state
    }


}