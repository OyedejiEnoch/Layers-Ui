import React, { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

const Key = (props:HTMLAttributes<HTMLDivElement>) => {
    const {className, children, ...otherProps} =props
  return (
    <div className={twMerge('size-14 bg-neutral-300 flex items-center justify-center rounded-2xl text-xl text-neutral-950', className)} {...otherProps}>
      {children}
    </div>
  )
}

export default Key