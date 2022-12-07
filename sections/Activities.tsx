import { SectionTitle } from 'components'
import { activities } from 'content'

type ActivitiesProps = {
    order: string
    className?: string
}

export const Activities = (props: ActivitiesProps) => {
    return (
        <div className={`mt-4 ${props.className}`}>
            <SectionTitle order={props.order} label='Additional Activities' />
            <div className='mt-4'>
                {activities.map((entry, index) => (
                    <div key={index} className='mt-4 flex flex-col'>
                        <div className='flex gap-2'>
                            <span>{entry.from}</span>
                            <span>-</span>
                            <span>{entry.until}</span>
                        </div>
                        <div className='font-bold text-lg'>{entry.label}</div>
                        <div className='italic'>{entry.place}</div>
                        <div className='border-l-2 border-primary pl-2 mt-1'>
                            {entry.description}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
