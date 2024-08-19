import React from 'react';
import { navigate } from 'gatsby';

import * as styles from './Brand.module.css';

const Brand = (props) => {
  return (
    <div
      className={styles.root}
      role={'presentation'}
      onClick={() => navigate('/')}
    >
      {/* <h4>aulti</h4> */}
   <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127 24" width="127" height="24">
	<title>New Project</title>
	<defs>
		<image  width="127" height="24" id="img1" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAAYAQMAAADpgrCyAAAAAXNSR0IB2cksfwAAAANQTFRF////p8QbyAAAABFJREFUeJxjZEADjKMCg0EAABWEABkp802mAAAAAElFTkSuQmCC"/>
	</defs>
	<style>
		tspan { white-space:pre } 
		.t0 { font-size: 24px;fill: #000000;font-weight: 400;font-family: "Baloo", "Baloo" } 
	</style>
	<use id="Background" href="#img1" x="0" y="0"/>
	<text id="aulti" style="transform: matrix(1,0,0,1,37.344,19.688)" >
		<tspan x="0" y="0" class="t0">a</tspan><tspan  y="0" class="t0">u</tspan><tspan  y="0" class="t0">l</tspan><tspan  y="0" class="t0">t</tspan><tspan  y="0" class="t0">i
</tspan>
	</text>
</svg>
    </div>
  );
};

export default Brand;
