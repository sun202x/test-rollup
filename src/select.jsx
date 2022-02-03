import React from "react";

export default class Select extends React.Component {

    render() {
        return (
            <div className={`btn-group btn-group-sm btn-group-select btn-group-select-inline`}>
                <button className="btn btn-default dropdown-toggle">
                    {this.props.value}
                </button>
                <input 
                    type="text" 
                    className={`form-control select-direct-input hidden`} 
                    />
                <span className="select-arrow"></span>
            </div>
        );
    }
}