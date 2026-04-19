import { safeRenderMarkdown } from '@/utils/sanitizeHtml.server'
import { terminalContent } from '@/data/terminalContent'
import TerminalFrame from './TerminalFrame'
import { Prompt } from './terminal/Prompt'

const htmlOutput = safeRenderMarkdown(terminalContent.output)

const StaticTerminal = () => {
    return (
        <TerminalFrame activeTab="home">
            <div className="text-cat-text w-full font-mono text-lg md:text-xl">
                <Prompt {...terminalContent.prompt} />
                <div className="mb-6 flex items-center gap-2">
                    <span className="text-cat-blue font-bold">❯</span>
                    <span className="text-cat-text">
                        {terminalContent.command}
                    </span>
                </div>
                <div className="terminal-output">
                    <div
                        className="prose prose-invert prose-lg max-w-none leading-relaxed"
                        dangerouslySetInnerHTML={{
                            __html: htmlOutput,
                        }}
                    />
                </div>
            </div>
        </TerminalFrame>
    )
}

export default StaticTerminal
