import { SceneState } from '../SceneState';

const getObjectsToRender = (state: SceneState): any[] | null => {
    return state.objectsToRender;
};

export default getObjectsToRender;
