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

const Input = styled('input')({
  display: 'none',
});

function ShowObject() {
  return (
    <Container>
      <TopSearchBox />
      
    </Container >
  );
}

export default ShowObject;