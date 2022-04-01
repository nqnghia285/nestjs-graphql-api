import Link from 'next/link'
import { memo } from 'react'

function LoginLink() {
   return (
      <Link href={`/login`} passHref>
         <a>Log in</a>
      </Link>
   )
}

const MemoOfLoginLink = memo(LoginLink)

export default MemoOfLoginLink
