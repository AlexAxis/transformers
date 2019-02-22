const INITIAL_STATE = {
    list: [],
    faction: 'all'
}
//as ACÇÕES
//REDUCER (STATE,ACTION)
export default function (state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'TRANSFORMER_FETCH':
            return { ...state, list: action.payload }
        case 'FACTION_CHANGE':
        return { ...state, faction: action.payload }

        default:
            return state
    }
}
