import Link from 'next/link'
import Image from 'next/image'

export default function FirstPost() {
    return (
    <>
        <h1>첫 번째 포스팅!</h1>
        <h2>
            <Link href="/">
                <a>홈으로</a>
            </Link>
        </h2>
        <Image
            src='/images/profile.jpg'
            height={144}
            width={144}
            alt='나의 이미지'
        />
    </>
    )
}