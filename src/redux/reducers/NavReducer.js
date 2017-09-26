import Routers from '../../router/MyStackNav';

const navReducer = (state,action) => {
    let newState = Routers.router.getStateForAction(action, state)
    switch (action.type){
        case "Navigation/NAVIGATE":
            return newState || state;
            break;
        default:
            return newState || state;
            break
    }

};

export default navReducer;