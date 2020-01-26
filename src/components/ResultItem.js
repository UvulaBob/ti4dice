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
    childHits = 0;

    state = { totalHits: 0};

    createRollResults = () => {
        const rollResults = [];
        for (let i = 1; i <= this.shipCount; i++) {
            for (let j = 1; j <= this.numberOfDice; j++) {
                rollResults.push(<RollResult onHit={() => this.childHits++} totalModifier={this.totalModifier} key={`${this.shipName}_${i}_die_${j}`} target={this.target} />)
            }
        }

        return rollResults;

    };

    componentDidMount = () => {
        this.setState({hits: this.childHits});
    };

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
                            <th scope="col">Mod</th>
                            <th scope="col">Total</th>
                            <th scope="col">Result</th>
                        </tr>
                        {this.createRollResults()}
                        <tr>
                            <td colSpan={"3"}>
                                <h3>Hits:</h3>
                            </td>
                            <td>
                                <h3>{this.state.hits}</h3>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ResultItem;