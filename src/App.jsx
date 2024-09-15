import { createWeb3Modal } from '@web3modal/wagmi/react'
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { WagmiProvider } from 'wagmi'
import { arbitrum, mainnet, hedera, hederaTestnet, polygon, polygonAmoy, rootstock, rootstockTestnet } from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ConnectButton from './ConnectButton'


// 1. Get projectId
const projectId = '2c4250b0ed1c4c85027974613fc83eaf'

// 2. Create wagmiConfig
const metadata = {
  name: 'deApp',
  description: 'deApp for testing',
  url: 'http://localhost:5173', // Update this to match your dev server port
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet, arbitrum, hedera, hederaTestnet, polygon, polygonAmoy, rootstock, rootstockTestnet]
const config = defaultWagmiConfig({ chains, projectId, metadata })

// 3. Create modal
createWeb3Modal({ wagmiConfig: config, projectId, chains })

// 4. Create query client
const queryClient = new QueryClient()


function App() {


  return (
    <>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <h1 className="text-3xl font-bold underline">
            React + Vite + TailwindCSS + Web3Modal + Wagmi + Hedera 
          </h1>
          <ConnectButton />
        </QueryClientProvider>
      </WagmiProvider>
    </>
  )
}

export default App
