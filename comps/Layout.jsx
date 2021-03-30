import Header from "./Header"
import Footer from "./Footer"

const Layout=({children})=>{
    return(
        <>
            <Header/>
            <div className="container children-div">
                {children}
            </div>
                <Footer/>
        </>
    )
}

export default Layout