import React from 'react';

const RollResult = (props) => {
    const {dieRoll, totalModifier, finalResult, hit} = props.results;

    let modifierTextColor = "black";
    modifierTextColor = totalModifier > 0 ? "green" : modifierTextColor;
    modifierTextColor = totalModifier < 0 ? "red" : modifierTextColor;

    let resultTextColor = hit ? "green" : "red";

    return (
            <tr>
                <td>
                    {dieRoll}
                </td>
                <td>
                    <span style={{color: modifierTextColor}}>{totalModifier > 0 ? "+" : ""}{totalModifier}</span>
                </td>
                <td>
                    {finalResult}
                </td>
                <td>
                    <b><span style={{color: resultTextColor}}>{[hit ? "HIT" : "MISS"]}</span></b>
                </td>
            </tr>
    );
};

export default RollResult;