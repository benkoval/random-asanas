import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            img: null,
            engName: null,
            sansName: null,
            min: 1,
            max: 28,
            // shown: false,
        };
        this.randomAsana = this.randomAsana.bind(this);
    }
    // toggleView () {
    //     this.setState({
    //         isHidden: !this.state.isHidden
    //     })
    // }
    randomAsana() {
        let randInt = Math.floor(Math.random() * (this.state.max - this.state.min + 1) + this.state.min);
        return axios.get(`https://my-json-server.typicode.com/bennykoval/yoga-api-renamed/yoga-poses/${randInt}`)
        .then(response => {
            console.log(response.data.img_url);
            this.setState({img: response.data.img_url})
            this.setState({engName: response.data.english_name})
            this.setState({sansName: response.data.sanskrit_name})
           
            return response.data
        })
        .catch(err => {
            console.log(err);
        });

    }
    render() {
        return (
        <div>
            <button onClick={
                this.randomAsana}>
                hey
            </button>
            <div className='asana_card'>
                <h1>{this.state.sansName} / {this.state.engName}</h1>
                <img 
                className='asana_img'
                alt={this.state.engName} 
                src={this.state.img}/>
            </div>
        </div>
        );
    }
}

    ReactDOM.render(
        <Home />,
        document.getElementById('root')
      );
      