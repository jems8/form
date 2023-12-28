import React from 'react'
import CreateEditUserForm from './CreateEditEmployeeForm'
import { Box } from '@mui/material'
import { commons } from '../../constants/commons'

const {CREATE} = commons;
const CreateUsersPage = () => {
  return (
    <Box sx={{padding:20}}>
      <CreateEditUserForm actionType={CREATE}/>
    </Box>
  )
}

export default CreateUsersPage;