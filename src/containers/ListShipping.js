import React, { Component } from 'react';
import { getAllShippings } from '../actions';
import { connect } from 'react-redux';

class ListShipping extends Component {
    componentDidMount() {
        this.props.getAllShippings();
    }

    render() {

        const {shipping_list} = this.props;

        return (
            <div className="container">
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
                        shipping_list.map( shipping => <tr key={shipping.id}>
                            <th scope="row">{shipping.name}</th>
                            <td>{shipping.weight}</td>
                            <td className="table-primary">{shipping.color}</td>
                            <td>{shipping.cost}</td>
                        </tr> )
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
