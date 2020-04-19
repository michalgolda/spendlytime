import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './TraceItemComponent.styles';

import { connect } from 'react-redux';
import { traceActions, timeEntryActions } from '../../actions';

import { faPlay, faStop, faTrash } from '@fortawesome/free-solid-svg-icons';

function TraceItemComponent(props){

    const { url, duration, id } = props;

    const [isShowActions, setShowActions] = useState(false);
    const [timerInterval, setTimerInterval] = useState(false);
    const [timerDuration, setTimerDuration] = useState(duration);
    const [isRunTimer, setRunTimer] = useState(false);

    function handleDelete(e){
        e.preventDefault();

        props.deleteTrace(id);
    }

    function startTimer(e){
        e.preventDefault();

        setRunTimer(true);

        const date = new Date();
        const data = {
            tid: props.id,
            start: date.toJSON()
        }
        props.startTimeEntry(data);

        const interval = setInterval(() => {
            setTimerDuration(duration => duration + 1);
        }, 1000);

        setTimerInterval(interval);
    }

    function stopTimer(e){
        e.preventDefault();

        setRunTimer(false);

        clearInterval(timerInterval);
        setTimerInterval(null);

        const timeEntryId = props.timeEntry.items[props.id].id;
        const date = new Date();
        const data = {
            tid: props.id,
            stop: date.toJSON(),
            duration: timerDuration
        }
        props.stopTimeEntry(timeEntryId, data);
    }

    return(
        <>
            <div
                onMouseEnter={() => setShowActions(true)}
                onMouseLeave={() => setShowActions(false)}
            >
                <S.Trace>
                    <S.TraceUrl>{url}</S.TraceUrl>
                    <S.TraceTime>{timerDuration}</S.TraceTime>
                </S.Trace>
                {isShowActions &&
                    <S.Actions>
                        <S.ActionsBox>
                            <S.Action onClick={(e) => handleDelete(e)}>
                                <S.DeleteActionIcon icon={faTrash} />
                            </S.Action>
                            <S.Action onClick={(e) => isRunTimer ? stopTimer(e) : startTimer(e)}>
                                <S.PlayAndStopActionIcon icon={isRunTimer ? faStop : faPlay} />
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
    duration: PropTypes.number.isRequired
}
function mapState(state){
    return state;
}
const actionCreators = {
    deleteTrace: traceActions.deleteTrace,
    startTimeEntry: timeEntryActions.startTimeEntry,
    stopTimeEntry: timeEntryActions.stopTimeEntry
}
export default connect(mapState, actionCreators)(TraceItemComponent);