import React from "react";
import Select from "./select.jsx";

export const CalendarHeader = React.memo((props) => {
    const [year, setYear] = React.useState(props.monthDate.getFullYear());
    const [month, setMonth] = React.useState(props.monthDate.getMonth() + 1);

    const increaseMonth = (e) => {
        setMonth((+month + 1) % 13 || 1);
        setYear(+year + Math.floor(+month / 12));

        props.increaseMonth();
        e.preventDefault();
    }
    const decreaseMonth = (e) => {
        setMonth((+month - 1) || 12);
        setYear(+year - Number(month == 1));

        props.decreaseMonth();
        e.preventDefault();
    }

    const onChangeMonth = (e) => props.changeMonth(+e.value - 1);

    const onChangeYear = (e) => {
        props.changeYear(e.value);
        props.onChangeCalendarYear(e.value);
        setYear(e.value);
    }

    return (
        <div className="datepicker-header has-gap two-months">
            <div className="datepicker-prev">
                <a href="" onClick={decreaseMonth}>
                    <span className="fa fa-angle-left"></span>
                </a>
            </div>
            <div className="datepicker-next">
                <a href="" onClick={increaseMonth}>
                    <span className="fa fa-angle-right"></span>
                </a>
            </div>
            <div className="datepicker-title">
                <Select 
                    value={year}
                    onChange={onChangeYear}
                    />
                <Select
                    value={month}
                    onChange={onChangeMonth}
                    />
            </div>
        </div>
    );
});