import Head from 'next/head'
import Link from 'next/link'
import Styles from '../../styles/Users.module.css'
export const getStaticProps = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    return{props:{users:data}}
}
const Users=({users})=>{
    return(
        <>
            <Head>
                <title>Users | List</title>
            </Head>
            <ul className="list-group col-10 mx-auto">
                {users.map(user=>
                    <li key={user.id} className={`list-group-item ${Styles.listItem}`}>
                         <Link href={'/users/' + user.id} ><a className="link-dark text-decoration-none">{user.name}</a></Link> 
                    </li>
                )}
            </ul>
        </>
    )
}

export default Users;