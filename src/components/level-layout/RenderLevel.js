import React from 'react'
import styles from './RenderLevel.module.css'
import Sprite from '../object-graphics/Sprite'

export default function RenderLevel({spriteSheetImage}) {
  return (
    <div className={styles.fullScreenContainer}>
        <div className={styles.gameScreen}>
            <Sprite image={spriteSheetImage} frameCoord={"6x6"} />
            <Sprite image={spriteSheetImage} frameCoord={"1x9"} />
            <Sprite image={spriteSheetImage} frameCoord={"0x9"} />
        </div>
    </div>
  )
}
