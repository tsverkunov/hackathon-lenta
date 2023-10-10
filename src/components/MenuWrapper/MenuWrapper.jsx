import style from './MenuWrapper.module.css'

import PropTypes from 'prop-types';
export default function MenuWrapper({ children, icon, title }) {
  return (
    <details className={style.catDetails}>
      <summary className={style.level0}>
        <div
          className={style.catIcon}
          style={{ backgroundImage: `url(${icon})` }}
        />
        {title}
      </summary>
      {children}
    </details>
  )
}

MenuWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
