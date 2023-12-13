import { useEffect, useState } from "react";
import Sprite from "./components/object-graphics/Sprite";
import { SPRITE_SHEET_SRC } from "./helpers/consts";


function App() {

  const [spriteSheetImage, setSpriteSheetImage] = useState(null)

  useEffect(() => {
    const image = new Image();
    image.src = SPRITE_SHEET_SRC
    image.onload = () => {
      setSpriteSheetImage(image)
    }
  }, [])
  if (!spriteSheetImage) {
    return null;
  }

  return (
    <div>
      <Sprite image={spriteSheetImage} frameCoord={"6x6"} />
      <Sprite image={spriteSheetImage} frameCoord={"1x9"} />
      <Sprite image={spriteSheetImage} frameCoord={"0x9"} />
    </div>
  );
}

export default App;
