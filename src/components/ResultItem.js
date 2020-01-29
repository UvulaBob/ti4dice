import React from 'react';
import RollResult from "./RollResult";
import ModifierDefinitions from "../lib/ModifierDefinitions";
import PropTypes from 'prop-types';

const ResultItem = ({ship, shipCount, activeModifierIds}) => {

    let totalModifier = 0;
    let hits = 0;

    activeModifierIds.forEach((activeModifierId) => {
        if (ModifierDefinitions[activeModifierId].ships.includes(ship.id)) {
            totalModifier += ModifierDefinitions[activeModifierId].value;
        }
    });

    const rollResults = [];
    for (let i = 1; i <= shipCount; i++) {
        for (let j = 1; j <= ship.numberOfDice; j++) {
            const dieRoll =  Math.trunc((Math.random() * 10) + 1);
            let finalResult = dieRoll + totalModifier;
            finalResult = Math.min(10, finalResult);
            finalResult = Math.max(1, finalResult);
            const hit = finalResult >= ship.target;
            hits += hit ? 1 : 0;
            rollResults.push(<RollResult dieRoll={dieRoll} finalResult={finalResult} hit={hit} totalModifier={totalModifier} key={`${ship.id}_${i}_die_${j}`} />)
        }
    }

    return (
        <div className="row row-cols-1">
            <div class="col mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title"><u>{ship.name + "s"}</u></h5>
                        <p class="card-text">(Target: {ship.target})</p>
                        <p class="card-text"><strong>Hits:</strong> {hits}</p>
                        <button class="btn btn-sm btn-info" type="button" data-toggle="collapse" data-target={"#result-" + ship.name} aria-expanded="false" aria-controls={"result-" + ship.name}>
                            Show details
                        </button>
                        <div class="collapse" id={"result-" + ship.name}>
                            <table style={{width: "auto"}} className="table table-bordered table-sm">
                                <tbody>
                                    <tr>
                                        <th scope="col">Roll</th>
                                        <th scope="col">Mod</th>
                                        <th scope="col">Total</th>
                                        <th scope="col">Result</th>
                                    </tr>
                                    {rollResults}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ResultItem.propTypes = {
    ship: PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        target: PropTypes.number.isRequired,
        numberOfDice: PropTypes.number.isRequired,
    }),
    shipCount: PropTypes.number.isRequired,
    activeModifierIds: PropTypes.array.isRequired
};
export default ResultItem;