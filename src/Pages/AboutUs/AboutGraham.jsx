import React from "react";
import CountUp from "react-countup";
import image from '../../assets/AboutS1.png'
const AboutGraham = () => {
    const formatNumber = (value) => `${value}+`;
  return (
    <>
      <div className="mt-14">
        <div className="lg:grid grid-cols-2  flex flex-col-reverse gap-10 md:gap-0">
          <div>
            <div>
              <h1 className="font-Robot font-bold text-black text-4xl ">
                About Graham
              </h1>
            </div>
            <div className="font-Mont font-medium text-base my-4 text-start">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                rutrum urna metus, id mauris mattis ac. Vestibulum auctor
                elementum convallis. Sed porta scelerisque turpis, sit amet
                euismod urna facilisis sit amet. Ut pellentesque egestas nunc,
                eget condimentum tellus mattis id. Etiam eu ligula commodo,
                ornare leo vel, <br/>ultrices nisl. Etiam auctor odio nunc.
              </p>
              <p className="mt-4">
                Quisque ipsum erat, eleifend et placerat vel, lacinia ac arcu.
                Nam feugiat ut urna vitae porta Aliquam faucibus lacus id magna
                vestibulum, a auctor erat blandit. Suspendisse ut lectu feugiat
                eros. Phasellus mauris odio,<br/> convallis ac libero vitae, feugiat
                tempor odio. Nulla facilisi.
              </p>
            </div>
            <div className="md:grid grid-cols-2 text-center md:text-start ">
             <div>
             <div>
              <CountUp end={ 295 } duration={2}  suffix="+" className="text-black font-Mont font-bold text-[40px]"/>
              </div>
              <div>
                <p className="font-Robot font-bold text-sm">Sellers
                    </p>
                    <p className="font-Robot font-normal text-sm text-[#00000080]">
                    Ei nominavi suavitate deterruisset qui, assum ubique quodsi.
                    </p>
              </div>
             </div>
             {/* --------------------------- */}
             <div>
             <div>
              <CountUp end={ 1500 } duration={2} formattingFn={formatNumber}  suffix="+" className="text-black font-Mont font-bold text-[40px]"/>
              </div>
              <div>
                <p className="font-Robot font-bold text-sm">Buyers
                    </p>
                    <p className="font-Robot font-normal text-sm text-[#00000080]">
                    Id qui purto dicit, bonorum minimum et sit.
                    </p>
              </div>
             </div>
            </div>
          </div>
          {/* ----------------------------------------- */}
          <div>
            <div>
                <img src={image}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutGraham;
