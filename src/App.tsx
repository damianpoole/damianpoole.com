import Terminal from '@/components/Terminal'
import type { TerminalNode } from '@/utils/terminalNodes'

interface AppProps {
    outputNodes: readonly TerminalNode[]
}

function App({ outputNodes }: AppProps) {
    return (
        <div className="flex min-h-screen w-full flex-col bg-[#303446] text-[#c6d0f5]">
            <Terminal outputNodes={outputNodes} />
        </div>
    )
}

export default App
