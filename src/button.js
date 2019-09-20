import React from 'react';
import ReactDOM from 'react-dom';
import './button.scss';
import Pose from 'Pose.js';
import axios from 'axios';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayOfPoses: [],
        };
        this.mappy = this.mappy.bind(this);
    }
    mappy() {
        this.child1.randomAsana()
        this.child2.randomAsana()
        this.child3.randomAsana()
    }
    log() {
        console.log('sdjkgfasjdhkfgjksdg')
    }
    render() {
        return (
            <div>
                <button onClick={
                    this.mappy}>
                    hey
                </button>
                <div className='asanas_container'>
                    <Pose onRef={ref => (this.child1 = ref)} key='1' />
                    <Pose onRef={ref => (this.child2 = ref)} key='2' />
                    <Pose onRef={ref => (this.child3 = ref)} key='3' />
                </div>
            </div>
        )
    }

}

ReactDOM.render(
    <Button />,
    document.getElementById('root')
);