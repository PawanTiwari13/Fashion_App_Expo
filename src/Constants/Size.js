import {Dimensions} from 'react-native';
import {DESIGN_WIDTH} from './AppDefines';

export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
    Dimensions.get('window');

export function pixelNormalize(value) {
    return (SCREEN_WIDTH * value) / DESIGN_WIDTH;
}
