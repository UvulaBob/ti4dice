import React, {Component} from 'react';
import ModifierDefinitions from '../lib/ModifierDefinitions';

class ModifierCheckbox extends Component {
    modifier = ModifierDefinitions[this.props.id];
    friendlyName = this.modifier.friendlyName;
    modifierValue = this.modifier.value === 1 ? "+1" : "-1";
    color = this.modifier.value === 1 ? "green" : "red";

    render() {
        return (
            <tr>
                <td>
                    <div className="form-check">
                        <input disabled={this.props.disabled} onChange={this.props.onChange} type="checkbox" className="form-check-input" id={this.modifier.name} />
                        <label className="form-check-label" htmlFor={this.id}>
                            {this.friendlyName}
                        </label>
                    </div>
                </td>
                <td>
                    <b><span style={{color: this.color}}>({this.modifierValue})</span></b>
                </td>
            </tr>
        );
    }
}

export default ModifierCheckbox;