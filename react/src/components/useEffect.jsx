import { useEffect, useState } from "react";

export default function Timer({ delay }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + 1) // BUG: count is always 0 (stale)
    }, delay)
    return () => clearInterval(id)
  }, [count, delay]) // MISSING: count, delay
}

Timer(100)
