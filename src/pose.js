import React from 'react';
import './pose.scss';
import axios from 'axios';

export default class Pose extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            img: null,
            engName: null,
            sansName: null,
            min: 1,
            max: 28,
        };
        this.randomAsana = this.randomAsana.bind(this);
    }
    componentDidMount() {
        this.props.onRef(this)
    }

    randomAsana() {
        let randInt = Math.floor(Math.random() * (this.state.max - this.state.min + 1) + this.state.min);
        return axios.get(`https://my-json-server.typicode.com/bennykoval/yoga-api-renamed/yoga-poses/${randInt}`)
            .then(response => {
                // console.log(response.data.img_url);
                this.setState({
                    img: response.data.img_url,
                    engName: response.data.english_name,
                    sansName: response.data.sanskrit_name
                })

                return response.data.img_url
            })
            .catch(err => {
                console.log(err);
            });

    }
    render() {
        return (
            <div className='asana_container'>
                {this.state.sansName && <div className='asana_card'>
                    <h2 className='pose_info sans'>{this.state.sansName}</h2>
                    <h2 className='pose_info eng'>{this.state.engName}</h2>
                    <img
                        className='asana_img'
                        alt={this.state.engName}
                        src={this.state.img} />
                </div>}
            </div>
        );
    }
}
