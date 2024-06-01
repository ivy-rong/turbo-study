'use client'
import { useState } from 'react'
import { add } from '@starry-sky-studio/utils'

// import { Button } from '@starry-sky-studio/ui/button'
export default function Page(): JSX.Element {
  const [count, setCount] = useState(0)
  const handleAdd = () => {
    setCount((pre) => add(1, pre))
  }
  return (
    <main>
      <div
        onClick={handleAdd}
        className="bg-red-500"
      >
        <div>docs</div>
        {/* <Button>Click me</Button> */}
        {count}
      </div>
    </main>
  )
}
