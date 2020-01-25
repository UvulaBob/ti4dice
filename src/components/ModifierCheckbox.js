import React, {Component} from 'react';
import ModifierDefinitions from '../lib/ModifierDefinitions';

class ModifierCheckbox extends Component {
    modifier = ModifierDefinitions[this.props.modifierId];
    friendlyName = this.modifier.friendlyName;
    modifierValue = this.modifier.value === 1 ? "+1" : "-1";
    color = this.modifier.value === 1 ? "green" : "red";

    render() {
        return (
            <div className="row">
                <div className="form-check">
                    <input onChange={this.props.onChange} type="checkbox" className="form-check-input" id={this.id} />
                    <label className="form-check-label" htmlFor={this.id}>
                        {this.friendlyName}  <b><span style={{color: this.color}}>({this.modifierValue})</span></b>
                    </label>
                </div>
            </div>
        );
    }
}

export default ModifierCheckbox;