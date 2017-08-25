import React, { Component } from 'react';

import ColorPicker from '../components/SketchPicker';

import { Link } from 'react-router-dom';

import contries from '../contries.json';

import { submitData } from "../actions"

import { connect } from 'react-redux';

class AddShipping extends Component {

    constructor(props) {
        super(props);

        this.state = {
            color: {
                r: '255',
                g: '255',
                b: '255',
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

        const {color, weight, name} = this.state;

        const {errors} = this.props;

        return (
            <div className="container">
                <form onSubmit={this._onSubmit}>

                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input onChange={this._onChange} type="text" className="form-control" name="name" id="name"
                               placeholder="Enter name" value={name}/>
                        {errors.name && errors.name.length > 0 &&
                        <small className="form-text text-danger">{errors.name.join(',')}</small>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="weight">Weight</label>
                        <input onChange={this._onChange} type="text" className="form-control" name="weight" id="weight"
                               placeholder="Weight" value={weight}/>
                        {errors.weight && errors.weight.length > 0 &&
                        <small className="form-text text-danger">{errors.weight.join(',')}</small>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="weight">Box Color</label>
                        <ColorPicker onChanged={this._onChange} color={color}/>
                        {errors.color && errors.color.length > 0 &&
                        <small className="form-text text-danger">{errors.color.join(',')}</small>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="country">Destination Country</label>
                        <select onChange={this._onChange} name="country" className="form-control" id="country">
                            <option> Select Country</option>
                            {contries.map(item => <option value={item.id}
                                                          key={item.id}>{`${item.name} (${item.value})`}</option>)}
                        </select>
                        {errors.country && errors.country.length > 0 &&
                        <small className="form-text text-danger">{errors.country.join(',')}</small>}
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to="#/listboxes">Listboxs</Link>
                </form>
            </div>
        );
    }
}

const mapStateToProps = ({shipping: {errors}}) => ({
    errors
});

const mapDisatchToProps = (dispatch) => ({
    submitData: shipping => dispatch(submitData(shipping))
});

export default connect(mapStateToProps, mapDisatchToProps)(AddShipping);