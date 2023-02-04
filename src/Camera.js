import React, { useRef } from "react";
import Webcam from "react-webcam";

const videoConstraints = {
    width: 540,
    facingMode: "environment"
};

const Camera = () => {
    const webcamRef = useRef(null);
    const [url, setUrl] = React.useState(null);

    const capturePhoto = React.useCallback(async () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setUrl(imageSrc);
    }, [webcamRef]);

    const onUserMedia = (e) => {
        console.log(e);
    };

    return (
        <>
            <Webcam
                ref={webcamRef}
                audio={false} // 오디오 설정 false = mute
                screenshotFormat="image/jpeg" // 저장 확장자 설정 image/jpeg, image/png, image/webp, image/heic
                videoConstraints={videoConstraints}
                onUserMedia={onUserMedia}
                screenshotQuality={1} // 캡쳐화질 설정 0 ~ 1
            // mirrored={false} // 좌우반전 여부 설정 기본값:false
            />
            <button onClick={capturePhoto}>Capture</button>
            <button onClick={() => setUrl(null)}>Refresh</button>
            {url && (
                <div>
                    <img src={url} alt="Screenshot" />
                </div>
            )}
        </>
    );
};

export default Camera;