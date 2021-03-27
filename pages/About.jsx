import Image from 'next/image'
const About=()=>{
    return(
        <>
            <h1 className="text-center">About</h1>
            <div className="row mt-5">
            <div className="col-6">
                <Image src="/userDevice.jfif" width={600} height={400} /> 
            </div>
            <div className="col-6 my-auto">
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit cupiditate ducimus necessitatibus ullam repellendus, quam repudiandae recusandae excepturi nisi, voluptates optio voluptatum numquam harum ipsam beatae alias, asperiores ipsum distinctio?</p>
            </div>

            </div>
        </>
    )
}
export default About