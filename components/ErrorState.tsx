"use client"

import { useRouter } from 'next/navigation'

export default function ErrorState() {
  const router = useRouter();

  return (
    <div className="font-light text-stone-700">
      <span>Something went wrong here, unable to find the content, sorry about that.</span>
      <br />
      <span onClick={() => router.back()} className="accent-text link-text">Go back.</span>
    </div>
  )
}