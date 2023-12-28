import React, { useState } from "react";
import {
  TextValidator,
  ValidatorForm,
} from "react-material-ui-form-validator";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";

import {
  initialUsersFormData,
} from "../../constants/userConstants";

import { styles } from "./styles";

const CreateEditAdminForm = (props) => {
  const { actionType } = props;
  const [formData, setFormData] = useState(initialUsersFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.table(formData);
    setFormData(initialUsersFormData);
  };

  return (
    <ValidatorForm onSubmit={handleSubmit} sx={styles.formRoot}>
      <Typography variant="h5" textAlign={"left"}>
        {actionType === "create" ? "Create Admin Form" : "Edit Admin Form"}
      </Typography>
      <Grid container spacing={3} marginY={2}>
        <Grid item xs={4}>
          <TextValidator
            label="First Name"
            type="text"
            name="firstName"
            fullWidth
            value={formData?.firstName}
            onChange={handleChange}
            validators={["required"]}
            errorMessages={["this field is required"]}
          />
        </Grid>
        <Grid item xs={4}>
          <TextValidator
            label="Middle Name"
            type="text"
            name="middleName"
            fullWidth
            value={formData?.middleName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={4}>
          <TextValidator
            label="Last Name"
            type="text"
            name="lastName"
            fullWidth
            value={formData?.lastName}
            onChange={handleChange}
            validators={["required"]}
            errorMessages={["this field is required"]}
          />
        </Grid>

        <Grid item xs={6}>
          <TextValidator
            label="Email"
            type="email"
            name="email"
            fullWidth
            value={formData?.email}
            onChange={handleChange}
            validators={["required"]}
            errorMessages={["this field is required"]}
          />
        </Grid>

        <Grid item xs={6}>
          <TextValidator
            label="Phone"
            type="tel"
            name="phone"
            fullWidth
            value={formData?.phone}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">+977</InputAdornment>
              ),
            }}
            validators={["required"]}
            errorMessages={["this field is required"]}
          />
        </Grid>
        
        <Grid item xs={12}>
          <Button type="submit" variant="contained" fullWidth>
            Submit
          </Button>
        </Grid>
      </Grid>
    </ValidatorForm>
  );
};

export default CreateEditAdminForm;