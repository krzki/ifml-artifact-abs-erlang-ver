import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from 'commons/auth';
import { Button, TableRow, TableCell, Modal } from 'commons/components';



const AccountTable = ({ accountItem }) => {
  const { checkPermission } = useAuth();



  return (
    <TableRow distinct={false}>
      {/* Data Binding Account Table Element*/}
      <TableCell
		
		>{accountItem?.id_account}</TableCell>
      <TableCell
		
		 isCurrency>{accountItem?.balance}</TableCell>
      <TableCell isHiddenMobile>
        <div class="btn-group gap-2">
          {/* View Element Event Account Table Element*/}
        </div>
      </TableCell>

    </TableRow>
  )
};

export default AccountTable;
