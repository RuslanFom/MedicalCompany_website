import React, { useState } from 'react';
import { Box, Grid, Button, Text, Select, VStack, Flex } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const Calendar = ({ onDateTimeSelect }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleDateSelect = (day) => {
    setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
  };

  const handleTimeSelect = (e) => {
    const time = e.target.value;
    setSelectedTime(time);
    onDateTimeSelect(selectedDate, time);
  };

  const renderCalendarDays = () => {
    const days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(
        <Button
          key={i}
          onClick={() => handleDateSelect(i)}
          bg={selectedDate?.getDate() === i ? 'teal.500' : 'white'}
          color={selectedDate?.getDate() === i ? 'white' : 'black'}
        >
          {i}
        </Button>
      );
    }
    return days;
  };

  return (
    <Box>
      <Flex justify="space-between" align="center" mb={4}>
        <Button onClick={handlePrevMonth}><ChevronLeftIcon /></Button>
        <Text>{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</Text>
        <Button onClick={handleNextMonth}><ChevronRightIcon /></Button>
      </Flex>
      <Grid templateColumns="repeat(7, 1fr)" gap={2}>
        {['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'].map(day => (
          <Text key={day} textAlign="center" fontWeight="bold">{day}</Text>
        ))}
        {Array(firstDayOfMonth).fill(null).map((_, index) => (
          <Box key={`empty-${index}`} />
        ))}
        {renderCalendarDays()}
      </Grid>
      {selectedDate && (
        <VStack mt={4} align="stretch">
          <Text>Verfügbare Zeiten:</Text>
          <Select placeholder="Wählen Sie eine Zeit" onChange={handleTimeSelect} value={selectedTime || ''}>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="12:00">12:00</option>
            <option value="13:00">13:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
            <option value="17:00">17:00</option>
            {/* Добавьте больше вариантов времени по необходимости */}
          </Select>
        </VStack>
      )}
    </Box>
  );
};

export default Calendar;