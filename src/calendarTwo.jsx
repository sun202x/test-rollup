import React, { useEffect, useRef, useState } from "react";
import ReactDOM from 'react-dom'
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

// export const CalendarTwo = () => {
//     const ref = useRef();
//     const [open, setOpen] = useState(false);
//     const [position, setPosition] = useState({});

//     const onClick = (e) => {
//         if (!open && ref.current) {
//             const controlSet = ref.current.closest(".control-set");
//             const { top, left, height } = controlSet.getBoundingClientRect();

//             setPosition({
//                 top: top + height,
//                 left: left
//             });
//         }

//         setOpen(!open);
//     }

//     const Portal = ({ children }) => {
//         const globalPortal = document.getElementById("global-portal");
//         return ReactDOM.createPortal(children, globalPortal)
//     }

//     return (
//         <div>
//             <div ref={ref} className="btn-datepicker-toggle" onClick={onClick}></div>
//             <Portal>
//                 <Calendars position={position} display={open} />
//             </Portal>
//         </div>
//     );
// }

// export const Calendars = (props) => {
//     const [startDate, setStartDate] = React.useState(new Date());

//     const onChange = (date, e) => {
//         setStartDate(date);
//     }

//     const renderCustomHeader = (param) => {
//         return (
//             <CalendarHeader 
//                 value={startDate}
//                 {...param}
//                 />
//         );
//     }

//     return (
//         <div className={`position-fixed ${props.display ? "" : "hide"}`} style={props.position}>
//             <DatePicker
//                 showPopperArrow={false}
//                 onChange={onChange}
//                 renderCustomHeader={renderCustomHeader}
//                 fixedHeight
//                 disabledKeyboardNavigation
//                 selected={startDate}
//                 inline
//                 >
//                 <CalendarFooter />
//             </DatePicker>
//             <DatePicker 
//                 showPopperArrow={false}
//                 onChange={onChange}
//                 renderCustomHeader={renderCustomHeader}
//                 fixedHeight
//                 disabledKeyboardNavigation
//                 selected={startDate}
//                 inline
//                 >
//                 <CalendarFooter />
//             </DatePicker>
//         </div>
//     );
// }

export const CalendarTwo = (props) => {
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
            monthSelectedIn={3}

            monthsShown={2}
            >
            <CalendarFooter />
        </DatePicker>
    );
}
