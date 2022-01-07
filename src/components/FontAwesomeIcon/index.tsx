import React, { CSSProperties } from 'react'
type FontAwesomeIconType = {
  className: string
  style?: CSSProperties
}

export default function FontAwesomeIcon({
  className,
  style,
}: FontAwesomeIconType) {
  return <i className={className} style={style} />
}
