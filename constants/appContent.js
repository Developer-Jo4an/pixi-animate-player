import PixiAnimatePlayer from "../components/pixiAnimatePlayer/PixiAnimatePlayer";
import {pixiAnimatePlayer} from "./copyright";

export const states = {
  pixiAnimatePlayer: {availableStates: []}
};

export const appContent = {
  pixiAnimatePlayer: {
    Component: PixiAnimatePlayer,
    props: pixiAnimatePlayer
  }
}
