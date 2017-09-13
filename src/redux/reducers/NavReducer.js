import Routers from '../../router/MyStackNav';

const navReducer = (state,action) => {
    let newState = Routers.router.getStateForAction(action, state)
    switch (action.type){
        case "Navigation/NAVIGATE":
            if(action.routeName=="Shop"){
                return {
                    ...state
                }
            }
            return newState || state;
            break;
        default:
            return newState || state;
            break
    }

};

export default navReducer;