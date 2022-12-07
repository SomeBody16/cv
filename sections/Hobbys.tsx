import { SectionTitle } from 'components'
import { hobbys } from 'content'
import React from 'react'

type HobbysProps = {
    order: string
    className?: string
}

export const Hobbys = (props: HobbysProps) => {
    return (
        <div className={`mt-4 ${props.className}`}>
            <SectionTitle order={props.order} label='Hobby' />
            <div className='mt-4 flex gap-1 font-bold flex-wrap'>
                {hobbys.map((hobby, index, arr) => (
                    <React.Fragment key={index}>
                        <div>{hobby}</div>
                        {index + 1 < arr.length && <div>•</div>}
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}
