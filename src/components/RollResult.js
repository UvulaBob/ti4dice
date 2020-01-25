import React, {Component, Fragment} from 'react';

class RollResult extends Component {
    target = this.props.target;
    totalModifier = this.props.totalModifier;
    dieRoll =  Math.trunc((Math.random() * 10) + 1);
    result = this.dieRoll + this.totalModifier;
    hit = this.result >= this.target;


    render() {
        if (this.result > 10) {
            this.result = 10;
        }

        if (this.result < 1) {
            this.result = 1;
        }

        return (
            <Fragment>
                <li>Roll: ({this.dieRoll})
                    Modifier: ({this.totalModifier > 0 ? "+" : ""}{this.totalModifier})
                    Total: ({this.result})- {[this.hit ? "HIT" : "MISS"]}</li>
            </Fragment>
        );
    }
}
export default RollResult;