'use client'

import React, { useEffect, useState } from 'react';
import { updateColors } from '@/theme/themeUtils'

function ThemeColorPicker() {
  const [primary, setPrimary] = useState("#690FAD");
  const [secondary, setSecondary] = useState("#CAA8F5");


  useEffect(() => {
    updateColors(primary, secondary)
    // console.log('yes', primary, secondary)
  }, [primary, secondary])

  return (
    <div>
      <input
        type="color"
        value={primary}
        onChange={e => setPrimary(e.target.value)}
      />
      <input
        type="color"
        value={secondary}
        onChange={e => setSecondary(e.target.value)}
      />
    </div>
  );
}

export default ThemeColorPicker;
