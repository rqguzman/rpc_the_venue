import React, { Component } from 'react';
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {

    state = {
        prices: [100, 150, 250],
        positions: ['Balcony', 'Medium', 'Star'],
        desc:[
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu urna vitae urna euismod commodo. ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu urna vitae urna euismod commodo. ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu urna vitae urna euismod commodo. '
        ],
        linkto:['https://unsplash.com/photos/O4s639KfIQk',
                'https://unsplash.com/photos/CmZHwtyjxqE',
                'https://unsplash.com/photos/HzAdzQSM5m0'
        ],
        delay:[500, 0, 500]
    }

    showBoxes = () => (
        this.state.prices.map((box,i) => (
            <Zoom 
                key={i}
                delay={this.state.delay[i]}
            >
                <div className="pricing_item">
                    <div key={i} className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>${this.state.prices[i]}</span>
                            <span>${this.state.positions[i]}</span>
                        </div>
                        <div className="pricing_description">
                            {this.state.desc[i]}
                        </div>
                        <div className="pricing_buttons">
                            <MyButton
                                text="Purchase"
                                bck="#FFA800"
                                color="FFFFFF"
                                link={this.state.linkto[i]}
                            />
                        </div>
                    </div>
                </div>
            </Zoom>            
        ))
    )

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>
                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>
                </div>                
            </div>
        );
    }
}

export default Pricing;