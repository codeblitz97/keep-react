'use client'
import { Badge } from '../../../../src'

const BadgeWithDot = () => {
  return (
    <div className="flex items-center gap-3 py-1">
      <Badge showIcon={true} color="primary">
        Primary
      </Badge>
      <Badge showIcon={true} color="secondary">
        Secondary
      </Badge>
      <Badge showIcon={true} color="success">
        Success
      </Badge>
      <Badge showIcon={true} color="warning">
        Warning
      </Badge>
      <Badge showIcon={true} color="error">
        Error
      </Badge>
    </div>
  )
}

const BadgeWithDotCode = `
'use client'
import { Badge } from 'keep-react'

export const BadgeComponent = () => {
  return (
   <div className="flex items-center gap-3">
      <Badge
        size="xs"
        dot={true}
        dotPosition="left"
        colorType="light"
        color="gray"
      >
        Left Dot
      </Badge>
      <Badge
        size="xs"
        dot={true}
        dotPosition="right"
        colorType="light"
        color="gray"
      >
        Right Dot
      </Badge>
    </div>
  );
};
`

export { BadgeWithDot, BadgeWithDotCode }
