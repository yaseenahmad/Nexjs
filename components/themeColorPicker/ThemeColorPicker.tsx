'use client'

import React, { useEffect, useState } from 'react';
import { updateColors } from '@/theme/themeUtils'

function ThemeColorPicker() {
  const [primary, setPrimary] = useState(localStorage.getItem('primary') || "#690FAD");
  const [secondary, setSecondary] = useState(localStorage.getItem('secondary') || "#CAA8F5");


  useEffect(() => {
    localStorage.setItem('primary', primary)
    localStorage.setItem('secondary', secondary)
    updateColors(primary, secondary)
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
