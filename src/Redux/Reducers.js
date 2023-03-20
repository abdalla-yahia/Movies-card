

const initialState = {
    language:'Ar',
    element: [],
    counter: 0,
    classname: ''
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'Add':
            return {
                ...state, counter: state.counter + 1, element:[...state.element,action.ele] }
        case 'ChangeLanguage':
            return {...state, language: action.lang, element:[] }
        case 'del':
            return {...state,counter:state.counter - 1,element:[...state.element].filter(e=>e.id !== action.id)}
        case 'class':
            return { ...state, classname:action.class}
        case 'Get':
            return { ...state }
        default:
            return state
            
    }
}

export default reducer;