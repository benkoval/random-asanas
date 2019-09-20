import React from 'react';
import './button.scss';
import Pose from './pose.js';

export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayOfPoses: [],
        };
        this.createChildren = this.createChildren.bind(this);
    }
    createChildren() {
        this.child1.randomAsana()
        this.child2.randomAsana()
        this.child3.randomAsana()
    }
    render() {
        return (
        <div>
            <section
            className='btn_container'>
                <h1 className='text title'>Wellness through yoga</h1>
                
                <h2 class='text subtitle'>Click the button below for a random set of three popular asanas.</h2>
                <button 
                className='btn zen'
                onClick={
                    this.createChildren}>
                    Zen out
                </button>
            </section>
                <section className='asanas_container'>
                    <Pose onRef={ref => (this.child1 = ref)} key='1' />
                    <Pose onRef={ref => (this.child2 = ref)} key='2' />
                    <Pose onRef={ref => (this.child3 = ref)} key='3' />
                </section>
        </div>
        )
    }

}