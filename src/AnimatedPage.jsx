import { motion } from "framer-motion"

const animations = {
    initial: {opacity: 0, y: 75},
    animate: {opacity: 1, y: 0},
    exit: {opacity: 0, y: -75},
}

const AnimatedPage = ({ children, justifyContent = 'center', alignItems = 'center'}) => {
    return (
        <>
            <motion.div 
                variants={animations} 
                initial="initial" 
                animate="animate" 
                exit="exit" 
                transition={{ duration: 0.5, delay: 0.1 }}
                style={{ display: 'flex', justifyContent: justifyContent, alignItems: alignItems, width: '100%',}}
            >
                {children}
            </motion.div>
        </> 
    )
}

export default AnimatedPage