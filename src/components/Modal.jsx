import Button from './Button'
import './styles/modal.style.css'

const Modal = ({ title, children, open, onClose, handleTryButton }) => {
  return (
    <div className="modal-root" style={{ display: open ? 'flex' : 'none' }}>
      <div className="modal-cover" onClick={onClose}></div>
      <div className="modal-body">
        <h2>{title}</h2>
        <div>{children}</div>
        <div className="modal-btns">
          <Button handleClick={onClose}>Cancel</Button>
          {handleTryButton ? (
            <Button handleClick={handleTryButton}>Try again</Button>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default Modal
