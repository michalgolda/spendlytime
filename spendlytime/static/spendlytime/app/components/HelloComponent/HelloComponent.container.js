import React from "react";
import PropTypes from "prop-types";
import * as S from "./HelloComponent.styles";

function HelloComponent({ text }) {
    return <S.Text>{text}</S.Text>;
}

HelloComponent.propTypes = {
    text: PropTypes.string.isRequired,
};

export default HelloComponent;
