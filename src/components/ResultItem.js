import React, {Component, Fragment} from 'react';
import RollResult from "./RollResult";

class ResultItem extends Component {
    friendlyName = this.props.ship.friendlyName;
    target = this.props.ship.target;
    shipCount = this.props.shipCount;

    createRollResults() {
        const rollResults = [];
        for (let i = this.shipCount; i > 0; i-- ) {
            rollResults.push(<RollResult target={this.target} />)
        }
        return rollResults;
    }

    render() {
        return (
            <Fragment>
                <div className="row justify-content-center">
                    <h3><u>{this.friendlyName + "s"}</u></h3>
                </div>
                <div className="row justify-content-center">
                    <h6>(Target: {this.target})</h6>
                </div>
                <div className="row justify-content-center">
                    <ul style={{listStyleType:"none", padding:"0"}}>
                        {this.createRollResults()}
                    </ul>
                </div>
            </Fragment>
        );
    }
}

export default ResultItem;