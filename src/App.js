import React, {Component} from 'react';
import ShipButton from './components/ShipButton';
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
            this.activeModifierIds.splice(this.activeModifierIds.indexOf(e.target.id), 1);
        } else {
            this.activeModifierIds.push(e.target.id);
        }
    };


    handleShipButtonClick = (e) => {
        if (!this.state.combatStarted) {
            const shipName = e.target.name;
            const newState = Object.assign({}, this.state);
            newState.fleet[shipName].push(ShipDefinitions[shipName]);
            this.setState(newState);
        }
    };

    handleRollDiceButtonClick = () => {
        this.setState({combatStarted: true});
    };

    render() {
        let resultItems = [];

        if (this.state.combatStarted) {
            resultItems = Object.keys(this.state.fleet).filter((shipType) => {
                return this.state.fleet[shipType].length > 0;
            }).map((shipType) => {
                const shipCount = this.state.fleet[shipType].length;
                return <ResultItem key={shipType} activeModifierIds={this.activeModifierIds}
                                   ship={ShipDefinitions[shipType]} shipCount={shipCount}/>
            })
        }

        const shipButtons = Object.keys(this.state.fleet).map((shipType) =>
            <ShipButton key={shipType} shipCount={this.state.fleet[shipType].length} disabled={this.state.combatStarted} onClick={this.handleShipButtonClick} ship={ShipDefinitions[shipType]} />
        );

        const modifierCheckboxes = Object.keys(ModifierDefinitions).map((modifierId =>
            <ModifierCheckbox key={modifierId} onChange={this.handleModifierCheckboxChange} id={modifierId}/>)
        );

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
                                <table style={{width: "auto"}} className="table table-borderless table-sm">
                                    <tbody>
                                        {shipButtons}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col border">
                            <div className="row">
                                <h1><u>Results</u></h1>
                            </div>
                            {resultItems}
                        </div>
                        <div className="col border">
                            <div className="row">
                                <h1><u>Modifiers</u></h1>
                            </div>
                            <table style={{width: "auto"}} className="table table-borderless table-sm">
                                <tbody>
                                  {modifierCheckboxes}
                                </tbody>
                            </table>
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
