import React, { useEffect, useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import {useAuth} from 'commons/auth';
import { Button, Table, TableRow, TableCell, TableBody, TableHead, List }  from 'commons/components'

import AccountTable from '../components/AccountTable'
import getAccountData from '../services/getAccountData'

const AccountList = props => {
	const {checkPermission} = useAuth();
	const [account, setaccount] = useState()

  useEffect(() => {
		const fetchData = async () => {
			const { data: accountData } = await getAccountData()
			setaccount(accountData.data)
		}
		fetchData()
  	}, [])


  return (
    <div className="mx-auto w-full max-w-screen-xl prose p-6 flex flex-col prose">
      <div className="w-full flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-4">
      <h2 className="m-0 text-center">Account List</h2>
	  <div className="not-prose flex flex-col sm:flex-row justify-center items-center sm:gap-4">
        
        <Link to="/account/add">
        	<Button className="mt-2 sm:mt-0" variant="primary">Add Account</Button>
        </Link>
        
      </div>
	</div>
	<div className="not-prose">
		<TableView {...{ account }} />
    </div>
	</div>
  )
}

const TableView = ({ account }) => {
  return (
    <div className="card bg-base-100">
		<div className="card-body p-0 sm:p-8 border sm:border-none">
      <Table className={"table-fixed sm:table-auto"}>
		<TableHead>
          <TableRow>
            <TableCell id="idAccount" isHeading
            >Id Account</TableCell>
            <TableCell id="balance" isHeading
             isCurrency>Balance</TableCell>
            <TableCell isHiddenMobile></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {account &&
            account.map(accountItem => (
              <AccountTable 
                key={accountItem.id}
                accountItem={accountItem}
              />
            ))}
        </TableBody>
      </Table>
		</div>
    </div>
  )
}

export default AccountList

