import dayjs from 'dayjs'
import style from './PeriodSelector.module.css'

import { DatePicker } from 'antd'

const locale = {
  lang: {
    locale: 'ru_RU',
    placeholder: 'Выберите дату',
    rangePlaceholder: ['Начальная дата', 'Конечная дата'],
    today: 'Сегодня',
    now: 'Сейчас',
    backToToday: 'Сегодня',
    ok: 'OK',
    clear: 'Очистить',
    month: 'Месяц',
    year: 'Год',
    timeSelect: 'Выбрать время',
    dateSelect: 'Выбрыть дату',
    monthSelect: 'Выбрать месяц',
    yearSelect: 'Выбрать год',
    decadeSelect: 'Выбрать десятилетие',
    yearFormat: 'YYYY',
    dateFormat: 'D/M/YYYY',
    dayFormat: 'D',
    dateTimeFormat: 'D/M/YYYY HH:mm:ss',
    monthFormat: 'MMMM',
    monthBeforeYear: true,
    previousMonth: 'Прошлый месяц (PageUp)',
    nextMonth: 'Следующий месяц (PageDown)',
    previousYear: 'Прошлый год (Control + left)',
    nextYear: 'Следующий год (Control + right)',
    previousDecade: 'Прошлое десятилетие',
    nextDecade: 'Следующее десятилетие',
    previousCentury: 'Прошлый век',
    nextCentury: 'Следующий век',
    shortWeekDays: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    shortMonths: [
      'Янв',
      'Фев',
      'Март',
      'Апр',
      'Май',
      'Июнь',
      'Июль',
      'Авг',
      'Сен',
      'Окт',
      'Ноя',
      'Дек',
    ],
    fullMonths: [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь',
    ],
  },
  timePickerLocale: {
    placeholder: 'Выбрать время',
  },
  dateFormat: 'DD.MM.YYYY',
  dateTimeFormat: 'DD.MM.YYYY HH:mm:ss',
  weekFormat: 'YYYY-wo',
  monthFormat: 'YYYY-MM',
}

const { RangePicker } = DatePicker

const rangePresets = [
  {
    label: '7 дней',
    value: [dayjs(), dayjs().add(7, 'd')],
  },
  {
    label: '14 дней',
    value: [dayjs(), dayjs().add(14, 'd')],
  },
  {
    label: '30 дней',
    value: [dayjs(), dayjs().add(30, 'd')],
  },
]

const onRangeChange = (dates, dateStrings) => {
  if (dates) {
    console.log('From: ', dates[0], ', to: ', dates[1])
    console.log('From: ', dateStrings[0], ', to: ', dateStrings[1])
  } else {
    console.log('Clear')
  }
}

export default function PeriodSelector() {
  return (
    <div className={style.container}>
      <RangePicker
        className={style.picker}
        format='DD.MM.YYYY'
        defaultValue={[dayjs(), dayjs()]}
        presets={rangePresets}
        onChange={onRangeChange}
        locale={locale}
        size='large'
      />
    </div>
  )
}
