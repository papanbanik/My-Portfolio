import React, { useState, useRef } from "react";
import { library } from "../assets/assets";
import { motion } from "framer-motion";

const About = () => {

  const [count, setCount] = useState(0);
  const [leetCount, setLeetCount] = useState(0);
  const [clientCount, setClientCount] = useState(0);

  const hasCountedRef1 = useRef(false);
  const hasCountedRef2 = useRef(false);
  const hasCountedRef3 = useRef(false);


  const startCount = ({ number, setter }) => {

    let current = 0;
    const duration = 1500;
    const stepTime = duration / number;

    const interval = setInterval(() => {

      current += 1;
      setter(current);

      if (current >= number) {
        clearInterval(interval);
      }

    }, stepTime);
  };


  const handleCountStart = (number, setter, ref) => {

    if (!ref.current) {
      ref.current = true;
      startCount({ number, setter });
    }

  };


  return (

    <section
      id="about"
      className="
      w-full 
      min-h-[350px]
      mt-10
      px-5
      sm:px-16
      text-white
      "
    >


      <div
        className="
        flex
        flex-col
        lg:flex-row
        gap-12
        justify-around
        "
      >


        {/* Skills */}

        <div>

          <h2 className="
          text-2xl
          font-bold
          mb-8
          ">
            Skills
          </h2>


          <div className="flex gap-8 items-center">


            <motion.div

              initial={{opacity:0,y:20}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:1}}
              viewport={{once:true}}

              className="
              flex
              flex-col
              gap-6
              "
            >

              {
                library.map((img,index)=>(
                  <img
                    key={index}
                    src={img}
                    className="w-10"
                  />
                ))
              }


            </motion.div>



            <motion.div

              initial={{opacity:0,x:-20}}
              whileInView={{opacity:1,x:0}}
              transition={{duration:1}}
              viewport={{once:true}}

              className="
              flex
              flex-col
              gap-7
              text-xl
              "
            >

              <p>Tailwind</p>
              <p>React</p>
              <p>Next JS</p>
              <p>PostgreSQL</p>

            </motion.div>


          </div>

        </div>




        {/* About */}

        <div>

          <h2 className="
          text-2xl
          font-bold
          mb-5
          ">
            About Me
          </h2>


          <p
          className="
          max-w-[420px]
          text-sm
          text-gray-300
          leading-6
          text-justify
          "
          >

            Aspiring software engineer with strong interest in web development.
            Skilled in JavaScript, React, Next JS and Tailwind CSS with
            experience building responsive applications.
            Strong foundation in problem solving and data structures.

          </p>



          {/* Stats */}


          <div className="
          flex
          gap-8
          mt-8
          flex-wrap
          ">


            <div>

              <Counter
                value={count}
                setter={setCount}
                target={10}
                refValue={hasCountedRef1}
              />

              <p>Completed Project</p>

            </div>



            <div>

              <Counter
                value={leetCount}
                setter={setLeetCount}
                target={102}
                refValue={hasCountedRef2}
              />

              <p>LeetCode Solved</p>

            </div>




            <div>

              <Counter
                value={clientCount}
                setter={setClientCount}
                target={95}
                refValue={hasCountedRef3}
              />

              <p> Satisfaction Ratio</p>

            </div>


          </div>


        </div>



      </div>


    </section>

  );
};




const Counter = ({value,setter,target,refValue}) => (

<motion.span

initial={{opacity:0}}

whileInView={{opacity:1}}

viewport={{once:true}}

onViewportEnter={()=>{
  
  if(!refValue.current){

    refValue.current=true;

    let current=0;

    const interval=setInterval(()=>{

      current++;

      setter(current);

      if(current>=target)
        clearInterval(interval)

    },1500/target)

  }

}}

className="
text-4xl
font-bold
text-[#7C86FF]
"

>

{value}+

</motion.span>

)


export default About;