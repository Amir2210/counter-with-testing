import { useState } from 'react'
interface CounterProps {
  initValue: number
}
function Counter({ initValue }: CounterProps) {
  const [count, setCount] = useState<number>(initValue)

  function onIncreaseCount() {
    setCount((prevCount) => prevCount + 1)
  }
  function onDecreaseCount() {
    setCount((prevCount) => prevCount - 1)
  }
  return (
    <div>
      <h1>Counter With Tests (jest)</h1>
      <h2 data-testid="count">{count}</h2>
      <div className='buttonContainer'>
        <button onClick={onIncreaseCount}>+</button>
        <button onClick={onDecreaseCount}>-</button>
      </div>
    </div>
  )
}

export default Counter