import {motion} from 'framer-motion';

const transition = (OgComponent) => {
    return () => (
        <>
            <OgComponent/>
            <motion.div
                className='slide-in'
                initial={{scaleX: 1}}
                animate={{scaleX: 0}}
                exit={{scaleX: 0}}
                transition={{duration: 0.5,ease:'easeInOut'}}/>
            <motion.div
                className='slide-out'
                initial={{scaleX: 0}}
                animate={{scaleX: 0}}
                exit={{scaleX: 1}}
                transition={{duration: 0.5,ease:'easeInOut'}}/>
        </>
    )
}

export default transition
