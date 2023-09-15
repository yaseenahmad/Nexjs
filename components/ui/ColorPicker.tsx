'use client'

import React, { useEffect, useState } from 'react';
import { colorInput } from './ColorPicker.css';
import { updateColors } from '@/theme/themeUtils'

interface Colors {
  primary: string;
  secondary: string;
}

interface ColorPickerProps {
  color: Colors;
  type: 'primary' | 'secondary';
}

export default function ColorPicker({color, type}: ColorPickerProps) {
  const [primary, setPrimary] = useState(localStorage.getItem('primary') || color.primary);
  const [secondary, setSecondary] = useState(localStorage.getItem('secondary') || color.secondary);

  useEffect(() => {
    localStorage.setItem('primary', primary)
    localStorage.setItem('secondary', secondary)
    updateColors(primary, secondary)
  }, [primary, secondary])

  return (
    <>
      {
        type === 'primary' ?
          <input  type="color" className={colorInput} value={primary} onChange={e => setPrimary(e.target.value)} />
        : <input  type="color" className={colorInput} value={secondary} onChange={e => setSecondary(e.target.value)} />
      }
    </>
  )
}
