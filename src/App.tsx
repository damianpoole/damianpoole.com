import Terminal from '@/components/Terminal'
import { ThemeProvider } from '@/components/ThemeProvider'

function App() {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <div className="flex min-h-screen w-full flex-col bg-[#303446] text-[#c6d0f5]">
                <Terminal />
            </div>
        </ThemeProvider>
    )
}

export default App
