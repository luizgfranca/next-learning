import Image from 'next/image'

export const ProfileImage = () => {
    return (
        <Image
            src={'/images/profile.jpg'}
            height={80}
            width={80}
            alt="profile image"
        />
    )
}