'use client'

import React, { useEffect, useState } from 'react';
import { colorInput } from './ColorPicker.css';
import { updateColors, colors } from '@/theme/themeUtils'
import useLocalStorage from '@/hooks/useLocalStorage';

interface ColorPickerProps {
  type: 'primary' | 'secondary';
}

export default function ColorPicker({type}: ColorPickerProps) {
  const [primary, setPrimary] = useLocalStorage('primary', colors.primaryDefault);
  const [secondary, setSecondary] = useLocalStorage('secondary', colors.secondaryDefault);

  const handleUpdateColor = (color: string) => {
    type === 'primary' ? setPrimary(color) : setSecondary(color)
  }

  useEffect(() => {
    updateColors(primary, secondary)
  }, [primary, secondary])

  return (
    <input
      type="color"
      aria-label='color'
      className={colorInput}
      value={ type === 'primary' ? primary : secondary}
      onChange={e => handleUpdateColor(e.target.value)}
    />
  )
}