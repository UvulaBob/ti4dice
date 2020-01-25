import React, {Component} from 'react';

class ModifierCheckbox extends Component {
    id = this.props.id;
    friendlyText = this.props.friendlyText;
    modifier = this.props.modifier;
    color = this.modifier === "+1" ? "green" : "red";

    render() {
        return (
            <div className="row">
                <div className="form-check">
                    <input onChange={this.props.onChange} type="checkbox" className="form-check-input" id={this.id} />
                    <label className="form-check-label" htmlFor={this.id}>
                        {this.friendlyText}  <b><span style={{color: this.color}}>({this.modifier})</span></b>
                    </label>
                </div>
            </div>
        );
    }
}

export default ModifierCheckbox;