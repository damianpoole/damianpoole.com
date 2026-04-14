import { safeRenderMarkdown } from '@/utils/sanitizeHtml.server'
import { terminalContent } from '@/data/terminalContent'
import { Prompt } from './terminal/Prompt'

const htmlOutput = safeRenderMarkdown(terminalContent.output)

const StaticTerminal = () => {
    return (
        <div className="text-cat-text w-full font-mono text-lg md:text-xl">
            <div className="w-full max-w-screen-lg p-4 md:p-8">
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
        </div>
    )
}

export default StaticTerminal
