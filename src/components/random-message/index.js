import React from 'react';
import faker from 'faker';

class RandomMessage extends React.Component {
    constructor(props) {
        super(props);
        // this.message = faker.lorem.words();
        // Set initial state
        this.state = {
            message: ''
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(this);
        // this.message = faker.lorem.words();

        // Update the state
        // This will NOT work:
        // this.state.message = faker.lorem.words()
        // Use setState instead
        // this.setState({
        //     message: faker.lorem.words()
        // })

        // this.setState({
        //     message: this.state.message + faker.lorem.words()
        // })

        this.setState((state, props) => {
            return {
                message: state.message + faker.lorem.words()
            };
        })
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                My random message is: 
                <p>
                    {this.state.message}
                </p>
            </div>
        )
    }
}

export default RandomMessage;