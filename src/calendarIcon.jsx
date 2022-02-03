import React from "react";
import DatePicker from "react-datepicker";
import { CalendarHeader } from "./calendarHeader.jsx";

const CalendarFooter = () => {
    const onClick = (e) => {
        e.preventDefault();
    }

    return (
        <div className="datepicker-footer">
            <div className="pull-left">
                <a href="" className="btn-today" onClick={onClick}>오늘</a>
            </div>
        </div>
    );
}

export const CalendarIcon = (props) => {
    const [startDate, setStartDate] = React.useState(new Date());
    const [open, setIsOpen] = React.useState(false);

    const onChange = (date, e) => {
        setStartDate(date);
        setIsOpen(false);
    }

    const onClickOutside = (e) => {
        const isLayer = e.target.closest('ul.dropdown-menu');

        if (!isLayer) {
            setIsOpen(false);
        }
    }

    const closeOnScroll = (e) => {
        setIsOpen(false);
        return true;
    }

    const dayClassName = (date) => {
        // @TODO add today css
        return "";
    }

    const renderCustomHeader = (param) => {
        return (
            <CalendarHeader 
                value={startDate}
                {...param}
                />
        );
    }

    const CalIcon = React.forwardRef((props, ref) => {
        const onClick = (e) => setIsOpen(!open);
        return (
            <div className="btn-datepicker-toggle" onClick={onClick} ref={ref}></div>
        );
    });

    return (
        <DatePicker 
            className={props.display_state === false ? "hide" : ""}
            selected={startDate}
            open={open}
            showPopperArrow={false}
            portalId={"#portal-calendar"}
            popperPlacement={"bottom-end"}
            onChange={onChange}
            onClickOutside={onClickOutside}
            closeOnScroll={closeOnScroll}
            renderCustomHeader={renderCustomHeader}
            dayClassName={dayClassName}
            customInput={<CalIcon />}
            fixedHeight
            disabledKeyboardNavigation
            >
            <CalendarFooter />
        </DatePicker>
    );
}
