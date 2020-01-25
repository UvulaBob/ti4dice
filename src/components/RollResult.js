import React, {Component, Fragment} from 'react';

class RollResult extends Component {
    target = this.props.target;
    totalModifier = this.props.totalModifier;
    dieRoll =  Math.trunc((Math.random() * 10) + 1);
    result = this.dieRoll + this.totalModifier;
    hit = this.result >= this.target;


    render() {
        this.result = this.result > 10 ? 10 : this.result;
        this.result = this.result < 1 ? 1 : this.result;

        return (
            <Fragment>
                <li>Roll: ({this.dieRoll})
                    Modifier: ({this.totalModifier > 0 ? "+" : ""}{this.totalModifier})
                    Total: ({this.result})
                    Result: {[this.hit ? "HIT" : "MISS"]}</li>
            </Fragment>
        );
    }
}
export default RollResult;