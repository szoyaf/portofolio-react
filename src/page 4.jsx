import AnimatedPage from "./AnimatedPage";
import { GitHub } from "react-feather"
import IconButton from "./components/iconButtons.jsx"

const Box = ({ children }) => {
    return (
        <div className="box-container-2 p-4 border border-blue-light rounded-lg drop-shadow-2xl-blue-lighter">
            {children}
        </div>
    );
}

const Page4 = () => {
    return (
        <>
            <AnimatedPage>
                <p className='font-goldman text-blue-main text-4xl m-0 p-0'>
                    My Projects
                </p>
            </AnimatedPage>
                
            <br/>

            <AnimatedPage>
                <div className="cards-container">
                    <Box>
                        <p className='font-goldman text-blue-light text-1xl m-0 p-0'>
                            Ristek Web Application
                        </p>

                        <br/>

                        <p className='font-goldman text-blue-light text-1xl m-0 p-0'>
                            I built APIs for OKK management system, the APIs supports multiple CRUD features for managing committees, new students, and scheduling system between mentor and mentee
                        </p>

                        <br/>

                        <div style={{ paddingRight: 5}}>
                            <IconButton text="Github" href="https://github.com/szoyaf/ristek-okk-webdev">
                                <GitHub size={20} />
                            </IconButton>
                        </div>
                    </Box>

                    <Box>
                        <p className='font-goldman text-blue-light text-1xl m-0 p-0'>
                            Sistech Blog Application
                        </p>
                        
                        <br/>

                        <p className='font-goldman text-blue-light text-1xl m-0 p-0'>
                            I made a simple blog site with API that supports CRUD features to posts being added.
                        </p>
                        
                        <br/>

                        <div style={{ paddingRight: 5}}>
                            <IconButton text="Github" href="https://github.com/szoyaf/blog-sistech">
                                <GitHub size={20} />
                            </IconButton>
                        </div>
                    </Box>
                </div>
            </AnimatedPage>
        </>
    )
}

export default Page4;