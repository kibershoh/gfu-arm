import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { wrap } from "@popmotion/popcorn"

import "./styles.scss"
import { IMAGES } from "../../Constants/CarouselImage"
import { GoArrowRight,GoArrowLeft } from "react-icons/go";
 

const sliderVariants = {
  incoming: direction => ({
    x: direction > 0 ? "100%" : "-100%",
    scale: 1.2,
    opacity: 0
  }),
  active: { x: 0, scale: 1, opacity: 1 },
  exit: direction => ({
    x: direction > 0 ? "-100%" : "100%",
    scale: 1,
    opacity: 0.2
  })
}

const sliderTransition = {
  duration: 1,
  ease: [0.56, 0.03, 0.12, 1.04]
}

const CarouselSlide = () => {
  const [[imageCount, direction], setImageCount] = useState([0, 0])

  const activeImageIndex = wrap(0, IMAGES.length, imageCount)

  const swipeToImage = swipeDirection => {
    setImageCount([imageCount + swipeDirection, swipeDirection])
  }

  const dragEndHandler = dragInfo => {
    const draggedDistance = dragInfo.offset.x
    const swipeThreshold = 50
    if (draggedDistance > swipeThreshold) {
      swipeToImage(-1)
    } else if (draggedDistance < -swipeThreshold) {
      swipeToImage(1)
    }
  }

  const skipToImage = imageId => {
    let changeDirection
    if (imageId > activeImageIndex) {
      changeDirection = 1
    } else if (imageId < activeImageIndex) {
      changeDirection = -1
    }
    setImageCount([imageId, changeDirection])
  }

  return (
    <main className="flex">
      <div className="slider-container ">
        <div className="slider w-10/12 h-80 rounded-md">
          <AnimatePresence  initial={false} custom={direction}>
            <motion.div
              key={imageCount}
              style={{
                backgroundImage: `url(${IMAGES[activeImageIndex].imageSrc})`
              }}
              custom={direction}
              variants={sliderVariants}
              initial="incoming"
              animate="active"
              exit="exit"
              
              transition={sliderTransition}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
              className="image"
            />
          </AnimatePresence>
        </div>

        <div className="flex gap-10 mt-3">
          <button className="hover:scale-110 duration-1000 hover:text-violet-700" onClick={() => swipeToImage(-1)}><GoArrowLeft size={25}/></button>
          <button className="hover:scale-110 duration-1000 hover:text-violet-700" onClick={() => swipeToImage(1)}><GoArrowRight size={25}/></button>
        </div>
      </div>

      <div className="thumbnails flex justify-center gap-20">
        {IMAGES.map(image => (
          <div
            key={image.id}
            onClick={() => skipToImage(image.id)}
            className="thumbnail-container"
          >
            <img className="rounded " src={image.imageSrc} alt="Musician" />
            <div
              className={`active-indicator ${
                image.id === activeImageIndex ? "active" : null
              }`}
            />
          </div>
        ))}
      </div>
    </main>
  )
}

export default CarouselSlide
