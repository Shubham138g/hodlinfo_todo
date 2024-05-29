const intiaData = {
    list: []
}

const todoReducers = (state = intiaData, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const { id, data } = action.payload;
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }
                ]
            }
        case "DELETE_TODO":
            const newList = state.list.filter((element) => element.id !== action.id)
            return {
                ...state,
                list: newList
            }
        case "REMOVE_TODO":
            return{
                ...state,
                list:[]
            };
            case "TOGGLE_TODO":
                return {
                  ...state,
                  list: state.list.map(todo =>
                    todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
                  ),
                };
        default: return state;
    }
}

export default todoReducers;