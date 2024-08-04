import AnimatedPage from "./AnimatedPage";

const Page3 = () => {
    return (
        <>
            <AnimatedPage>
                <p className='font-goldman text-blue-main text-4xl mx-auto'>
                    My Experiences
                </p> 
            </AnimatedPage>
            
            <div className="text-container w-9/12 mx-auto flex justify-between">
                <AnimatedPage justifyContent="flex-start" alignItems="center">
                    <p className='font-goldman text-blue-light text-1xl m-0 p-0'>
                        July 2024
                    </p>
                </AnimatedPage>

                <AnimatedPage justifyContent="flex-end" alignItems="center">
                    <p className='font-goldman text-blue-light text-1xl m-0 p-0'>
                        Present
                    </p>
                </AnimatedPage>
            </div>

            <AnimatedPage>
                <div className="line-container w-9/12 mx-auto my-4">
                    <div className="line"></div>
                </div>
            </AnimatedPage> 
            
            <AnimatedPage>
                <p className='font-goldman text-blue-light text-1xl w-9/12 m-0 p-0 relative z-10 flex flex-col justify-center items-center self-center content-center'>
                    Teaching Assistant - Programming Basics 1, University of Indonesia
                </p>
            </AnimatedPage>

            <br/>

            <div className="text-container w-9/12 mx-auto flex justify-between">
                <AnimatedPage justifyContent="flex-start" alignItems="center">
                    <p className='font-goldman text-blue-light text-1xl m-0 p-0'>
                        July 2024
                    </p>
                </AnimatedPage>

                <AnimatedPage justifyContent="flex-end" alignItems="center">
                    <p className='font-goldman text-blue-light text-1xl m-0 p-0'>
                        Present
                    </p>
                </AnimatedPage>
            </div>

            <AnimatedPage>
                <div className="line-container w-9/12 mx-auto my-4">
                    <div className="line"></div>
                </div>
            </AnimatedPage> 

            <AnimatedPage>
                <p className='font-goldman text-blue-light text-1xl w-9/12 m-0 p-0 relative z-10 flex flex-col justify-center items-center self-center content-center'>
                    Student Mentor - Programming Basics 0, University of Indonesia
                </p>
            </AnimatedPage>

            <br/>
            
            <div className="text-container w-9/12 mx-auto flex justify-between">
                <AnimatedPage justifyContent="flex-start" alignItems="center">
                    <p className='font-goldman text-blue-light text-1xl m-0 p-0'>
                        Aug 2020
                    </p>
                </AnimatedPage>

                <AnimatedPage justifyContent="flex-end" alignItems="center">
                    <p className='font-goldman text-blue-light text-1xl m-0 p-0'>
                        May 2022
                    </p>
                </AnimatedPage>
            </div>

            <AnimatedPage>
                <div className="line-container w-9/12 mx-auto my-4">
                    <div className="line"></div>
                </div>
            </AnimatedPage> 

            <AnimatedPage>
                <p className='font-goldman text-blue-light text-1xl w-9/12 m-0 p-0 relative z-10 flex flex-col justify-center items-center self-center content-center'>
                    Club Member - Coding Club, SMAK Penabur Harapan Indah
                </p>
            </AnimatedPage>
        </>
    )
}

export default Page3;