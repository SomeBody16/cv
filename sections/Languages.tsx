import { SectionTitle } from 'components'
import { languages } from 'content'

type LanguagesProps = {
    order: string
    className?: string
}

export const Languages = (props: LanguagesProps) => {
    return (
        <div className={`mt-4 ${props.className}`}>
            <SectionTitle order={props.order} label='Languages' />
            <div className='mt-4 flex flex-col gap-1'>
                {languages.map((lang, index) => (
                    <div key={index} className='flex gap-2'>
                        <span className='font-bold'>{lang.name}:</span>
                        <span>{lang.level}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
