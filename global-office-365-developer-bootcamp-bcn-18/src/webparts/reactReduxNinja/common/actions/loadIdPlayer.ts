import { playerAPI } from "../../api";
import { actionTypes } from "../../common/constants/actionTypes";
import IPlayer from "../../model/IPlayer";

const loadIdPlayerCompleted = (result: IPlayer) => ({
    type: actionTypes.LOAD_ID_PLAYER,
    payload: result,
    meta: {
        httpEnd: true
    }        
});
export const loadIdPlayerAction = (id:string) => (dispatch: any) => {
    playerAPI.getPlayerIdAsync(id).then((result) => {
        dispatch(loadIdPlayerCompleted(result));
    });    
};