import Link from 'next/link'

const Header=()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light main-bg mb-5"> 
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
            <Link href="/" ><a className="nav-link text-white">Home</a></Link>
            </li>
        </ul>
    </nav>   
    )
}

export default Header