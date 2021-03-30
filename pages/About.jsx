import Head from 'next/head';
import Image from 'next/image'
import Styles from '../styles/Home.module.css';

const About=()=>{
    return(
        <>
            <Head>
				<title>About</title>
			</Head>
            <div className="row mt-5">
                <div className={`col-6 ${Styles.imgAbout} `}>
                    <Image src="/userDevice.jfif" layout="fill" objectFit="cover" objectPosition="center"/> 
                </div>
                <div className="col-6 my-auto">
                    <h1 className="text-center heading">About</h1>
                    <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit cupiditate ducimus necessitatibus ullam repellendus, quam repudiandae recusandae excepturi nisi, voluptates optio voluptatum numquam harum ipsam beatae alias, asperiores ipsum distinctio?</p>
                </div>
            </div>
        </>
    )
}
export default About