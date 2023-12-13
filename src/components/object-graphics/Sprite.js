import React, { useEffect, useRef } from 'react'
import { CELL_SIZE } from '../../helpers/consts';



function Sprite({ image, frameCoord, size = 16 }) {
  
  console.log(image)
  const canvasRef = useRef();
  useEffect(() => {
    /** @type {HTMLCanvasElement} */
    const canvasEl = canvasRef.current;
    console.log(canvasEl)
    const ctx = canvasEl.getContext("2d");

    //Clear out anything in the canvas tag
    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);

    //Draw a graphic with canvas tag
    // frameCoord: "1x0", "0x2"
    const tileSheetX = Number(frameCoord.split("x")[0]);
    const tileSheetY = Number(frameCoord.split("x")[1]);

    ctx.drawImage(
        image, //Image to pull from
        tileSheetX * CELL_SIZE, //left X corner of frame
        tileSheetY * CELL_SIZE, //top Y corner of frame
        size, //How much to crop from the sprite sheet (x)
        size, //How much to crop from the sprite sheet(Y)
        0, //Where to place this on canvas tag X (0)
        0, //Where to place this on canvaas tag Y (0)
        size, //How large to scale it (x)
        size //How large to scale is (y)
    )

  }, [ image, frameCoord, size ])
  
return (
    <canvas width={size} height={size} ref={canvasRef} />
  )
}


const MemoizedSprite = React.memo(Sprite)
export default MemoizedSprite;