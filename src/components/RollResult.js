import React, {Component, Fragment} from 'react';

class RollResult extends Component {
    result = Math.trunc((Math.random() * 10) + 1);
    target = this.props.target;

    render() {
        return (
            <Fragment>
                <li>Result: {this.result} - {this.result >= this.target ? "HIT" : "MISS"}</li>
            </Fragment>
        );
    }
}
export default RollResult;