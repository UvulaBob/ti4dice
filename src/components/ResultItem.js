import React, {Component, Fragment} from 'react';
import RollResult from "./RollResult";
import ModifierDefinitions from "../lib/ModifierDefinitions";

class ResultItem extends Component {
    friendlyName = this.props.ship.friendlyName;
    shipName = this.props.ship.name;
    target = this.props.ship.target;
    shipCount = this.props.shipCount;
    numberOfDice = this.props.ship.numberOfDice;
    activeModifierIds = this.props.activeModifierIds;
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
        this.activeModifierIds.forEach( (activeModifierId) => {
            if (ModifierDefinitions[activeModifierId].ships.includes(this.shipName)) {
                this.totalModifier += ModifierDefinitions[activeModifierId].modifier;
            }
        });

        return (
            <Fragment>
                    <h3><u>{this.friendlyName + "s"}</u></h3>
                    <h6>(Target: {this.target})</h6>
                    <ul style={{listStyleType:"none", padding:"0"}}>
                        {this.createRollResults()}
                    </ul>
            </Fragment>
        );
    }
}

export default ResultItem;