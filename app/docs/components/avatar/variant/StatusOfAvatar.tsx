'use client'
import { Avatar } from '../../../../src'

const StatusOfAvatar = () => {
  return (
    <div className="my-5 flex items-center gap-3">
      <Avatar active={true} verified={true} shape="circle" />
      <Avatar active={true} verified={true} shape="rounded" />
    </div>
  )
}

const StatusOfAvatarCode = `
'use client'
import { Avatar } from "keep-react";

export const AvatarComponent = () => {
  return (
    <>
      <Avatar active={true} verified={true} shape="circle" />
      <Avatar active={true} verified={true} shape="rounded" />
    </>
  );
}
`

export { StatusOfAvatar, StatusOfAvatarCode }
