import React from 'react';
import ModifierDefinitions from '../lib/ModifierDefinitions';

const ModifierCheckbox = (props) => {
    const {disabled, onChange} = props;

    const modifier = ModifierDefinitions[props.id];
    const {id, name} = modifier;

    const modifierText = modifier.value === 1 ? "+1" : "-1";
    const modifierColor = modifier.value === 1 ? "green" : "red";

    return (
        <tr>
            <td>
                <div className="form-check">
                    <input disabled={disabled} onChange={onChange} type="checkbox" className="form-check-input" id={id} />
                    <label className="form-check-label" htmlFor={id}>
                        {name}
                    </label>
                </div>
            </td>
            <td>
                <b><span style={{color: modifierColor}}>({modifierText})</span></b>
            </td>
        </tr>
    );
};

export default ModifierCheckbox;