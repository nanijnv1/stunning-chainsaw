import React, {Component} from "react";
import Draggable from 'react-draggable';
import ReactTestUtils from 'react-dom/test-utils';

class Card extends Component{

    render() {
        return (<Draggable bounds="parent" handle="strong">
            <div className="box no-cursor card card-width">
                <div className="card-header">
                    <strong>
                        {/*{this.state.counter}*/}
                        <div>Title</div>
                    </strong>
                </div>
                <div className="card-body">click on title to drag
                    {/*{this.state.change.map(comp => (comp.element))}*/}
                </div>
            </div>

        </Draggable>);
    }

}

export default Card