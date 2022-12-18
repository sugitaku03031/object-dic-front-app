import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Container,
  Box,
  Grid,
  Fab,
  styled,
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import TopSearchBox from "./TopSearchBox";
import Data from "./sample.json";

const listItems = Data.items.map((item, index) => (
  <div key={index}>
    <ListItem alignItems="flex-start">
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Box
            component="img"
            sx={{
              width: "100%",
            }}
            src={item.image}
          />
        </Grid>
        <Grid item xs={9}>
          <ListItemText
            primary={item.name}
          // secondary=""
          />
        </Grid>
      </Grid>
    </ListItem>
    <Divider variant="inset" component="li" />
  </div>
));

const Input = styled('input')({
  display: 'none',
});

function SearchRireki() {
  return (
    <Container>
      <TopSearchBox />
      <List>{listItems}</List>
      <Fab
        color="secondary"
        aria-label="add"
        style={{
          position: "fixed",
          bottom: 30,
          right: 30,
        }}>
        <label htmlFor="contained-button-file">
          <Input accept="image/*" id="contained-button-file" multiple type="file" />
          <AddIcon
            fontSize="large"
          />
        </label>
      </Fab>
    </Container >
  );
}

export default SearchRireki;
