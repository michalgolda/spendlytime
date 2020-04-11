import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './TraceItemComponent.styles';

import { faPlay, faStop, faTrash } from '@fortawesome/free-solid-svg-icons';

function TraceItemComponent({ url, time }){

    const [isShowActions, setShowActions] = useState(false);
    const [isTimer, setTimer] = useState(false);

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
                            <S.Action>
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

export default TraceItemComponent;