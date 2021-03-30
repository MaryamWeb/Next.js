import Head from 'next/head';
import Styles from '../../styles/Users.module.css'

export const getStaticPaths = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    const paths = data.map(user=>{
        return{params:{id:user.id.toString()}}
    })
    return{
        paths,
        fallback:false
    }
}

export const getStaticProps = async(context)=>{
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await res.json();
    return{props:{user:data}}
}

const Details=({user})=>{
    return(
      <>
        <Head>
          <title>User</title>
        </Head>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h2 className={`${Styles.headerTitle}`}>Personal Information</h2>
              <table className="table">
                <tbody>
                  <tr>
                    <th scope="row">Name</th>
                    <td>{user.name}</td>
                  </tr>
                  <tr>
                    <th scope="row">Username</th>
                    <td>{user.username}</td>
                  </tr>
                  <tr>
                    <th scope="row">Email</th>
                    <td>{user.email}</td>
                  </tr>
                  <tr>
                    <th scope="row">Phone</th>
                    <td>{user.phone}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-6">
              <h2 className={`${Styles.headerTitle}`}>Address</h2>
              <table className="table">
                <tbody>
                  <tr>
                    <th scope="row">Street</th>
                    <td>{user.address.street}</td>
                  </tr>
                  <tr>
                    <th scope="row">Suite</th>
                    <td>{user.address.suite}</td>
                  </tr>
                  <tr>
                    <th scope="row">City</th>
                    <td>{user.address.city}</td>
                  </tr>
                  <tr>
                    <th scope="row">Zipcode</th>
                    <td>{user.address.zipcode}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        <div className="col-6">
          <h2 className={`${Styles.headerTitle}`}>Company</h2>
          <table className="table">
            <tbody>
              <tr>
                <th scope="row">Name</th>
                <td>{user.company.name}</td>
              </tr>
              <tr>
                <th scope="row">Catch Phrase</th>
                <td>{user.company.catchPhrase}</td>
              </tr>
              <tr>
                <th scope="row">BS</th>
                <td>{user.company.bs}</td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
      </>
    )
}

export default Details