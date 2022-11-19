import React from "react";
import Webcam from "react-webcam";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const videoConstraints = {
    // width: ,
    height: 1080,
    // facingMode: "user"
};


function Camera() {
    const webcamRef = React.useRef<Webcam>(null);
    const [url, setUrl] = React.useState<string | null>(null);
    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current?.getScreenshot();
        if (imageSrc) {
            setUrl(imageSrc);
        }
    }, [webcamRef]);

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
                            オブジェクト登録
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <div>
                <Webcam
                    audio={false}
                    width="100%"
                    height="100%"
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    videoConstraints={videoConstraints}
                />
            </div>
            <button onClick={capture}>キャプチャ</button>

            {url && (
                <>
                    <div>
                        <button
                            onClick={() => {
                                setUrl(null);
                            }}
                        >
                            削除
                        </button>
                    </div>
                    <div>
                        <img src={url} alt="Screenshot" />
                    </div>
                </>
            )}
        </>
    );
};

export default Camera;