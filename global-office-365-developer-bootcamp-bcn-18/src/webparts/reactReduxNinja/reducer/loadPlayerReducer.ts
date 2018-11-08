import { actionTypes } from '../common/constants/actionTypes';
import IPlayer from '../model/IPlayer';

const handleloadPlayerCompleted = (state: IPlayer[], payload: IPlayer[]) => {
    return payload;
};

export const loadPlayerReducer = (state: IPlayer[] = [], action: any) => {
    switch (action.type) {
        case actionTypes.LOAD_PLAYER:
            return handleloadPlayerCompleted(state, action.payload);
    }
    return state;
};

