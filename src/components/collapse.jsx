import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

class Collapse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    toggle = () => {
        this.setState((prevState) => ({
            isOpen: !prevState.isOpen
        }));
    };

    render() {
        const { title, description, descriptionClassName } = this.props;
        const { isOpen } = this.state;

        return (
            <div className='wrapper'>
                <div className='collapse'>
                    <div className='item'>
                        <div className='title' onClick={this.toggle}>
                            <h2>{title}</h2>
                            <span className={`arrow ${isOpen ? 'open' : ''}`}>
                                <FontAwesomeIcon icon={faChevronDown} />
                            </span>
                        </div>
                        <div className={`description ${isOpen ? 'descriptionshow' : ''} ${descriptionClassName}`}>
                            {description}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Collapse;

