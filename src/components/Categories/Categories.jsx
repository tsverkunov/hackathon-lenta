import { useSelector, useDispatch } from 'react-redux'
import {
  addSelectedCategories,
  removeSelectedCategories,
} from '../../redux/dataReducer'
import style from '../FilterMenu/FilterMenu.module.css'

export default function Categories() {
  const categories = useSelector(state => state.dataReducer.categories)
  const selectedCategories = useSelector(
    state => state.dataReducer.selectedCategories
  )
  const dispatch = useDispatch()

  return (
    <ul className={style.catList}>
      {Object.keys(categories).map(group => (
        <li key={group}>
          <details className={style.catDetails}>
            <summary className={style.level1}>{group}</summary>
            <ul className={style.catList}>
              {Object.keys(categories[group]).map(category => (
                <li key={category}>
                  <details className={style.catDetails}>
                    <summary className={style.level2}>
                      <span className={style.level2Text}>{category}</span>
                    </summary>
                    <ul className={style.prodList}>
                      <li key='select-all'>
                        <input
                          className={style.prodCheckbox}
                          type='checkbox'
                          name={category}
                          id={category}
                          onChange={
                            // select all of this category subcategories and add them to selectedCategories
                            e => {
                              const subcategories = categories[group][category]
                              const checked = e.target.checked

                              if (checked) {
                                dispatch(addSelectedCategories(subcategories))
                              } else {
                                dispatch(
                                  removeSelectedCategories(subcategories)
                                )
                              }
                            }
                          }
                          checked={
                            // check if all of this category subcategories are in selectedCategories
                            categories[group][category].every(subcategory =>
                              selectedCategories.includes(subcategory)
                            )
                          }
                        />
                        <label
                          className={`${style.prodLabel} ${style.selectAll}`}
                          htmlFor={category}
                        >
                          Выбрать всю категорию
                        </label>
                      </li>
                      {categories[group][category].map(subcat => (
                        <li key={subcat}>
                          <input
                            className={style.prodCheckbox}
                            type='checkbox'
                            name={subcat}
                            id={subcat}
                            onChange={
                              // add this subcategory to selectedCategories
                              e => {
                                const subcategory = e.target.name
                                const checked = e.target.checked

                                if (checked) {
                                  dispatch(addSelectedCategories([subcategory]))
                                } else {
                                  dispatch(
                                    removeSelectedCategories([subcategory])
                                  )
                                }
                              }
                            }
                            checked={
                              // check if this subcategory is in selectedCategories
                              selectedCategories.includes(subcat)
                            }
                          />
                          <label className={style.prodLabel} htmlFor={subcat}>
                            {subcat}
                          </label>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ))}
            </ul>
          </details>
        </li>
      ))}
    </ul>
  )
}
