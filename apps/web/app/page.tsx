'use client'

import { add } from '@starry-sky-studio/utils'
import { useEffect, useState } from 'react'

export default function Page(): JSX.Element {
  const [count, setCount] = useState(0)
  useEffect(() => {
    setCount(add(1, 4))
  }, [])

  return (
    <main>
      <div>web</div>

      <div
        className="bg-red-400"
        onClick={() => {
          setCount((pre) => pre + 1)
        }}
      >
        <div>{count}</div>
      </div>
    </main>
  )
}
