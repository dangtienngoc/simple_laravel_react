import React from 'react'
import reactCSS from 'reactcss'
import { CirclePicker } from 'react-color'

const colors      = ['#0000FF', '#FF0000', '#00FFFF'];
const color_names = ['Blue', 'Red', 'Cyan'];

class BlockPickerComponent extends React.Component {
    state = {
        displayColorPicker: false,
    };

    handleClick = () => {
        this.setState({displayColorPicker: !this.state.displayColorPicker})
    };

    handleClose = () => {
        this.setState({displayColorPicker: false})
    };

    handleChange = (color) => {

        const hex = color.hex;

        if (hex.toUpperCase() === "#0000FF") {
            return;
        }

        this.props.onChanged({
            target: {
                name: 'color',
                value: color.rgb
            }
        });
    };

    render() {

        const {color} = this.props;

        const styles = reactCSS({
            'default': {
                color: {
                    width: '36px',
                    height: '14px',
                    borderRadius: '2px',
                    background: `rgba(${ color.r }, ${ color.g }, ${ color.b }, ${ color.a })`,
                },
                swatch: {
                    padding: '5px',
                    background: '#fff',
                    borderRadius: '1px',
                    boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
                    display: 'inline-block',
                    cursor: 'pointer',
                },
                popover: {
                    position: 'absolute',
                    zIndex: '2',
                },
                cover: {
                    position: 'fixed',
                    top: '0px',
                    right: '0px',
                    bottom: '0px',
                    left: '0px',
                },
            },
        });

        return (
            <div>
                <div style={styles.swatch} onClick={this.handleClick}>
                    <div style={styles.color}/>
                </div>
                {this.state.displayColorPicker ? <div className="picker" style={styles.popover}>
                    <div style={styles.cover} onClick={this.handleClose}/>
                    <CirclePicker color={this.props.color} colors={colors} onChange={this.handleChange}/>
                </div> : null}

            </div>
        )
    }
}

export default BlockPickerComponent;