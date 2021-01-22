import React, { useEffect, useState } from "react";
import {
  Input,
  Select,
  MenuItem,
  Button,
  Grid,
  Checkbox,
  TableContainer,
  InputLabel
} from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import Paper from "@material-ui/core/Paper";

export const AddUser = props => {
  const { handleSubmit, reset, watch, control, register } = useForm();
  const [checked, setChecked] = useState(false);
  const initialFormState = { userId: null, title: "", completed: checked };
  const [user, setUser] = useState(initialFormState);

  const onSubmit = data => {
    // console.log(data)
    if (data) {
      props.addUser(user);
      props.CloseUser();
    }
  };

  const handleChange = event => {
    setChecked(event.target.checked);
    // console.log(checked)
  };

  const handleInputChange = event => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
    // console.log(user);
  };

  return (
    <TableContainer component={Paper} style={{ padding: "20px" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid item xs={12} md={12} style={{ padding: "10px" }}>
          <InputLabel htmlFor="standard-adornment-password">Title</InputLabel>
          <Input
            inputRef={register({ required: true })}
            onChange={handleInputChange}
            name="title"
          />
        </Grid>

        <Grid item xs={12} md={12} style={{ padding: "10px" }}>
          <InputLabel htmlFor="standard-adornment-password" name="completed">
            Status
          </InputLabel>
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Button type="submit">Add User</Button>
          <Button type="button" onClick={() => props.CloseUser()}>
            Close
          </Button>
        </Grid>
      </form>
    </TableContainer>
  );
};
