
import React from "react";
import { Container, Fab, MenuItem, TextField, Autocomplete } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Genres from './genre-list.json';

function EditObject() {
    const [genre, setGenre] = React.useState(0);

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <ArrowBackIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            編集
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <Container>
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
                    <Fab
                        color="secondary"
                        style={{
                            position: "absolute",
                            bottom: 0,
                            right: -15,
                        }}
                    >
                        再撮影
                    </Fab>
                </Box>
                <Box>
                    <TextField
                        fullWidth
                        sx={{ mb: 3 }}
                        id="outlined-select-currency"
                        select
                        label="ジャンル"
                        value={genre}
                        onChange={(e) => {
                            setGenre(Number(e.target.value))
                            console.log(Number(e.target.value))
                        }}
                    >
                        {Genres.genres.map((genre, index) => (
                            <MenuItem key={index} value={genre.id}>
                                {genre.name}
                            </MenuItem>
                        ))}
                    </TextField>

                    <Autocomplete
                        multiple
                        sx={{ mb: 3 }}
                        id="tags-filled"
                        options={[]}
                        // defaultValue={["あいうえお"]}
                        freeSolo
                        renderInput={(params) => {
                            console.log(params)
                            return (
                                <TextField
                                    {...params}
                                    label="Tag"
                                    placeholder="Tagを追加する"
                                />
                            )
                        }}
                    />
                    <TextField
                        fullWidth
                        sx={{ mb: 3 }}
                        label="オブジェクト名"
                        id="fullWidth"
                    />
                    <Fab
                        style={{
                            width: "100px",
                            borderRadius: "unset",
                        }}
                    >
                        取り消し
                    </Fab>
                    <Fab
                        style={{
                            width: "100px",
                            borderRadius: "unset",
                            float: "right"
                        }}
                    >
                        更新
                    </Fab>
                </Box>
            </Container>
        </>
    );
};

export default EditObject;