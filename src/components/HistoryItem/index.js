import './index.css'

const HistoryItem = props => {
  const {historyItem, onClickDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItem
  const deleteButtonClicked = () => {
    onClickDelete(id)
  }
  return (
    <li className="history-item">
      <div className="time-and-title">
        <p className="time">{timeAccessed}</p>
        <div className="logo-title-domain">
          <img src={logoUrl} alt="domain logo" className="domain-logo" />
          <div className="title-and-domain">
            <p className="title">{title}</p>
            <p className="domain-name">{domainUrl}</p>
          </div>
        </div>
      </div>
      <div>
        <button
          type="button"
          data-testid="delete"
          className="delete-btn"
          onClick={deleteButtonClicked}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
