'use client'
import { useParams, useRouter } from 'next/navigation'

export default function UserPage() {
  const params = useParams()
  const router = useRouter()
  const userId = params.userId as string

  return (
    <div style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <button onClick={() => router.back()} style={{ cursor: 'pointer', fontSize: '16px', padding: '10px' }}>
        Hi {userId}, click me to go back
      </button>
    </div>
  )
}
