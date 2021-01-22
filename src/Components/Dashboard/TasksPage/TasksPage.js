import React, { useEffect, useState } from "react";
import { Endpoint } from "../../../Utils/Services";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";
import { Container, Button } from "@material-ui/core";
import useStyles from "../Dashboard.style";
import { Table, TableItem } from "./Table";
import { AddUser } from "./AddUser";
import _ from "lodash";

export const TasksPage = () => {
  const classes = useStyles();
  const [data, setData] = useState();
  const [useData, setUseData] = useState(sessionStorage.getItem("data"));
  const [networkError, setNetworkError] = useState(false);
  const [changeData, setChangeData] = useState(useData);

  const [add, setAdd] = useState(false);

  useEffect(() => {
    Endpoint()
      .then(res => {
        console.log(res.data);
        if (res.data) {
          setData(res.data);
          setUseData(sessionStorage.setItem("data", JSON.stringify(res.data)));
        } else {
          setNetworkError(true);
          alert("Network Error!!");
        }
      })
      .catch(err => {
        setNetworkError(true);
        console.log(err);
      });
  }, []);

  console.log(JSON.parse(changeData));
  const mapData = JSON.parse(changeData);

  const addFunction = () => {
    console.log("hello");
    setAdd(true);
  };

  const addUser = user => {
    console.log("addUser", user);
    user.id = mapData.length + 1;
    console.log(mapData.length);
    console.log(_.merge(mapData, user));
    const mergeData = _.merge(mapData, user);

    console.log(JSON.stringify(_.merge(mapData, user)));
    console.log(mapData.push(user));
    setChangeData(JSON.stringify(_.merge(mapData, user)));
    // setChangeData(users)
  };

  const CloseUser = () => {
    // console.log("CloseUser")
    setAdd(false);
  };

  const DeleteItem = item => {
    // console.log(item)
    setChangeData(JSON.stringify(mapData.filter(user => user.id !== item)));
  };

  return (
    <>
      <div>
        <Container>
          <Grid>
            <Grid item xs={12} md={12}>
              {mapData && (
                <TableItem
                  mapData={mapData}
                  addFunction={addFunction}
                  DeleteItem={DeleteItem}
                />
              )}
            </Grid>
          </Grid>
          {add && (
            <Grid>
              <Grid item xs={12} md={12}>
                <AddUser addUser={addUser} CloseUser={CloseUser} />
              </Grid>
            </Grid>
          )}
        </Container>
      </div>
    </>
  );
};
