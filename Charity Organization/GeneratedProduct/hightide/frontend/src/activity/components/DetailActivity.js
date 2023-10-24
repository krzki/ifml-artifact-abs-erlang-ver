import React, { useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import { useAuth } from 'commons/auth'
import { Button, Detail, VisualizationAttr, Modal } from 'commons/components'

import deleteActivity from '../services/deleteActivity.js'

const DetailActivity = ({ objectDetailActivity }) => {
  const { checkPermission } = useAuth()
  const navigate = useNavigate()
  const [
    showModalKonfirmasiHapusActivity,
    setShowModalKonfirmasiHapusActivity,
  ] = React.useState(false)

  const ubah = async () => {
    navigate('/activity/ubah?' + `id=${objectDetailActivity.id}`)
  }

  const hapus = async () => {
    await deleteActivity({
      id: objectDetailActivity.id,
    })
    navigate('/activity')
  }

  return (
    <div className="card-body mx-auto w-full bg-white shadow-xl card not-prose">
      {/* Data Binding Activity Data */}
      <VisualizationAttr
        label="URL Gambar Program"
        content={objectDetailActivity?.logoUrl}
      />
      <div className="grid grid-cols-2">
        <VisualizationAttr label="Nama" content={objectDetailActivity?.name} />
        <VisualizationAttr
          label="Target"
          content={objectDetailActivity?.target}
        />
        <VisualizationAttr
          label="Partner"
          content={objectDetailActivity?.partner}
        />
        <VisualizationAttr
          label="Tanggal Pelaksanaan"
          content={objectDetailActivity?.executionDate}
        />
      </div>
      <VisualizationAttr
        label="Deskripsi"
        content={objectDetailActivity?.description}
      />
      <div class="card-actions justify-end">
        {/* View Element Event Activity Element*/}
        {checkPermission('UpdateProgram') && (
          <Button variant="secondary" onClick={ubah}>
            Ubah
          </Button>
        )}
        {checkPermission('DeleteProgram') && (
          <Button
            variant="tertiary"
            onClick={() => setShowModalKonfirmasiHapusActivity(true)}
          >
            Hapus
          </Button>
        )}
      </div>
      <Modal isShow={showModalKonfirmasiHapusActivity}>
        <Link to="">
          <Button
            variant="tertiary"
            onClick={() => setShowModalKonfirmasiHapusActivity(false)}
          >
            Batal
          </Button>
        </Link>
        <Button variant="danger" onClick={hapus}>
          Hapus
        </Button>
      </Modal>
    </div>
  )
}

export default DetailActivity
