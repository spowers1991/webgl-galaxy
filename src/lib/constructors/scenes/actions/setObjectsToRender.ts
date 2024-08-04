import { action } from 'mobx';
import { SceneState } from '../SceneState';

const setObjectsToRender = action((state: SceneState, value: any | null) => {
    state.objectsToRender = value ? [...value] : [];
});

export default setObjectsToRender;
