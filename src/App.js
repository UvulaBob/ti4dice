import React, {Component} from 'react';
import ShipButton from './components/ShipButton';
import FleetItem from './components/FleetItem';
import ResultItem from './components/ResultItem';
import ShipDefinitions from './lib/ShipDefinitions';

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

    handleShipButtonClick = (e) => {
        if (this.state.combatStarted) {
            return;
        }
        const shipName = e.target.name;
        const newState = Object.assign({}, this.state);
        newState.fleet[shipName].push(ShipDefinitions[shipName]);
        this.setState(newState);
    };

    handleRollDiceButtonClick = (e) => {
        this.setState({combatStarted: true});
    };

    render() {
        const resultItems = [];
        if (this.state.combatStarted) {
            for (let shipType in this.state.fleet) {
                const shipCount = this.state.fleet[shipType].length;
                if (shipCount > 0) {
                    resultItems.push(<ResultItem ship={ShipDefinitions[shipType]} shipCount={shipCount} />);
                }
            }
        }

        return (
            <div className="App">
                <div className="container-fluid">
                    <div className="jumbotron jumbotron-fluid text-center">
                        <h1 className="display-1">Twilight Imperium 4 Dice Roller</h1>
                        <h6>This totally didn't take more time to code than all the time that will ever be spent rolling dice.</h6>
                    </div>
                    <div className="row justify-content-center">
                        <ShipButton onClick={this.handleShipButtonClick} ship={ShipDefinitions["carrier"]} />
                        <ShipButton onClick={this.handleShipButtonClick} ship={ShipDefinitions["cruiser"]} />
                        <ShipButton onClick={this.handleShipButtonClick} ship={ShipDefinitions["destroyer"]} />
                        <ShipButton onClick={this.handleShipButtonClick} ship={ShipDefinitions["dreadnought"]} />
                        <ShipButton onClick={this.handleShipButtonClick} ship={ShipDefinitions["fighter"]} />
                        <ShipButton onClick={this.handleShipButtonClick} ship={ShipDefinitions["warsun"]} />
                    </div>
                    <div className="row justify-content-center">
                        <h2><u>Your Fleet</u></h2>
                    </div>
                    <div className="row justify-content-center">
                        <ul style={{listStyleType:"none", margin:"0", padding:"0"}}>
                            <FleetItem ship={ShipDefinitions["carrier"]} shipCount={this.state.fleet.carrier.length}/>
                            <FleetItem ship={ShipDefinitions["cruiser"]} shipCount={this.state.fleet.cruiser.length}/>
                            <FleetItem ship={ShipDefinitions["destroyer"]} shipCount={this.state.fleet.destroyer.length}/>
                            <FleetItem ship={ShipDefinitions["dreadnought"]} shipCount={this.state.fleet.dreadnought.length}/>
                            <FleetItem ship={ShipDefinitions["fighter"]} shipCount={this.state.fleet.fighter.length}/>
                            <FleetItem ship={ShipDefinitions["warsun"]} shipCount={this.state.fleet.warsun.length}/>
                        </ul>
                    </div>
                    <div className="row justify-content-center">
                        <button type="button" className="btn btn-success border" disabled={this.state.combatStarted} onClick={this.handleRollDiceButtonClick}>Roll Dice</button>
                    </div>
                    <div className="row justify-content-center">
                        <h1><u>Results</u></h1>
                    </div>
                    <div className="row justify-content-center">
                        <ul style={{listStyleType:"none", margin:"0", padding:"0"}}>
                            {resultItems}
                        </ul>
                    </div>
                    <div className="row justify-content-center">
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
