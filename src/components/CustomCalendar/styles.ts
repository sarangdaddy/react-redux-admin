import { styled } from 'styled-components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export const CalendarBox = styled.div<{
  $isMobile: boolean;
}>`
  width: ${(props) => (props.$isMobile ? '290px' : '330px')};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyleCalendar = styled(Calendar)`
  max-width: 100%;
  border: none;
  padding: 5px;

  .react-calendar__navigation {
    color: ${(props) => props.theme.colors.darkSkyBlue};
    display: flex;
    height: 24px;
    margin-bottom: 1em;
  }

  .react-calendar__navigation button {
    font-size: 16px;
    font-weight: 500;
    min-width: 24px;
    color: ${(props) => props.theme.colors.darkBlue};
    background-color: transparent;
  }

  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: ${(props) => props.theme.colors.darkSkyBlue};
  }

  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.15em;
  }

  .react-calendar__month-view__weekdays__weekday abbr {
    text-decoration: none;
  }

  .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
    padding: 1.2em 0.5em;
  }

  .react-calendar__tile--hasActive {
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.darkSkyBlue};
    border-radius: 5px;
  }

  .react-calendar__tile--active {
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.darkSkyBlue};
    border-radius: 7px;
  }

  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background-color: ${(props) => props.theme.colors.darkSkyBlue};
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background-color: ${(props) => props.theme.colors.darkSkyBlue};
  }

  .react-calendar__month-view__weekdays__weekday {
    color: ${(props) => props.theme.colors.darkSkyBlue};
    font-size: 14px;
    font-weight: 400;
    line-height: 17.5px;
  }

  .react-calendar__navigation:hover {
    background-color: transparent;
  }

  .react-calendar__month-view__days__day--weekend {
    color: ${(props) => props.theme.colors.black};
  }

  .react-calendar__tile--now {
    background: none;
  }

  .react-calendar__tile:hover {
    background-color: ${(props) => props.theme.colors.darkSkyBlue};
  }

  .react-calendar__tile {
    border-radius: 10px;
  }

  .react-calendar__tile--disabled:hover {
    background-color: transparent;
  }

  .react-calendar__tile:disabled {
    background-color: transparent;
  }

  .react-calendar__navigation button:hover {
    background-color: transparent;
  }

  .react-calendar__navigation
    button.react-calendar__navigation__label:enabled:hover,
  .react-calendar__navigation
    button.react-calendar__navigation__label:enabled:focus,
  .react-calendar__navigation
    button.react-calendar__navigation__prev2-button:enabled:hover,
  .react-calendar__navigation
    button.react-calendar__navigation__prev2-button:enabled:focus,
  .react-calendar__navigation
    button.react-calendar__navigation__prev-button:enabled:hover,
  .react-calendar__navigation
    button.react-calendar__navigation__prev-button:enabled:focus {
    background-color: transparent;
  }

  .react-calendar__year-view__months__month {
    color: ${(props) => props.theme.colors.darkSkyBlue};
  }

  .react-calendar__year-view__months__month:not([disabled]):hover {
    color: ${(props) => props.theme.colors.white};
  }
`;
