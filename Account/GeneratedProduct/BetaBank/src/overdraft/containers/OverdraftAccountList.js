import React, { useEffect, useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import {useAuth} from 'commons/auth';
import { Button, Table, TableRow, TableCell, TableBody, TableHead, List }  from 'commons/components'

import AccountTable from '../components/AccountTable'
import getOverdraftData from '../services/getOverdraftData'

const OverdraftAccountList = props => {
	const {checkPermission} = useAuth();
	const [overdraft, setoverdraft] = useState()

  useEffect(() => {
		const fetchData = async () => {
			const { data: overdraftData } = await getOverdraftData()
			setoverdraft(overdraftData.data)
		}
		fetchData()
  	}, [])


  return (
    <div className="mx-auto w-full max-w-screen-xl prose p-6 flex flex-col prose">
      <div className="w-full flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-4">
      <h2 className="m-0 text-center">OverdraftAccountList</h2>
	</div>
	<div className="not-prose">
		<TableView {...{ overdraft }} />
    </div>
	</div>
  )
}

const TableView = ({ overdraft }) => {
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
            <TableCell id="overdraftLimit" isHeading
             isCurrency>OverdraftLimit</TableCell>
            <TableCell isHiddenMobile></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {overdraft &&
            overdraft.map(accountItem => (
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

export default OverdraftAccountList


