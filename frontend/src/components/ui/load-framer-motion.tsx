import { motion } from "framer-motion"


interface LoadFramerMotionProps {
    children: React.ReactNode,
}

export const LoadFramerMotion = ({
    children,
}: LoadFramerMotionProps) => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity:1, scale:1}}
            transition={{duration:1}}
            
        >
            {children}
        </motion.div>
    )
}