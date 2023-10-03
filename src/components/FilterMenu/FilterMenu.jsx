import style from './FilterMenu.module.css'

const cats = ['Кулинария', 'Хлеб', 'Выпечка', 'Напитки', 'Быстрое питание']
const subcats = ['Горячие блюда', 'Гриль', 'Порционные блюда', 'Соусы']
const products = [
  'Крылышки куриные гриль',
  'Окорочка куриные гриль',
  'Голень куриная гриль',
  'Ципленок табака',
  'Голень по-грузински',
]

export default function FilterMenu() {
  return (
    <form className={style.form} action='submit'>
      <details className={style.catDetails}>
        <summary className={style.level0}>
          <div className={style.catIcon} />
          Категории
        </summary>
        <ul className={style.catList}>
          {cats.map(cat => (
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
                              <label
                                className={style.prodLabel}
                                htmlFor={product}
                              >
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
          ))}
        </ul>
      </details>
      {/* <details className={style.catDetails}>
        <summary className={style.category}>
          <div className={style.catIcon} />
          Категории
        </summary>
        <ul className={style.catList}>
          {cats.map(cat => (
            <li key={cat}>{cat}</li>
          ))}
        </ul>
      </details> */}
    </form>
  )
}
