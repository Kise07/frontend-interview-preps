import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0) // initial value = 0

  return (
    <button onClick={() => setCount(c => count + 1)}>
      Counter: {count}
    </button>
  )
}
