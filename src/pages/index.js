import styles from '@/styles/Home.module.css'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'

export default function Home() {
  const { isConnected } = useAccount()
  return (
    <main className={styles.main}>
      <ConnectButton />
      {isConnected && <p>You're Connected!</p>}
    </main>
  )
}
