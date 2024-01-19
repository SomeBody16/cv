import { header } from 'content'
import Image from 'next/image'
import profilePhoto from 'public/image/profile-photo.webp'

export const Header = () => {
    return (
        <header>
            <div className='flex'>
                <div className='grow'>
                    <div className='flex h-24 items-end'>
                        <div className='text-8xl mr-4 text-primary'>CV.</div>
                        <div className='text-4xl font-bold flex flex-col justify-end pb-1'>
                            <div>{header.name}</div>
                            <div>{header.surname}</div>
                        </div>
                    </div>
                    <div className='mt-4 text-lg'>
                        <div className='flex gap-2'>
                            <span className='font-bold'>E-mail:</span>
                            <span>{header.email}</span>
                        </div>
                        <div className='flex gap-2'>
                            <span className='font-bold'>Phone:</span>
                            <span>{header.phone}</span>
                        </div>
                        <div className='flex gap-2'>
                            <span className='font-bold'>Current place of residence:</span>
                            <span>{header.residence}</span>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <Image src={profilePhoto} alt='Profile photo' width={200} />
                </div>
            </div>
            <div
                className='mt-4 p-4 border-x-4 border-primary'
                dangerouslySetInnerHTML={{
                    __html: header.description,
                }}
            />
        </header>
    )
}
