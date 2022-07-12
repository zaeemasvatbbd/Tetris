import React from 'react'
import { legacy_createStore as createStore } from 'redux'
import { Provider } from 'react-redux'

import Controls from "./Controls"
import GridBoard from "./GridBoard"
import NextBlock from "./NextBlock"
import ScoreBoard from "./ScoreBoard"
import MessagePopup from "./MessagePopup"
import KeyPressElement from "./KeyBoardControls"
import HoldBlock from "./HoldBlock"

export default function Game(props) {
  HoldBlock.hasShape = false;
  return (
    <>
        <GridBoard />
        <NextBlock />
        <ScoreBoard />
        <Controls />
        <MessagePopup />
        <KeyPressElement />
        <HoldBlock />
    </>
  );
}