import React, {Component} from 'react';
import RollResult from "./RollResult";
import ModifierDefinitions from "../lib/ModifierDefinitions";

class ResultItem extends Component {
    friendlyName = this.props.ship.friendlyName;
    shipName = this.props.ship.name;
    target = this.props.ship.target;
    shipCount = this.props.shipCount;
    numberOfDice = this.props.ship.numberOfDice;
    totalModifier = 0;

    createRollResults() {
        const rollResults = [];
        for (let i = this.shipCount; i > 0; i-- ) {
            for (let j = this.numberOfDice; j > 0; j--) {
                rollResults.push(<RollResult totalModifier={this.totalModifier} key={rollResults.length - 1} target={this.target} />)
            }
        }
        return rollResults;
    }

    render() {
        this.props.activeModifierIds.forEach( (activeModifierId) => {
            if (ModifierDefinitions[activeModifierId].ships.includes(this.shipName)) {
                this.totalModifier += ModifierDefinitions[activeModifierId].value;
            }
        });

        return (
            <div className="row">
                <table style={{width: "auto"}} className="table table-bordered table-sm">
                    <tbody>
                        <tr>
                            <td colSpan="4">
                                <h3><u>{this.friendlyName + "s"}</u></h3>
                                <h6>(Target: {this.target})</h6>
                            </td>
                        </tr>
                        <tr>
                            <th scope="col">Roll</th>
                            <th scope="col">Modifier</th>
                            <th scope="col">Total</th>
                            <th scope="col">Result</th>
                        </tr>
                        {this.createRollResults()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ResultItem;