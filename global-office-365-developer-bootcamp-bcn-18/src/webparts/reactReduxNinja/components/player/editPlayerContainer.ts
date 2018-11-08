import { connect } from 'react-redux';
import { EditPlayer } from './editPlayer';
import { IStateReducer } from '../../reducer';
import { loadIdPlayerAction } from '../../common/actions/loadIdPlayer';
import IPlayer from '../../model/IPlayer';
import { updatePlayerAction } from '../../common/actions/updatePlayerAction';

const mapStateToProps = (state: IStateReducer) => ({
    player: state.player
});

const mapDispatchToProps = (dispatch: any) => ({
    loadIdPlayer: (id:string) => dispatch(loadIdPlayerAction(id)),
    editPlayer:(player:IPlayer)=>dispatch(updatePlayerAction(player)),
});

export const EditPlayerContainer: any = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditPlayer);