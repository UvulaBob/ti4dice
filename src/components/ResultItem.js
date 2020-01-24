import React, {Component, Fragment} from 'react';
import RollResult from "./RollResult";

class ResultItem extends Component {
    friendlyName = this.props.ship.friendlyName;
    target = this.props.ship.target;
    shipCount = this.props.shipCount;
    numberOfDice = this.props.ship.numberOfDice;

    createRollResults() {
        const rollResults = [];
        for (let i = this.shipCount; i > 0; i-- ) {
            for (let j = this.numberOfDice; j > 0; j--) {
                rollResults.push(<RollResult key={rollResults.length - 1} target={this.target} />)
            }
        }
        return rollResults;
    }

    render() {
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