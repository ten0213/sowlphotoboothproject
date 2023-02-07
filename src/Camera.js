import React, { useRef } from "react";
import Webcam from "react-webcam";

const videoConstraints = {
    width: 540,
    facingMode: "environment"
};
var num = -1;
var capture = [0, 0, 0, 0, 0, 0, 0, 0];
const Camera = () => {

    const webcamRef = useRef(null);
    const [url, setUrl] = React.useState(null);
    const capturePhoto_1 = React.useCallback(async () => {


        if (num === 7) return;
        num++;
        const imageTmp = webcamRef.current.getScreenshot();
        capture[num] = imageTmp;
        setUrl(capture[num]);
        setNumber(prevNumber => prevNumber + 1);
        // var image = document.createElement('img');
        // image.innerHTML = capture[num];
        // image.appendChild(capture[num]);

    }, [webcamRef]);

    const onUserMedia = (e) => {
        console.log(e);
    };
    const [number, setNumber] = React.useState(0);




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
            <h1>{number}</h1>
            <button onClick={capturePhoto_1}>Capture</button>
            <button onClick={() => setUrl(null)}>Refresh</button>
            {url && (
                // <div id="photoboard" alt="Screenshot">
                //     <div>
                //         <img src={capture[0]} alt="Screenshot" width="192px" height="108px" />
                //     </div>
                //     <div>
                //         <img src={capture[1]}alt="Screenshot" width="240px" height="135px" />
                //     </div>
                //     <div>
                //         <img src={capture[2]}alt="Screenshot" width="240px" height="135px"/>
                //     </div>
                //     <div>
                //         <img src={capture[3]} alt="Screenshot" width="240px" height="135px"/>
                //     </div>
                //     <div>
                //         <img src={capture[4]} alt="Screenshot" width="240px" height="135px"/>
                //     </div>
                //     <div>
                //         <img src={capture[5]}alt="Screenshot" width="240px" height="135px"/>
                //     </div>
                //     <div>
                //         <img src={capture[6]}alt="Screenshot" width="240px" height="135px"/>
                //     </div>
                //     <div>
                //         <img src={capture[7]} alt="Screenshot" width="240px" height="135px"/>
                //     </div>


                // </div>
                <div id="check_photosel">
                  <div className="check_sel" id="check_sel1">
                      <p className="check_num" id="check_num1">
                      <img src={capture[0]} className="check_cnv" id="check_cnv1" width="240px" height="135px"alt="Screenshot"/></p>
                  </div>
                  <div className="check_sel" id="check_sel2">
                      <p className="check_num" id="check_num2">
                      <img src={capture[1]} className="check_cnv" id="check_cnv2" width="240px" height="135px"alt="Screenshot"/></p>
                  </div>
                  <div className="check_sel" id="check_sel3">
                      <p className="check_num" id="check_num3">
                      <img src={capture[2]} className="check_cnv" id="check_cnv3" width="240px" height="135px"alt="Screenshot"/></p>
                  </div>
                  <div className="check_sel" id="check_sel4">
                      <p className="check_num" id="check_num4">
                      <img src={capture[3]} className="check_cnv" id="check_cnv4" width="240px" height="135px"alt="Screenshot"/></p>
                  </div>
                  <div className="check_sel" id="check_sel5">
                      <p className="check_num" id="check_num5">
                      <img src={capture[4]} className="check_cnv" id="check_cnv5" width="240px" height="135px"alt="Screenshot"/></p>
                  </div>
                  <div className="check_sel" id="check_sel6">
                      <p className="check_num" id="check_num6">
                      <img src={capture[5]} className="check_cnv" id="check_cnv6" width="240px" height="135px"alt="Screenshot"/></p>
                  </div>
                  <div className="check_sel" id="check_sel7">
                      <p className="check_num" id="check_num7">
                      <img src={capture[6]} className="check_cnv" id="check_cnv7" width="240px" height="135px"alt="Screenshot"/></p>
                  </div>
                  <div className="check_sel" id="check_sel8">
                      <p className="check_num" id="check_num8">
                      <img src={capture[7]} className="check_cnv" id="check_cnv8" width="240px" height="135px"alt="Screenshot"/></p>
                  </div>
              </div>
            )}
        </>
    );
};

export default Camera;