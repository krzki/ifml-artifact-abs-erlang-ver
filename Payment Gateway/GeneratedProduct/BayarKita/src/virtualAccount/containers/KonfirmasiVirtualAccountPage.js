import { Button } from 'commons/components'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import KonfirmasiVirtualAccount from '../components/KonfirmasiVirtualAccount'
// import getdata from '../services/getdata'
import { useLocation } from 'react-router-dom'

const KonfirmasiVirtualAccountPage = (props) => {
	const { state } = useLocation()
	const [data, setdata] = useState()
	const {  } = useParams()

	useEffect(() => {
		// const fetchData = async () => {
		// 	const { data: data } = await getdata({ invalid })
		// 	setdata(data.data)
		// }
		// fetchData()
		setdata(state)
  	}, [])

	return data ? (
		<div className="prose max-w-screen-lg mx-auto p-6">
      		<h2>Konfirmasi Virtual Account</h2>
			<KonfirmasiVirtualAccount {...{ data }} />
		</div>
	) : <></>
}

export default KonfirmasiVirtualAccountPage

