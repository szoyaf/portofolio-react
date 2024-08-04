import AnimatedPage from "./AnimatedPage";
import { GitHub, Twitter, Instagram, Linkedin } from "react-feather"
import IconButton from "./components/iconButtons.jsx"

const Box = ({ children }) => {
    return (
        <div className="box-container p-4 border border-blue-light rounded-lg drop-shadow-2xl-blue-lighter">
            {children}
        </div>
    );
}

const Page5 = () => {
    return (
        <>
            <AnimatedPage>
                <p className='font-goldman text-blue-main text-4xl m-0 p-0 relative z-10 flex flex-col justify-center items-center self-center content-center'>
                    My Socials
                </p>
            </AnimatedPage>
                
                <br/>

            <AnimatedPage>
                <div className="cards-container">
                    <Box>
                        <div style={{ paddingRight: 5}}>
                            <IconButton text="Github" href="https://github.com/szoyaf">
                                <GitHub size={20} />
                            </IconButton>
                        </div>

                        <div style={{ paddingRight: 5}}>
                            <IconButton text="LinkedIn" color="bg-sky-600" href="https://www.linkedin.com/in/shaneyzoya/">
                                <Linkedin size={20} />
                            </IconButton>
                        </div>

                        <div style={{ paddingRight: 5}}>
                            <IconButton
                                text="/szoyaf"
                                color="bg-gradient-to-tr from-yellow-500 to-purple-500 via-pink-500"
                                href="https://www.instagram.com/szoyaf/"
                            >
                                <Instagram size={20} />
                            </IconButton>
                        </div>
                        
                        <IconButton text="/mownanon" color="bg-sky-500" href="https://x.com/mownanon">
                            <Twitter size={20} />
                        </IconButton>
                    </Box>
                </div>
            </AnimatedPage>
        </>
    )
}

export default Page5;