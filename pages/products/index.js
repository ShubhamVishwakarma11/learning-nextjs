import Link from 'next/link'
import {useRouter} from 'next/router';

function ProductList( {productId = 100}) {
    const router = useRouter();

    const handleClick = () => {
        console.log("Redirecting to blogs directory...");
        router.push('/blog');
    }
    return (
    <>
        <Link href='/'> 
            <a>Home</a> 
        </Link>
        <h1> Product List Page</h1>
        <ul>
            <li>
                <Link href='/products/1'>
                    <a> Product 1</a>
                </Link> 
            </li>
            <li>
                <Link href='/products/2'>
                    <a> Product 2</a>
                </Link> 
            </li>
            <li>
                <Link href='/products/3' replace>
                    <a> Product 3</a>
                </Link> 
            </li>
            <li>
                <Link href={`/products/${productId}`}>
                    <a> Product {productId}</a>
                </Link> 
            </li>
        </ul>
        <button onClick={handleClick}> 
            Checkout Blog
        </button>
    </>
    )   
}

export default ProductList