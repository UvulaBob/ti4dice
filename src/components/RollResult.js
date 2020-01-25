import React, {Component} from 'react';

class RollResult extends Component {
    target = this.props.target;
    totalModifier = this.props.totalModifier;
    dieRoll =  Math.trunc((Math.random() * 10) + 1);
    result = this.dieRoll + this.totalModifier;
    hit = this.result >= this.target;


    render() {
        this.result = this.result > 10 ? 10 : this.result;
        this.result = this.result < 1 ? 1 : this.result;
        let modifierColor = "black";
            if (this.totalModifier > 0) {
                modifierColor = "green"
            } else if (this.totalModifier < 0) {
                modifierColor = "red"
            }

        return (
                <tr>
                    <td>
                        {this.dieRoll}
                    </td>
                    <td>
                        <span style={{color: modifierColor}}>{this.totalModifier > 0 ? "+" : ""}{this.totalModifier}</span>
                    </td>
                    <td>
                        {this.result}
                    </td>
                    <td>
                        <b><span style={{color: this.hit ? "green" : "red"}}>{[this.hit ? "HIT" : "MISS"]}</span></b>
                    </td>
                </tr>
        );
    }
}
export default RollResult;