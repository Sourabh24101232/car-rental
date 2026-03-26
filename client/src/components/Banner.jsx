import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'

const Banner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}

      className="flex flex-col md:flex-row md:items-center items-center  justify-between px-8 md:px-14 py-12 bg-gradient-to-r from-[#0558FE] to-[#A9CFFF]  w-full max-w-7xl mx-auto rounded-2xl overflow-hidden mt-15 mb-10">

      {/* LEFT TEXT SECTION */}
      <div className="text-white md:w-1/2">
        <h2 className="text-3xl font-medium">
          Do You Own a Luxury Car?
        </h2>

        <p className="mt-2">
          Monetize your vehicle effortlessly by listing it on CarRental.
        </p>

        <p className="max-w-[500px]">
          We take care of insurance, driver verification and secure payments –
          so you can earn passive income, stress-free.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 bg-white hover:bg-slate-100 transition-all text-primary rounded-lg text-sm mt-4 cursor-pointer"> List your car</motion.button>
      </div>

      {/* RIGHT IMAGE */}
      <motion.img
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}

        src={assets.banner_car_image}
        alt="car"
        className="max-h-[260px] md:max-h-[320px] mt-10 md:mt-0 mx-auto"
      />

    </motion.div>
  )
}

export default Banner
