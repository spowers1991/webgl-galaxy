import { action } from 'mobx';
import { SceneState } from '../SceneState';

const setActiveObject = action((state: SceneState, value: any | null) => {
    state.activeObject = value;
});

export default setActiveObject;
