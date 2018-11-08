import { connect } from 'react-redux';
import { AddPlayer } from './addPlayer';
import {IStateReducer} from '../../reducer';
import IPlayer from '../../model/IPlayer';
import {addPlayerAction} from '../../common/actions/addPlayerAction';

const mapStateToProps = (state: IStateReducer) => ({
});

const mapDispatchToProps = (dispatch: any) => ({
    addPlayer: (player:IPlayer) => dispatch(addPlayerAction(player))
});

export const AddPlayerContainer: any = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddPlayer);