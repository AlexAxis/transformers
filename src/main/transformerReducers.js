const INITIAL_STATE = {
    list: [],

    faction: '',

    tempList: {
        "id": '',
        "name": '',
        "faction": '',
        "vehicleGroup": "ola",
        "vehicleType": "ola",
        "vehicleModel": "",
        "gear": [],
        "status": ""
    },

    name: ''
}
//as ACÇÕES
//REDUCER (STATE,ACTION)
export default function (state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'NAME_CHANGE':
            return { ...state, name: action.payload }
        case 'TRANSFORMER_FETCH':
            return { ...state, list: action.payload }
        case 'FACTION_CHANGE':
            return { ...state, faction: action.payload }
        // case 'TEMP_FACTION':
        //     return { ...state, tempList: { ...state.tempList, faction: action.payload } }
        case 'TEMP_LIST':
            return { ...state, tempList: { ...state.tempList, [action.payloadTYPE]: action.payload
    }
}
        default:
return state
    }
}


