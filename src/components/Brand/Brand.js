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
		<image  width="127" height="24" id="img1" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAAYCAMAAADkktLDAAAAAXNSR0IB2cksfwAAAXpQTFRF////l5eXKSkpHR0dg4ODw8PDPz8/S0tLzMzM7u7uAgICAAAA1NTUr6+vTU1N8PDwv7+/2tra7e3t0NDQOzs7YmJiLy8v5eXlWlpao6Oj/Pz8wcHB9/f3T09PCQkJBAQEc3Nz6Ojoz8/PREREXl5eX19fQkJCYWFhlZWVUlJS5ubmBwcHEBAQzc3NpqamZ2dnCgoK+Pj4JSUleXl5+fn5zs7OSUlJR0dH4+PjGBgYZmZmk5OT9fX1rKyspKSkRUVF4eHhMjIy6enpuLi4oaGhjY2NFhYW3NzccHBwra2tMTExnp6e2dnZKysrenp6ubm529vbq6urPDw84uLiDAwMAwMDNzc3xMTEBQUF19fXbm5ucXFxRkZGDQ0NLi4uBgYG7OzsAQEBOjo6VlZWkZGRISEh+vr6n5+fPT09tbW1NTU1hoaGqampFRUVa2tr8fHx7+/vJiYmbW1t8vLys7OzgoKCgYGBlpaWsLCwtra2ioqK39/f6urq/f39z5tk4QAAAfZJREFUeJxjZBhYwDhqP9WNBII/9LOflRFo4w8En5MRaCbjF7rZz/uPgYH5EwM/I+N7MF/oJ5DgeEtX+znfMIh+Y+BmfAkSkPgM4g+A/Qx8z0ECUoxfeZ5Q234BXsa3Ik8EeRjvMzAoMT6We/qdgUH1ocKrDzD71YFWyt4AKWVR/fv1KZXt12J8AGEoMl5m0LvLwKBykYHB4DaDsPB5JP+rX2HQPcug/YBBWOwMde03vQZjaZ8C269zEmw/g+4JJPuBQO84yH4GnpfUtZ/BivEX+221R28YRP4+sTvLwGBykIFBDpjITQ8ghT8QmO0H2697gsr2MzA4gcqVowwMNjux2g/yv+0JBsH7tLHfk/EglMX2Hqf/IemPFvZ7H4AzHbcMgP2++xgYnBkPfuJkYHDdELiLgcF9HST9eayli/0h2xm8nh9hCNsKsj98C9BBjMtR7Y/ayMAQsJRW9hvdZGD4Ec60jhGU/mQcgZ5nCGZcAyRDF0DtZ+RiYAhjPGU+lyb2pyyHsaIYZzGkL4HxYmcwZC4C26/FdhskED+NIXYdDdJ/9heQbxn+y/8AFsAMOQ/3gXhJjIwTGQqADgLVN95PgQ4Q0drOUDSTFvm/GJT9GTfBykGhdMbzRq0Qts9pcGlXMwWYJA+AlB7yaCbW2GHY/hpS9gMARES/GWLGfbYAAAAASUVORK5CYII="/>
	</defs>
	<style>
	</style>
	<use id="aulti" href="#img1" x="0" y="0"/>
</svg>
		
    </div>
  );
};

export default Brand;
