const INITIAL_STATE = {
    list: [],

    faction: 'all',

    tempList: {
        "id": '',
        "name": '',
        "faction": '',
        "vehicleGroup": "",
        "vehicleType": "",
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
            return { ...state, tempList: { ...state.tempList, [action.payloadTYPE]: action.payload } }//computed properties name
        case 'TEMP_LIST_GEAR_REMOVE':
            return { ...state, tempList: { ...state.tempList, gear: state.tempList.gear.slice(0, action.payload).concat(state.tempList.gear.slice(action.payload+1,state.tempList.gear.length))  } }
        case 'TEMP_LIST_GEAR_ADD':
            return { ...state, tempList: { ...state.tempList, gear: state.tempList.gear.concat(action.payload)} }

        default:
            return state
    }
}


