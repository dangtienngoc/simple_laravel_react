import React, { Component } from 'react';

import ColorPicker from '../components/SketchPicker';

import contries from '../contries.json';

import { submitData } from "../actions"

import { connect } from 'react-redux';

class AddShipping extends Component {

    constructor(props) {
        super(props);

        this.state = {
            color: {
                r: '241',
                g: '112',
                b: '19',
                a: '1',
            },
            weight: 0,
            name: '',
            country: ''
        };

        this._onChange = this._onChange.bind(this);
        this._onSubmit = this._onSubmit.bind(this);
    }

    _onChange(e) {
        const name  = e.target.name;
        const value = e.target.value;

        console.log(name, value);

        this.setState({
            [name]: value,
        });

    }

    _onSubmit(e) {
        e.preventDefault();

        this.props.submitData({
            ...this.state,
            color: JSON.stringify(this.state.color)
        });
    }

    render() {

        const {color, weight, name, country} = this.state;

        return (
            <div className="container">
                <form onSubmit={this._onSubmit}>

                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input onChange={this._onChange} type="text" className="form-control" name="name" id="name"
                               placeholder="Enter name" value={name}/>
                        <small className="form-text text-muted">Bug</small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="weight">Weight</label>
                        <input onChange={this._onChange} type="text" className="form-control" name="weight" id="weight"
                               placeholder="Weight" value={weight}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="weight">Box Color</label>
                        <ColorPicker value={color}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="country">Destination Country</label>
                        <select onChange={this._onChange} name="country" className="form-control" id="country">
                            <option> Select Country</option>
                            {contries.map(item => <option value={item.id}
                                                          key={item.id}>{`${item.name} (${item.value})`}</option>)}
                        </select>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

const mapDisatchToProps = (dispatch) => ({
    submitData: shipping => dispatch(submitData(shipping))
});

export default connect(null, mapDisatchToProps)(AddShipping);