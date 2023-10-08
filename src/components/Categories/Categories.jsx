import { useSelector, useDispatch } from 'react-redux'
import style from '../FilterMenu/FilterMenu.module.css'

export default function Categories() {
  const categories = useSelector(state => state.dataReducer.categories)

  return (
    <ul className={style.catList}>
      {/* {cats.map(cat => (
        <li key={cat}>
          <details className={style.catDetails}>
            <summary className={style.level1}>{cat}</summary>
            <ul className={style.catList}>
              {subcats.map(subcat => (
                <li key={subcat}>
                  <details className={style.catDetails}>
                    <summary className={style.level2}>
                      <span className={style.level2Text}>{subcat}</span>
                    </summary>
                    <ul className={style.prodList}>
                      <li key='select-all'>
                        <input
                          className={style.prodCheckbox}
                          type='checkbox'
                          name='select-all'
                          id='select-all'
                        />
                        <label
                          className={`${style.prodLabel} ${style.selectAll}`}
                          htmlFor='select-all'
                        >
                          Выбрать всю категорию
                        </label>
                      </li>
                      {products.map(product => (
                        <li key={product}>
                          <input
                            className={style.prodCheckbox}
                            type='checkbox'
                            name={product}
                            id={product}
                          />
                          <label className={style.prodLabel} htmlFor={product}>
                            {product}
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
      ))} */}
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
                          name='select-all'
                          id='select-all'
                        />
                        <label
                          className={`${style.prodLabel} ${style.selectAll}`}
                          htmlFor='select-all'
                        >
                          Выбрать всю категорию
                        </label>
                      </li>
                      {Object.keys(categories[group][category]).map(
                        subcategory => (
                          <li key={subcategory}>
                            <input
                              className={style.prodCheckbox}
                              type='checkbox'
                              name={subcategory}
                              id={subcategory}
                            />
                            <label
                              className={style.prodLabel}
                              htmlFor={subcategory}
                            >
                              {subcategory}
                            </label>
                          </li>
                        )
                      )}
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
