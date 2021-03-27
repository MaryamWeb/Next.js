import Link from 'next/link'

const NotFound=()=>{
    return(
        <div>
            <h1>404</h1>
            <h3>We couldn't find this page.</h3>
            <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
        </div>
    )
}

export default NotFound