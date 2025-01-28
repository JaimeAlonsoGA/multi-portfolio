'use client'

import { Badge } from "./badge";


const Tag: React.FC<{ label: string }> = ({ label }) => (
    <div className={`rounded-md p-2 text-sm `}>
        <Badge variant="outline">{label}</Badge>
    </div>
)

export default Tag;