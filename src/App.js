import React, {Component} from 'react';
import ShipButton from './components/ShipButton';
import FleetItem from './components/FleetItem';
import ResultItem from './components/ResultItem';
import ShipDefinitions from './lib/ShipDefinitions';
import ModifierCheckbox from './components/ModifierCheckbox';
import ModifierDefinitions from './lib/ModifierDefinitions';

class App extends Component {
    state = {
        fleet: {
            "carrier": [],
            "cruiser": [],
            "destroyer": [],
            "dreadnought": [],
            "fighter": [],
            "warsun": []
        },
        combatStarted: false
    };

    activeModifierIds = [];

    handleModifierCheckboxChange = (e) => {
        if (this.activeModifierIds.includes(e.target.id)) {
            this.activeModifierIds = this.activeModifierIds.filter((activeModifier) => { return activeModifier !== e.target.id});
        } else {
            this.activeModifierIds.push(e.target.id);
        }
    };


    handleShipButtonClick = (e) => {
        if (this.state.combatStarted) {
            return;
        }
        const shipName = e.target.name;
        const newState = Object.assign({}, this.state);
        newState.fleet[shipName].push(ShipDefinitions[shipName]);
        this.setState(newState);
    };

    handleRollDiceButtonClick = () => {
        this.setState({combatStarted: true});
    };

    render() {
        const resultItems = [];
        if (this.state.combatStarted) {
            for (let shipType in this.state.fleet) {
                const shipCount = this.state.fleet[shipType].length;
                if (shipCount > 0) {
                    resultItems.push(<ResultItem key={resultItems.length - 1}  activeModifierIds={this.activeModifierIds} ship={ShipDefinitions[shipType]} shipCount={shipCount} />);
                }
            }
        }

        const shipButtons = [];
        for (let shipType in this.state.fleet) {
            shipButtons.push(<ShipButton key={shipType} disabled={this.state.combatStarted} onClick={this.handleShipButtonClick} ship={ShipDefinitions[shipType]} />);
        }

        const modifierCheckboxes = [];
        for (let modifierId in ModifierDefinitions) {
            modifierCheckboxes.push(<ModifierCheckbox key={modifierId} onChange={this.handleModifierCheckboxChange} modifierId={modifierId}/>);
        }

        const fleetItems = [];
        for (let shipType in this.state.fleet) {
            fleetItems.push(<FleetItem key={shipType} ship={ShipDefinitions[shipType]} shipCount={this.state.fleet[shipType].length}/>);
        }

        return (
            <div className="App">
                <div className="container-fluid">
                    <div className="jumbotron jumbotron-fluid text-center">
                        <h1 className="display-1">Twilight Imperium 4 Dice Roller</h1>
                        <h6>This totally didn't take more time to code than all the time that will ever be spent rolling dice.</h6>
                    </div>
                    <div className="row">
                        <div className="col border">
                            <div className="row">
                                <h1><u>Fleet</u></h1>
                            </div>
                            <div className="row">
                                {shipButtons}
                            </div>
                            <div className="row">
                                <ul style={{listStyleType:"none", margin:"0", padding:"0"}}>
                                    {fleetItems}
                                </ul>
                            </div>
                        </div>
                        <div className="col border">
                            <div className="row">
                                <h1><u>Results</u></h1>
                            </div>
                            <div className="row">
                                <ul style={{listStyleType:"none", margin:"0", padding:"0"}}>
                                    {resultItems}
                                </ul>
                            </div>
                        </div>
                        <div className="col border">
                            <div className="row">
                                <h1><u>Modifiers</u></h1>
                            </div>
                            {modifierCheckboxes}
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <button type="button" className="btn btn-success border" disabled={this.state.combatStarted} onClick={this.handleRollDiceButtonClick}>Roll Dice</button>
                    </div>
                </div>
            </div>
            );
    }
}

export default App;
