type SectionTitleProps = {
    order: string
    label: string
}

export const SectionTitle = (props: SectionTitleProps) => {
    return (
        <div className='text-2xl font-bold uppercase flex gap-2'>
            <span className='text-primary'>{props.order}.</span>
            <span>{props.label}</span>
        </div>
    )
}
