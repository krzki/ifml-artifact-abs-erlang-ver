import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button'

const Modal = props => {
  if (!props.isShow) {
    return <></>
  }

  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black/[0.3] "
      onClick={() => props.setShowModal(false)}
    >
      <div
        id="putih"
        className="flex justify-center items-center flex-col h-1/4 w-1/4 bg-white rounded-md px-4 py-8"
      >
        <div>{props.text ? props.text : 'Apakah anda yakin?'}</div>
        <div className="flex justify-evenly items-center mt-2.5 w-3/4">
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Modal
