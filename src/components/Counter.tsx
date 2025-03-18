import { useState } from 'react'
interface CounterProps {
  initValue: number
}
function Counter({ initValue }: CounterProps) {
  const [count, setCount] = useState<number>(initValue)
  return (
    <div>
      <h1>Counter With Tests (jest)</h1>
      <h2 data-testid="count">{count}</h2>
    </div>
  )
}

export default Counter