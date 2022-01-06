import { useEffect, useState } from 'react'

type FetchDataFunction = () => Promise<void> | undefined

export default function (fetchData: FetchDataFunction) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
    if (mounted) {
      fetchData()
    }
  }, [fetchData, mounted])
}
