import { SceneState } from '../SceneState';

const getActiveObject = (state: SceneState): any | null => {
    return state.activeObject;
};

export default getActiveObject;
