import {motion} from 'framer-motion';

const transition = (OgComponent) => {
    return () => (
        <>
            <OgComponent/>
            <motion.div
                className='slide-in'
                initial={{scaleY: 1}}
                animate={{scaleY: 0}}
                exit={{scaleX: 0}}
                transition={{duration: 0.5,ease:'easeInOut'}}/>
            <motion.div
                className='slide-out'
                initial={{scaleY: 1}}
                animate={{scaleY: 0}}
                exit={{scaleX: 1}}
                transition={{duration: 0.5,ease:'easeInOut'}}/>
        </>
    )
}

export default transition
