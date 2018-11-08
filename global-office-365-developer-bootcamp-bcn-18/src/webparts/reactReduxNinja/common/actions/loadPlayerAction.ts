import { playerAPI } from "../../api";
import { actionTypes } from "../../common/constants/actionTypes";
import IPlayer from "../../model/IPlayer";

const loadPlayerCompleted = (result: IPlayer[]) => ({
    type: actionTypes.LOAD_PLAYER,
    payload: result,
    meta: {
        httpEnd: true
    }        
});

export const loadPlayerAction = () => (dispatch: any) => {
    playerAPI.getPlayerAsync().then((result) => {
        dispatch(loadPlayerCompleted(result));
    });    
};
