'use client';
import { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';

interface IProps {
  label: string;
  handleDateChange: (date: string) => void;
}

const MyDatePicker = ({ label, handleDateChange }: IProps) => {
  const [value, setValue] = useState<Dayjs | null>(null);

  const onDateChange = (newValue: Dayjs | null) => {
    if (newValue) {
      setValue(newValue);
      newValue && handleDateChange(newValue?.format('YYYY/MM/DD'));
    }
  };

  return (
    <div className="w-full">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker label={label} value={value} onChange={onDateChange} />
      </LocalizationProvider>
    </div>
  );
};

export default MyDatePicker;
