import * as S from './styles';

type ValuePiece = Date | null;

export type Value = ValuePiece | [ValuePiece, ValuePiece];

interface CustomCalendarProps {
  onDateChange: (date: Date) => void;
}

const CustomCalendar = ({ onDateChange }: CustomCalendarProps) => {
  const today = new Date();

  const handleDateChange = (value: Value) => {
    onDateChange(value as Date);
  };

  return (
    <S.CalendarBox>
      <S.StyleCalendar
        locale="en-US"
        onChange={handleDateChange}
        maxDate={today}
        minDetail="decade"
        formatShortWeekday={(_, date) =>
          ['S', 'M', 'T', 'W', 'T', 'F', 'S'][date.getUTCDay()]
        }
      />
    </S.CalendarBox>
  );
};

export default CustomCalendar;
