import { useSelector, useDispatch } from 'react-redux'
import { addSelectedShops, removeSelectedShops } from '../../redux/dataReducer'
import style from '../FilterMenu/FilterMenu.module.css'

export default function MultiSelect() {
  const shops = useSelector(state => state.dataReducer.shops)
  const selectedShops = useSelector(state => state.dataReducer.selectedShops)
  const dispatch = useDispatch()

  return (<ul className={style.prodList}>
    {
      shops.map(
        shop => <li key={shop}>
          <input
            className={style.prodCheckbox}
            type='checkbox'
            name={shop}
            id={shop}
            onChange={
              e => {
                const checked = e.target.checked
                const shop = e.target.name
                if (checked) {
                  dispatch(addSelectedShops([shop]))
                } else {
                  dispatch(removeSelectedShops([shop]))
                }
              }
            }
            checked={
              selectedShops.includes(shop)
            }
          />
          <label
            className={style.prodLabel}
            style={{ paddingLeft: '62px'}}
            htmlFor={shop}
          >
            {shop}
          </label>
        </li>
      )
    }
  </ul>)
}
