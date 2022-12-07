import { SectionTitle } from 'components'
import { skills } from 'content'
import React from 'react'

type SkillsProps = {
    order: string
    className?: string
}

export const Skills = (props: SkillsProps) => {
    return (
        <div className={`mt-4 ${props.className}`}>
            <SectionTitle order={props.order} label='Skills' />
            <div className='mt-4 flex gap-1 flex-wrap'>
                {skills.map((label, index, arr) => (
                    <React.Fragment key={index}>
                        <div className='font-bold'>{label}</div>
                        {index + 1 < arr.length && <div>•</div>}
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}
