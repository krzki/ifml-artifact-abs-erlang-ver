import React from 'react'
import { Link } from 'react-router-dom'

import { useAuth } from 'commons/auth'
import { Button, ListItem, VisualizationAttr } from 'commons/components';

const AccountCard = ({ accountItem }) => {
  const { checkPermission } = useAuth();

  return (
    <ListItem>
      {/* Data Binding Account Card Element */}
      <div className="card-body">
		<VisualizationAttr label='Id Account' content={accountItem?.id_account}/>
		<VisualizationAttr label='Balance' content={accountItem?.balance} isCurrency/>
      <div className="card-actions justify-end">
        {/* View Element Event Account Card Element*/}
      </div>
      </div>
    </ListItem>
  )
};

export default AccountCard;
