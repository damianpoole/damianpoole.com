import { GitBranch, Package } from 'lucide-react'

interface PromptProps {
    path: string
    branch: string
    nodeVersion: string
}

export const Prompt = ({ path, branch, nodeVersion }: PromptProps) => (
    <div className="mb-2 flex flex-wrap items-center gap-x-2 gap-y-1">
        <span className="text-cat-blue font-bold">~</span>
        <span className="text-cat-subtext0">/</span>
        <span className="text-cat-teal font-bold">{path}</span>
        <span className="text-cat-subtext0">on</span>

        {/* Git Branch Segment */}
        <div className="flex items-center gap-1">
            <GitBranch className="text-cat-blue h-5 w-5" strokeWidth={2.5} />
            <span className="text-cat-blue font-bold">{branch}</span>
        </div>

        <span className="text-cat-subtext0">via</span>

        {/* Node Version Segment */}
        <div className="flex items-center gap-1">
            <Package className="text-cat-green h-5 w-5" />
            <span className="text-cat-green font-bold">{nodeVersion}</span>
        </div>

        <span className="text-cat-green font-bold">❯</span>
    </div>
)
