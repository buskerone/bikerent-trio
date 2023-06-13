import { useState } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import { StaticDateRangePicker } from '@mui/x-date-pickers-pro/StaticDateRangePicker'

const BikeRentDatePickerComponent = () => {
  const [rentPeriod, setRentPeriod] = useState<[Dayjs, Dayjs]>([dayjs(), dayjs().add(1, 'day')])

  return (
    <div>
      <h1>Select period</h1>
      <StaticDateRangePicker
        calendars={1}
        value={rentPeriod}
        onChange={(value) => setRentPeriod(value as [Dayjs, Dayjs])}
      />
    </div>
  )
}

export default BikeRentDatePickerComponent
