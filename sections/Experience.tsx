import { SectionTitle } from 'components'
import { experience } from 'content'
import React from 'react'

type ExperienceProps = {
    order: string
    className?: string
}

export const Experience = (props: ExperienceProps) => {
    return (
        <div className={`mt-4 ${props.className}`}>
            <SectionTitle order={props.order} label='Experience' />
            <div className='mt-4'>
                {experience.map((entry, index) => (
                    <div key={index} className='mt-4 flex flex-col'>
                        <div className='flex gap-2'>
                            <span>{entry.from}</span>
                            <span>-</span>
                            <span>{entry.until}</span>
                        </div>
                        <div className='flex gap-2 text-lg'>
                            <div className='font-bold'>{entry.label}</div>
                            <div className='italic'>/ {entry.company}</div>
                        </div>
                        <div className='border-l-2 border-primary pl-2 mt-1'>
                            {entry.duties.map((duty, index) => (
                                <div key={index}>{duty}</div>
                            ))}
                        </div>
                        <div className='flex gap-2 font-bold mt-1'>
                            {entry.tags.map((tag, index, arr) => (
                                <React.Fragment key={index}>
                                    <div>{tag}</div>
                                    {index + 1 < arr.length && <div>•</div>}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
