'use client'

import React, { useEffect, useState } from 'react';
import { colorInput } from './ColorPicker.css';
import { updateColors } from '@/theme/themeUtils';

interface ColorPickerProps {
  type: 'primary' | 'secondary';
}

export default function ColorPicker({ type }: ColorPickerProps) {
  const defaultPrimary = "#690FAD";
  const defaultSecondary = "#CAA8F5";

  const [color, setColor] = useState<string>("");

  useEffect(() => {
    const storedColor = localStorage.getItem(type) || (type === 'primary' ? defaultPrimary : defaultSecondary);
    setColor(storedColor);

    localStorage.setItem(type, color);
    updateColors(localStorage.getItem('primary') || defaultPrimary, localStorage.getItem('secondary') || defaultSecondary);
  }, [type, color]);

  return (
    <input
      type="color"
      className={colorInput}
      aria-label='color'
      value={color}
      onChange={e => setColor(e.target.value)}
    />
  );
}
