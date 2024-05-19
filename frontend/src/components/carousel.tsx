import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { useEffect, useState } from "react"


interface CarouselProps {
    imagesList: string[]
}


export const Carousel = ({
    imagesList
}: CarouselProps) => {

    const [current, setCurrent] = useState(0);

    const variants = {
        hidden: { y: -1000, opacity: 0 },
        visible: { y: 0, opacity: 100 },
        exiting: { y: 100, opacity: 0 }
    };

    const nextImageHandler = () => {
        setCurrent((current) => (
            current === imagesList.length-1 ? 0 : current+1
        ))
    }

    useEffect(() => {
        const sliderInterval = setInterval(nextImageHandler, 5*1000)

        return () => (
            clearInterval(sliderInterval)
        )
    }, [])

    return (
        <div 
            className="relative flex flex-col items-center h-full bg-gradient-to-r from-light-primary to-white dark:text-white dark:bg-gradient-to-r dark:from-dark-backgroundtwo dark:to-dark-backgroundone"
        >

            <div className=" h-32 w-full flex justify-start items-center pl-8 pt-2">
                <div 
                    className="flex gap-x-1.5"
                >
                    {
                        imagesList.map((image, index) => (
                            <button 
                                className={`bg-black w-1.5 h-1.5 dark:bg-dark-primary rounded-xl ${index===current ? "bg-opacity-80 " : "bg-opacity-50 dark:bg-opacity-50" }`} 
                                onClick={() => setCurrent(index)}
                            >
                                
                            </button>
                        ))
                    }  
                </div>
            </div>
            
            {/* <div className=" bg-cover w-full h-full ">
                <img src={imagesList[current]} className="h-96"/>
            </div> */}

            <div className="bg-cover h-full w-full">
                <MotionConfig transition={{duration:0.7}}>
                    <AnimatePresence initial={false}>
                        <motion.img 
                            className="absolute h-96 w-full top-[25%]"
                            key={imagesList[current]}
                            src={imagesList[current]}
                            style={{y:0}}
                            initial="hidden"
                            animate="visible"
                            exit="exiting"
                            whileInView={{scale:0.8}}
                            variants={variants}
                            alt={imagesList[current]}
                        />

                    </AnimatePresence>
                </MotionConfig>
            </div>
            
        </div>
    )
}
// dark:bg-gradient-to-r bg-gradient-to-r from-light-primary to-white dark:from-dark-primary dark:to-dark-backgroundone