import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../utils/MyButton';

class Discount extends Component {

    state = {
        discountStart: 0,
        discountEnd: 30
    }

    porcentage = () => {
        if (this.state.discountStart < this.state.discountEnd) {
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
    }

    componentDidUpdate(){
        setTimeout(() => {
            this.porcentage()
        }, 30)
    }

    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">

                    <Fade
                        onReveal={() => this.porcentage()}
                    >
                        <div className="discount_porcentage">
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>
                    <Slide right>
                        <div className="discount_description">
                            <h3>
                                Purchase tickets before 17th MAY
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur at erat et sagittis. Maecenas accumsan eleifend quam ac efficitur. Cras nibh arcu, cursus a nisi ut, sagittis laoreet libero.
                            </p>

                            <MyButton 
                                text="Purchase tickets"
                                bck='#FFA800'
                                color="#FFF"
                                link="http://google.com"
                            />
                        </div>
                    </Slide>
                </div>
            </div>
        );
    }
}

export default Discount;