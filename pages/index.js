import Link from 'next/link'

function Home() {
    return (
    <div>
        <h1> Home Page</h1>
        <Link href='/blog'>
            <a>Blog</a>
        </Link>
        <Link href='/products'>
            <a>Products</a>
        </Link>
        <Link href='/docs'>
            <a>Docs</a>
        </Link>
    </div>
    )
}

export default Home 