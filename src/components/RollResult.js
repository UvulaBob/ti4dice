import React from 'react';
import PropTypes from 'prop-types';

const RollResult = ({dieRoll, totalModifier, finalResult, hit}) => {

    let modifierTextColor = "black";
    modifierTextColor = totalModifier > 0 ? "green" : modifierTextColor;
    modifierTextColor = totalModifier < 0 ? "red" : modifierTextColor;

    return (
            <tr>
                <td>
                    {dieRoll}
                </td>
                <td>
                    <span style={{color: modifierTextColor}}>{totalModifier > 0 ? "+" : "-"}{Math.abs(totalModifier)}</span>
                </td>
                <td>
                    {finalResult}
                </td>
                <td>
                    <b><span style={{color: hit ? "green" : "red"}}>{[hit ? "HIT" : "MISS"]}</span></b>
                </td>
            </tr>
    );
};

RollResult.propTypes = {
    dieRoll: PropTypes.number.isRequired,
    totalModifier: PropTypes.number.isRequired,
    finalResult: PropTypes.number.isRequired,
    hit: PropTypes.bool.isRequired
};

export default RollResult;