import React, { lazy, Suspense, useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import './styles.main.css'
import { ErrorBoundary } from 'react-error-boundary'

const Info = lazy(() => import('../components/Info'))
const NewInfo = lazy(() => import('../components/NewInfo'))
const Modal = lazy(() => import('../components/Modal'))

const InfoNotFound = ({ error, resetErrorBoundary }) => {
  const [open, setOpen] = useState(true)

  const handleIgnoreErrors = () => {
    resetErrorBoundary()
    setOpen(false)
  }

  return (
    <>
      {error.name === 'ChunkLoadError' ? (
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Error found"
          handleTryButton={handleIgnoreErrors}
        >
          The new version has been updated
        </Modal>
      ) : null}
    </>
  )
}

const Main = () => {
  const [items, setItems] = useState([])
  const [value, setValue] = useState('')
  const [viewDetails, setViewDetails] = useState(null)
  const [open, setOpen] = useState(false)
  const [isIgnoreErrors, setIsIgnoreErrors] = useState(false)

  const handleAddItem = () => {
    if (!value) return
    const task = {
      id: new Date().toLocaleString(),
      name: value,
      createdAt: new Date().toLocaleString(),
    }

    setItems((prev) => [...prev, task])
    setValue('')
  }

  const handleDeleteItem = (id) =>
    setItems((prev) => prev.filter((item) => item.id !== id))

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleOpenModal = (item) => {
    setOpen(true)
    setViewDetails(item)
  }

  const handleCloseModal = () => {
    setOpen(false)
    setViewDetails(null)
  }

  return (
    <>
      <div className="container">
        <div className="input-box">
          <Input
            value={value}
            placeholder="Enter task name"
            handleChange={handleChange}
          />
          <Button handleClick={handleAddItem}>Add</Button>
        </div>
        <table className="items">
          <tbody>
            {items.map((item, index) => (
              <tr key={item.id} className="list-item">
                <td>{`${index + 1}. ${item.name}`}</td>

                <td>
                  <Button handleClick={() => handleOpenModal(item)}>
                    View more details
                  </Button>
                </td>

                <td>
                  <Button handleClick={() => handleDeleteItem(item.id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ErrorBoundary
        FallbackComponent={InfoNotFound}
        onReset={() => setIsIgnoreErrors(true)}
      >
        <Suspense fallback={<div>Loading...</div>}>
          {open ? (
            <Modal open={open} onClose={handleCloseModal} title="Task details">
              {!isIgnoreErrors ? (
                <NewInfo
                  title={viewDetails?.name}
                  date={viewDetails?.createdAt}
                />
              ) : (
                <Info title={viewDetails?.name} date={viewDetails?.createdAt} />
              )}
            </Modal>
          ) : null}
        </Suspense>
      </ErrorBoundary>
    </>
  )
}

export default Main
