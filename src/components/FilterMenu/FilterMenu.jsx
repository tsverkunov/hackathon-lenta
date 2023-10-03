import style from './FilterMenu.module.css'
import listIcon from '../../images/menu/list.svg'
import shopIcon from '../../images/menu/shop.svg'
import calendarIcon from '../../images/menu/calendar.svg'
import MenuWrapper from '../MenuWrapper/MenuWrapper'
import Categories from '../Categories/Categories'

export default function FilterMenu() {
  return (
    <form className={style.form} action='submit'>
      <MenuWrapper icon={shopIcon} title='Выбрать ТК'>
        <Categories />
      </MenuWrapper>
      <MenuWrapper icon={listIcon} title='Категории'>
        <Categories />
      </MenuWrapper>
      <MenuWrapper icon={calendarIcon} title='Выбрать период'>
        <Categories />
      </MenuWrapper>
    </form>
  )
}
