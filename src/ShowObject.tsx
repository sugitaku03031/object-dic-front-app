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
  TextField,
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import TopSearchBox from "./TopSearchBox";
import Data from "./sample.json";
import { Label } from "@mui/icons-material";

const Input = styled('input')({
  display: 'none',
});

function ShowObject() {
  return (
    <Container>
      <TopSearchBox />
      <Box
        sx={{
            m: 2,
        }}
        style={{
            position: "relative",
        }}>
        <Box
            component="img"
            sx={{
                my: 2,
                width: "100%",
            }}
            src="1.jpg"
        />
      </Box>
      <Box>
      <TextField
          fullWidth
          sx={{ mb: 3 }}
          label="食器"
          disabled
      >
      </TextField>
      <TextField
          fullWidth
          sx={{ mb: 3 }}
          label="タグ"
          disabled
      >
      </TextField>
      <TextField
          fullWidth
          label="オブジェクト名"
          disabled
      >
      </TextField>
      </Box>
    </Container >
  );
}

export default ShowObject;