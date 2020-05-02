import React, {Component} from "react";
// import ReactDOM from 'react-dom';
// import _ from 'underscore'
import Draggable from 'react-draggable';
// import {DragDropContainer, DropTarget} from 'react-drag-drop-container';
// const {ReactDraggable: Draggable} = window;


class First extends Component {
    constructor(props) {
        super(props);
        // This state changes so the card is generated
        this.state = {
            handleName: "handle",
            change: [],
            counter: 0
            // firstTime: true;
        }
        this.handel = this.handel.bind(this);
    }

    // state = {};

    handel = (element) => {
        let components = this.state.change;
        // This is the element which creates the card.
        element = <Draggable bounds="parent" handle={"." + this.state.handleName}>
            <div className="box no-cursor card card-width">
                <div className="card-header">
                    <strong className={this.state.handleName}>
                        {/*{this.state.counter}*/}
                        <div>Title</div>
                    </strong>
                </div>
                <div>click on title to drag
                    <div>
                        {this.state.change.map(comp => (comp.element))}
                    </div>
                </div>
            </div>

        </Draggable>;
        let payload = {element:element, counter: this.state.counter}
        components.push(payload);
        console.log(components)
        this.setState({
            change: components,
            handleName: this.state.handleName + "1",
            counter: this.state.counter + 1
        });
    }


    render() {
        // console.log(this.state.change)
        return (
            <div style={{height: '100vh', width: '100vw', position: 'relative', overflow: 'auto', padding: '0'}}>
                <button className="float-left" onClick={this.handel}> add</button>
                <Draggable bounds="parent" handle={"." + this.state.handleName}>
                    <div className="card card-width">
                        <div className="card-header">
                            <strong className={this.state.handleName}>
                                {/*{this.state.counter}*/}
                                <div>Title</div>
                            </strong>
                        </div>
                        <div className="card-body">click on title to drag
                            {/*{this.state.firstTime ? this.state.change.map(comp => (comp['element'])) : null}*/}
                                {this.state.change.map(comp => (comp['element']))}
                        </div>
                    </div>

                </Draggable>
            </div>
        );
    }

}

export default First;