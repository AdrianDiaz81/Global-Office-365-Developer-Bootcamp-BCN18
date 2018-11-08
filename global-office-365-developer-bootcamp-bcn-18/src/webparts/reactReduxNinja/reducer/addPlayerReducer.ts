import { actionTypes } from '../common/constants/actionTypes';

const handleaddPlayerCompleted = (state: boolean=true, payload: boolean) => {
    return payload;
};

export const addPlayerReducer = (state: boolean , action: any) => {
    switch (action.type) {
        case actionTypes.ADD_PLAYER:
            return handleaddPlayerCompleted(state, action.payload);
    }
    return state;
};

