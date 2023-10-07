import { useContext } from "react";
import { ColorContext } from "../../Hooks/useTheme";

export const BlogCard = ({ image, date, CardTitle, CardDescription }) => {
    const { colorValue } = useContext(ColorContext);

    return (
      <>
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <div className="mx-auto mb-10 max-w-[370px]">
            <div className="mb-8 overflow-hidden rounded">
              <img src={image} alt="" className="w-full" />
            </div>
            <div>
              {date && (
                <span style={{color:colorValue}} className="inline-block px-4 py-1 mb-5 text-xs font-semibold leading-loose text-center  rounded bg-primary">
                  {date}
                </span>
              )}
              <h3>
                <a
                  href="/#"
                  className="inline-block mb-4 text-xl font-semibold text-white  sm:text-2xl lg:text-xl xl:text-2xl"
                >
                  {CardTitle}
                </a>
              </h3>
              <p className="text-base text-white">{CardDescription}</p>
            </div>
          </div>
        </div>
      </>
    );
  };