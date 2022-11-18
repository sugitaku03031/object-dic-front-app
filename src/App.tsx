import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Container,
  Box,
  Grid,
} from "@mui/material";
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

function App() {
  return (
    <Container>
      <TopSearchBox />
      <List>{listItems}</List>
    </Container>
  );
}

export default App;
