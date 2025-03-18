
interface CounterProps {
  initValue: number
}
function Counter({ initValue }: CounterProps) {
  return (
    <div>
      <h1>Counter With Tests (jest)</h1>
      <h2>{initValue}</h2>
    </div>
  )
}

export default Counter