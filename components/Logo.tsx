import React from 'react'
import { NewspaperIcon } from '@heroicons/react/24/solid'

const Logo = () => {
  return (
    <div className="flex items-center justify-space-between">
        <NewspaperIcon className="w-6 h-6 mr-2" />
        <h3>CEDEKPOOLE Weekly Blog</h3>
    </div>
  )
}

export default Logo