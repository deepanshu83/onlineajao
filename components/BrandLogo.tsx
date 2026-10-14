'use client';

import React from 'react';
import Image from 'next/image';

interface BrandLogoProps {
  variant?: 'horizontal' | 'mark' | 'reverse' | 'seal';
  className?: string;
  height?: number;
  priority?: boolean;
}

export default function BrandLogo({
  variant = 'horizontal',
  className = '',
  height = 32,
  priority = false,
}: BrandLogoProps) {
  if (variant === 'reverse') {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <Image
          src="/brand/onlineajao-horizontal-light.png"
          alt="ONLINEAJAO"
          width={240}
          height={height}
          priority={priority}
          className="h-7 sm:h-8 w-auto object-contain"
        />
      </div>
    );
  }

  if (variant === 'mark') {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <Image
          src="/brand/onlineajao-submark-trans.png"
          alt="ONLINEAJAO Mark"
          width={48}
          height={height}
          priority={priority}
          className="h-7 w-auto object-contain"
        />
      </div>
    );
  }

  if (variant === 'seal') {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <Image
          src="/brand/onlineajao-seal.png"
          alt="ONLINEAJAO Seal"
          width={120}
          height={120}
          priority={priority}
          className="h-20 w-20 object-contain"
        />
      </div>
    );
  }

  // Default horizontal logo (dark text on light/sand background)
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <Image
        src="/brand/onlineajao-horizontal-trans.png"
        alt="ONLINEAJAO"
        width={240}
        height={height}
        priority={priority}
        className="h-7 sm:h-8 w-auto object-contain"
      />
    </div>
  );
}
