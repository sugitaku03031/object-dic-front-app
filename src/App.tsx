import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Container,
  Box,
  Grid,
  Button,
} from "@mui/material";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
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
      <Button
        style={{
          // borderRadius: 50,
          // minWidth: 50,
          // width: 50,
          // height: 50,
          position: "fixed",
          bottom: 30,
          right: 30,
        }}
        className="z-depth-1 p-2 d-flex justify-content-center align-items-center"
      // onClick={async () => {
      //   router.push("./create");
      // }}
      >
        <AddCircleOutlineOutlinedIcon 
          style={{ fontSize: 28 }}
          className="text-primary"
          color="primary" />
      </Button>
    </Container>
  );
}

export default App;
