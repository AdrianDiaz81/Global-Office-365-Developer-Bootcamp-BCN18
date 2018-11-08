import { actionTypes } from '../common/constants/actionTypes';

const handleupdatePlayerCompleted = (state: boolean=true, payload: boolean) => {
    return payload;
};

export const updatePlayerReducer = (state: boolean , action: any) => {
    switch (action.type) {
        case actionTypes.UPDATE_PLAYER:
            return handleupdatePlayerCompleted(state, action.payload);
    }
    return state;
};

