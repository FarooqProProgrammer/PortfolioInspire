import React, { useContext } from 'react'
import { ContactInputBox, ContactTextArea } from '../ContactAddOn'
import { AiOutlineHome, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { ColorContext } from '../../Hooks/useTheme';

export default function Contact() {
  const { colorValue } = useContext(ColorContext);

  return (
    <section id='contact' className="bg-white py-20 lg:py-[120px] overflow-hidden relative px-10 z-10 lg:mx-0 md:mx-0 mx-5 ">
        <div className="container">
          <div className="flex flex-wrap -mx-4 lg:justify-between">
            <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
              <div className="mb-12 max-w-[570px] lg:mb-0">
                <span style={{color:colorValue}} className={`block mb-4 text-base  font-semibold text-primary`}>
                  Contact Us
                </span>
                <h2 className="mb-6 text-[32px] font-bold  uppercase text-dark sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                  GET IN TOUCH WITH US
                </h2>
                <p className="text-base leading-relaxed mb-9 text-body-color">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eius tempor incididunt ut labore e dolore magna aliqua. Ut
                  enim adiqua minim veniam quis nostrud exercitation ullamco
                </p>
                <div className="mb-8 flex w-full max-w-[370px]">
                  <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary bg-opacity-5 text-primary sm:h-[70px] sm:max-w-[70px]">
                    <AiOutlineHome size={40} style={{color:colorValue}}   />
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-xl font-bold text-dark">
                      Our Location
                    </h4>
                    <p className="text-base text-body-color">
                      99 S.t Jomblo Park Pekanbaru 28292. Indonesia
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex w-full max-w-[370px]">
                  <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary bg-opacity-5 text-primary sm:h-[70px] sm:max-w-[70px]">
                    <AiOutlinePhone size={40} style={{color:colorValue}}  />
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-xl font-bold text-dark">
                      Phone Number
                    </h4>
                    <p className="text-base text-body-color">
                      (+62)81 414 257 9980
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex w-full max-w-[370px]">
                  <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary bg-opacity-5 text-primary sm:h-[70px] sm:max-w-[70px]">
                    <AiOutlineMail size={40} style={{color:colorValue}}  />
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-xl font-bold text-dark">
                      Email Address
                    </h4>
                    <p className="text-base text-body-color">
                      info@yourdomain.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="relative p-8 bg-white rounded-lg shadow-lg sm:p-12">
                <form>
                  <ContactInputBox
                    type="text"
                    name="name"
                    placeholder="Your Name"
                  />
                  <ContactInputBox
                    type="text"
                    name="email"
                    placeholder="Your Email"
                  />
                  <ContactInputBox
                    type="text"
                    name="phone"
                    placeholder="Your Phone"
                  />
                  <ContactTextArea
                    row="6"
                    placeholder="Your Message"
                    name="details"
                    defaultValue=""
                  />
                  <div>
                    <button
                      type="submit"
                      style={{color:colorValue}} 
                      className="w-full p-3  transition border rounded border-primary bg-primary hover:bg-opacity-90"
                    >
                      Send Message
                    </button>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
