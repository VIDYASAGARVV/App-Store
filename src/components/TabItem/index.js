// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, setCategory, isActive} = props
  const {tabId, displayText} = tabDetails
  const selectClassName = isActive ? 'highlight' : 'normal'

  const changeCategory = () => {
    setCategory(tabId)
  }

  return (
    <li className="tab-list-item">
      <button
        type="button"
        className={selectClassName}
        onClick={changeCategory}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
