import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './TraceItemComponent.styles';

import { connect } from 'react-redux';
import { traceActions } from '../../actions';

import { faPlay, faStop, faTrash } from '@fortawesome/free-solid-svg-icons';

function TraceItemComponent(props){

    const { url, time, id } = props;

    const [isShowActions, setShowActions] = useState(false);
    const [isTimer, setTimer] = useState(false);

    function handleDelete(e){
        e.preventDefault();

        props.deleteTrace(id);
    }

    return(
        <>
            <div
                onMouseEnter={() => setShowActions(true)}
                onMouseLeave={() => setShowActions(false)}
            >
                <S.Trace>
                    <S.TraceUrl>{url}</S.TraceUrl>
                    <S.TraceTime>{time}</S.TraceTime>
                </S.Trace>
                {isShowActions &&
                    <S.Actions>
                        <S.ActionsBox>
                            <S.Action onClick={(e) => handleDelete(e)}>
                                <S.DeleteActionIcon icon={faTrash} />
                            </S.Action>
                            <S.Action onClick={() => isTimer ? setTimer(false) : setTimer(true)}>
                                <S.PlayAndStopActionIcon icon={isTimer ? faStop : faPlay} />
                            </S.Action>
                        </S.ActionsBox>
                    </S.Actions>
                }
            </div>
        </>
    );
}

TraceItemComponent.propTypes = {
    url: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired
}

function mapState(state){
    return state;
}

const actionCreators = {
    deleteTrace: traceActions.deleteTrace
}

export default connect(mapState, actionCreators)(TraceItemComponent);