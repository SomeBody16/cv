import { SectionTitle } from 'components'
import { education } from 'content'

type EducationProps = {
    order: string
    className?: string
}

export const Education = (props: EducationProps) => {
    return (
        <div className={`mt-4 ${props.className}`}>
            <SectionTitle order={props.order} label='Education' />
            <div className='mt-4'>
                {education.map((entry, index) => (
                    <div key={index} className='mt-4 flex flex-col'>
                        <div className='flex gap-2'>
                            <span>{entry.from}</span>
                            <span>-</span>
                            <span>{entry.until}</span>
                        </div>
                        <div className='text-lg font-bold'>{entry.school}</div>
                        <div className=''>{entry.level}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
