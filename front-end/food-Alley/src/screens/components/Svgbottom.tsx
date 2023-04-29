import React from 'react';
import { Svg, Path } from 'react-native-svg';

interface Props {
  width: number;
  height: number;
}

const Svgbottom: React.FC<Props> = ({ width, height }) => (
  <Svg width={width} height={height} viewBox="0 0 393 232" fill="none">
    <Path
      d="M0 147V79.5L41 124.5L307.5 177L393 0V232H0V147Z"
      fill="#FE5932"
    />
  </Svg>
);

export default Svgbottom;


