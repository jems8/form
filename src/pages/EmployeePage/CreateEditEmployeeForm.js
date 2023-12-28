import React, { useState } from "react";
import {
  TextValidator,
  ValidatorForm,
  SelectValidator,
} from "react-material-ui-form-validator";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import InputAdornment from "@mui/material/InputAdornment";

import {
  initialUsersFormData,
  userAccountStatusMenus,
  detailJobRole,
  detailExperienceLevel,
} from "../../constants/userConstants";

import { styles } from "./styles";
import { FormControl } from "@mui/material";

const CreateEditUserForm = (props) => {
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
    // setUsers((prevUsers) => [...prevUsers, formData]);
    console.table(formData);
    setFormData(initialUsersFormData);
  };

  return (
    <ValidatorForm onSubmit={handleSubmit} sx={styles.formRoot}>
      <Typography variant="h5" textAlign={"left"}>
        Create Users Form
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
        <Grid item xs={6}>
          <TextValidator
            label="Joined Date"
            type="tel"
            name="joinedDate"
            fullWidth
            value={formData?.joinedDate}
            onChange={handleChange}
            validators={["required"]}
            errorMessages={["this field is required"]}
          />
        </Grid>

        <Grid item xs={6}>
          <FormControl fullWidth>
            <SelectValidator
              labelId="gender"
              id="gender"
              name="gender"
              fullWidth
              value={formData?.gender}
              onChange={handleChange}
              label="Gender"
              validators={["required"]}
              errorMessages={["this field is required"]}
            >
              {userAccountStatusMenus.map((indvMenu) => {
                console.log("indv", indvMenu);
                return (
                  <MenuItem value={indvMenu.value} key={indvMenu.id}>
                    {indvMenu.label}
                  </MenuItem>
                );
              })}
            </SelectValidator>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <SelectValidator
              labelId="role"
              id="role"
              name="role"
              fullWidth
              value={formData?.role}
              onChange={handleChange}
              label="role"
              validators={["required"]}
              errorMessages={["this field is required"]}
            >
              {detailJobRole.map((indvMenu) => {
                console.log("indv", indvMenu);
                return (
                  <MenuItem value={indvMenu.value} key={indvMenu.id}>
                    {indvMenu.label}
                  </MenuItem>
                );
              })}
            </SelectValidator>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <SelectValidator
              labelId="experience"
              id="experience"
              name="Experience_Level"
              fullWidth
              value={formData?.experience}
              onChange={handleChange}
              label="experience"
              validators={["required"]}
              errorMessages={["this field is required"]}
            >
              {detailExperienceLevel.map((indvMenu) => {
                console.log("indv", indvMenu);
                return (
                  <MenuItem value={indvMenu.value} key={indvMenu.id}>
                    {indvMenu.label}
                  </MenuItem>
                );
              })}
            </SelectValidator>
          </FormControl>
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

export default CreateEditUserForm;
