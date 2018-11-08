import { playerAPI } from "../../api";
import { actionTypes } from "../constants/actionTypes";
import IPlayer from "../../model/IPlayer";

const updatePlayerCompleted = (result: boolean) => ({
    type: actionTypes.UPDATE_PLAYER,
    payload: result,
    meta: {
        httpEnd: true
    }        
});

export const updatePlayerAction = (player:IPlayer) => (dispatch: any) => {
    playerAPI.updatePlayerAsync(player).then((result) => {
        history.back();
        dispatch(updatePlayerCompleted(result));
    });    
};
