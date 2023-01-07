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
import axios, { REST_API } from "./axios";
import { AxiosResponse } from "axios";

// 
type ObjectType = [
  {
    id: number;
    name: string;
    Object: [
      {
        id: number;
        title: string;
        image_path: string;
        userId: number;
      }
    ]
  }
]

const Input = styled('input')({
  display: 'none',
});

function App() {
  // オブジェクトリストの変数
  const [objectLists, setObjectLists] = React.useState<ObjectType>([
    {
      "id": 0,
      "name": "",
      "Object": [
        {
          "id": 0,
          "title": "",
          "image_path": "",
          "userId": 0
        }
      ]
    }
  ]);

  React.useEffect(() => {
    // オブジェクトリストをバックエンドサーバから取得
    axios.get('/object?user_id=1')
      // バックエンドサーバから取得したデータを変数に登録
      .then((response: AxiosResponse<ObjectType>) => {
        setObjectLists(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const listItems = objectLists[0].Object.map((item, index) => (
    <div key={index}>
      <ListItem alignItems="flex-start">
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <Box
              component="img"
              sx={{
                width: "100%",
              }}
              src={REST_API + '/image-load?image_name=' + item.image_path}
            />
          </Grid>
          <Grid item xs={9}>
            <ListItemText
              primary={item.title}
            // secondary=""
            />
          </Grid>
        </Grid>
      </ListItem>
      <Divider variant="inset" component="li" />
    </div>
  ));

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

export default App;
