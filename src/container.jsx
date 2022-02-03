import React from 'react';
import ReactDOM from 'react-dom'
import { CalendarIcon } from './calendarIcon.jsx';
import { CalendarTwo } from './calendarTwo.jsx';

export default class Container extends React.Component {

    render() {
        return (
            <div className="wrapper-frame-body">
                <div className="page page-fluid wrapper-form-state-1 ">
                    <div className="contents">
                        <ul className="wrapper-form wrapper-form-state-1">
                            <li>
                                <div className="title">기타일자형</div>
                                <div className="form">
                                    <div className="control-set">
                                        <div className="control">
                                            <div className="wrapper-datepicker">
                                                <button className="btn btn-default btn-selectbox btn-group-select-inline"></button>
                                                <input type="text" className="form-control select-direct-input hidden"value="" />
                                                <button className="btn btn-default btn-selectbox btn-group-select-inline"></button>
                                                <input type="text" className="form-control select-direct-input hidden"value="" />
                                                <input id="6QBUGTRSK8B3EAH" autocomplete="off" className="form-control " placeholder="기타일자형" value="" />
                                                {/* <CalendarIcon /> */}
                                                <CalendarTwo />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Container />, document.querySelector("#root"));