import Image from 'next/image';

export const Avatar = ({src}) => {
    return <Image
        width="40"
        height="40"
        style={{
        borderRadius: '50%',
        objectFit: 'cover'
    }}
        alt='avatar'
        src={src}
    />
}