import Login from '@/components/Login'
import Head from 'next/head'
import { useAuth } from '../context/AuthContext'
import UserDashboard from '@/components/UserDashboard'

export default function Home() {
  const { currentUser } = useAuth()

  return (
    <>
      <Head>
        <title>To-Do</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      {!currentUser && <Login />}
      {currentUser && <UserDashboard />}
    </>
  )
}