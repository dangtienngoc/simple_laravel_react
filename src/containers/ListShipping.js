import React, { Component } from 'react';
import { getAllShippings } from '../actions';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import contries from '../contries.json';

class ListShipping extends Component {
    componentDidMount() {
        this.props.getAllShippings();
    }

    convertRgba(color) {
        return `rgba(${ color.r }, ${ color.g }, ${ color.b }, ${ color.a })`;
    }

    caculatorCost(country_id, weight) {
        const country = contries.find(c => c.id.toString() === country_id.toString());
        return country.value * weight;
    }

    render() {

        const {shipping_list} = this.props;

        return (
            <div className="container">
                <Link to="#/addbox">Add box</Link>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Receiver</th>
                        <th>Weight</th>
                        <th>Box​ ​color</th>
                        <th>Shipping​ ​cost</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        shipping_list.map(shipping => <tr key={shipping.id}>
                            <th scope="row">{shipping.name}</th>
                            <td>{`${shipping.weight} kg`}</td>
                            <td className="table-primary"
                                style={{backgroundColor: this.convertRgba(JSON.parse(shipping.color))}}></td>
                            <td>{`${this.caculatorCost(shipping.country, shipping.weight)} SEK`}</td>
                        </tr>)
                    }

                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = ({shipping_list}) => ({
    shipping_list
});

const mapDispatchToProps = (dispatch) => ({
    getAllShippings: () => dispatch(getAllShippings())
});

export default connect(mapStateToProps, mapDispatchToProps)(ListShipping);
