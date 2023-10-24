import React, { useEffect, useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import {useAuth} from 'commons/auth';
import { Button, Table, TableRow, TableCell, TableBody, TableHead, List }  from 'commons/components'

import AccountCard from '../components/AccountCard'
import getAccountData from '../services/getAccountData'

const AccountList = props => {
	const {checkPermission} = useAuth();
	const [account, setaccount] = useState()

  const data = [
    {id_account:1335, balance:200000},
    {id_account:1348, balance:450000},
    {id_account:1665, balance:75000},
    {id_account:1753, balance:25000}
  ]

  useEffect(() => {
		// const fetchData = async () => {
		// 	const { data: accountData } = await getAccountData()
		// 	setaccount(accountData.data)
		// }
		// fetchData()
    setaccount(data)
  	}, [])



  return (
    <div className="mx-auto w-full max-w-screen-xl prose p-6 flex flex-col prose">
      <div className="w-full flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-4">
      <h2 className="m-0 text-center">Account List</h2>
	  <div className="not-prose flex flex-col sm:flex-row justify-center items-center sm:gap-4">
        {account && `Terdapat ${account.length} Account`}
        <Link to="/account/add">
        	<Button className="mt-2 sm:mt-0" variant="primary">Add Account</Button>
        </Link>
        
      </div>
	</div>
	<div className="not-prose">
		<GridView {...{ account }} />
    </div>
	</div>
  )
}

const GridView = ({ account }) => {
  return (
    <List column="4">
      {account &&
        account.map(accountItem => (
          <AccountCard 
			key={accountItem.id}			 
			accountItem={accountItem}
		  />
        ))}
    </List>
  )
}

export default AccountList

