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
      <div className={`inline-flex items-center gap-3 select-none ${className}`}>
        <Image
          src="/brand/onlineajao-reverse.png"
          alt="ONLINEAJAO"
          width={180}
          height={height}
          priority={priority}
          className="h-8 w-auto object-contain rounded-xs"
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
          className="h-24 w-24 object-contain"
        />
      </div>
    );
  }

  // Default horizontal logo
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <Image
        src="/brand/onlineajao-horizontal-trans.png"
        alt="ONLINEAJAO"
        width={190}
        height={height}
        priority={priority}
        className="h-7 sm:h-8 w-auto object-contain"
      />
    </div>
  );
}
