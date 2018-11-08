import { playerAPI } from "../../api";
import { actionTypes } from "../../common/constants/actionTypes";
import IPlayer from "../../model/IPlayer";


const loadPlayerCompleted = (result: boolean) => ({
    type: actionTypes.ADD_PLAYER,
    payload: result,
    meta: {
        httpEnd: true
    }        
});

export const addPlayerAction = (player:IPlayer) => (dispatch: any) => {
    playerAPI.addPlayerAsync(player).then((result) => {        
        history.back();
        dispatch(loadPlayerCompleted(result));
    });    
};
