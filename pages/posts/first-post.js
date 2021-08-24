import Link from 'next/link'

export default function FirstPost() {
    return (
    <>
        <h1>첫 번쨰 포스팅!</h1>
        <h2>
            <Link href="/">
                <a>홈으로</a>
            </Link>
        </h2>
    </>
    )
}