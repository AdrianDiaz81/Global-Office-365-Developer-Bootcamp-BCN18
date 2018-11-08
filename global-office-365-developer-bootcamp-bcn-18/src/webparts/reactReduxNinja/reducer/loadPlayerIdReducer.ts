import { actionTypes } from '../common/constants/actionTypes';
import IPlayer from '../model/IPlayer';

const emptyPlayer:IPlayer={
    fullName:'',
    club:'',
    country:{
        name:'',
        continent:{
            name:''
        }},
        image:'',

        id:''
    };
const handleloadPlayerIdCompleted = (state: IPlayer, payload: IPlayer) => {
        return payload;
    };

export const loadPlayerIdReducer = (state: IPlayer = emptyPlayer, action: any) => {
    switch (action.type) {
        case actionTypes.LOAD_ID_PLAYER:
            return handleloadPlayerIdCompleted(state, action.payload);
    }
    return state;
};

