import React from 'react';
import RollResult from "./RollResult";
import ModifierDefinitions from "../lib/ModifierDefinitions";

const ResultItem = (props) => {
    const shipName = props.ship.name;
    const shipId = props.ship.id;
    const target = props.ship.target;
    const shipCount = props.shipCount;
    const numberOfDice = props.ship.numberOfDice;
    let totalModifier = 0;
    let hits = 0;

    props.activeModifierIds.forEach((activeModifierId) => {
        if (ModifierDefinitions[activeModifierId].ships.includes(shipId)) {
            totalModifier += ModifierDefinitions[activeModifierId].value;
        }
    });

    const rollResults = [];
    for (let i = 1; i <= shipCount; i++) {
        for (let j = 1; j <= numberOfDice; j++) {
            const dieRoll =  Math.trunc((Math.random() * 10) + 1);
            let finalResult = dieRoll + totalModifier;
            finalResult = Math.min(10, finalResult);
            finalResult = Math.max(1, finalResult);
            const hit = finalResult >= target;
            hits += hit ? 1 : 0;
            rollResults.push(<RollResult results={{dieRoll, totalModifier, finalResult, hit, hits}} key={`${shipId}_${i}_die_${j}`} />)
        }
    }

    return (
        <div className="row">
            <table style={{width: "auto"}} className="table table-bordered table-sm">
                <tbody>
                    <tr>
                        <td colSpan="4">
                            <h3><u>{shipName + "s"}</u></h3>
                            <h6>(Target: {target})</h6>
                        </td>
                    </tr>
                    <tr>
                        <th scope="col">Roll</th>
                        <th scope="col">Mod</th>
                        <th scope="col">Total</th>
                        <th scope="col">Result</th>
                    </tr>
                    {rollResults}
                    <tr>
                        <td colSpan={"3"}>
                            <h3>Hits:</h3>
                        </td>
                        <td>
                            <h3>{hits}</h3>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ResultItem;