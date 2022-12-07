import { SectionTitle } from 'components'
import { certificatesEtc } from 'content'

type CertificatesEtcProps = {
    order: string
    className?: string
}

export const CertificatesEtc = (props: CertificatesEtcProps) => {
    return (
        <div className={`mt-4 ${props.className}`}>
            <SectionTitle order={props.order} label='Certificates and Courses' />
            <div className='mt-4'>
                {certificatesEtc.map((entry, index) => (
                    <div key={index} className='mt-4 flex flex-col'>
                        <div>{entry.date}</div>
                        <div className='text-lg font-bold'>{entry.name}</div>
                        <div>{entry.administrator}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
