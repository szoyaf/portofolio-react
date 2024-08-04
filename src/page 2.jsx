import AnimatedPage from "./AnimatedPage";

const Page2 = () => {
    return (
        <>
            <AnimatedPage>
                <p className='font-goldman text-blue-main text-4xl m-0 p-0 relative z-10 flex flex-col justify-center items-center self-center content-center'>
                    About Me
                </p>
            </AnimatedPage>
                
                <br/>

            <AnimatedPage>
                <p className='font-goldman text-blue-light text-1xl w-9/12 m-0 p-0 relative z-10 flex flex-col justify-center items-center self-center content-center'>
                I am an aspiring Software Engineer and a second-year Information Systems student at the University of Indonesia. I have experience in game development with Unity, web development using Spring Boot, and database management with SQL. Driven by curiosity and a passion for technology, I am eager to learn, take on new challenges, and contribute to meaningful projects.
                </p>
            </AnimatedPage>
        </>
    )
}

export default Page2;