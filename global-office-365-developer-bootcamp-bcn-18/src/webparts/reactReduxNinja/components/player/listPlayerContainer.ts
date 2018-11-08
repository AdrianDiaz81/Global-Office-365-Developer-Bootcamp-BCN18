import { connect } from 'react-redux';
import { ListPlayer } from './listPlayer';
import { IStateReducer } from '../../reducer';
import { loadPlayerAction } from '../../common/actions/loadPlayerAction';

const mapStateToProps = (state: IStateReducer) => ({
    playerCollection: state.playerCollection,
});

const mapDispatchToProps = (dispatch: any) => ({
    loadPlayer: () => dispatch(loadPlayerAction())
});

export const ListPlayerContainer: any = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListPlayer);