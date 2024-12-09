import React, { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

const Avatar = (props:HTMLAttributes<HTMLDivElement>) => {
    const{ className, children}=props
  return (
    <div className={twMerge('size-20 border-4 rounded-full overflow-hidden border-blue-500 p-1 bg-neutral-900', className)}>
      {children}
    </div>
  )
}

export default Avatar
