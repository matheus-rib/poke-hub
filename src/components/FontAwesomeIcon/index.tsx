import React from 'react'
type FontAwesomeIconType = {
  className: string
}

export default function FontAwesomeIcon({ className }: FontAwesomeIconType) {
  return <i className={className} />
}
