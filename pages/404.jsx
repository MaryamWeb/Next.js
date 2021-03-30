import Head from 'next/head';
import Link from 'next/link'
import Styles from '../styles/404.module.css';

const NotFound=()=>{
    return(
        <>
            <Head>
				<title>Not Found</title>
			</Head>
            <div className={`${Styles.box}`}>
                <h1 className={`${Styles.header}`}>404</h1>
                <h3>We couldn't find this page.</h3>
                <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
            </div>
        </>
    )
}

export default NotFound