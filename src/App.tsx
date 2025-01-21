import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header, Contact, Profile, AboutMe, Biography, Animation, Projects, Info } from './components/index';
import { transition } from "./lib/transition";
import { headerVariants, leftVariants, centerVariants, rithVariants, mobileVariants } from "./lib/animations";
import { useMobile } from "./hook/useMobile";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [resizeKey, setResizeKey] = useState(0);
  const isMobile = useMobile();

  useEffect(() => {
    if (isMobile) {
      setResizeKey(prev => prev + 1); 
      setIsLoading(false); 
    } else { setIsLoading(true)}
  }, [isMobile]);

  return (
    <div className="App min-h-screen flex justify-center pr-1 pl-5 pb-4 pt-5 lg:p-4">
      <div className=" flex flex-col gap-3 lg:grid lg:gap-1 grid-cols-12 grid-rows-12 w-[90%] lg:w-[75%] ">
        <AnimatePresence key={resizeKey}>
          
          {!isMobile && (
            <motion.div
              className="col-span-3 row-span-5 row-start-2 relative flex"
              key="secondary-1"
              variants={transition}
              initial="initial"
              animate="animate"
              transition={transition.transition}
              onAnimationComplete={() => setIsLoading(false)}
            >
              <Profile />
              <motion.h1
                className="tittle"
                initial={{ opacity: 1, x: 0 }}
                animate={{ opacity: 0, x: 100 }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                Fabian...
              </motion.h1>
            </motion.div>
          )}

          {!isLoading && (
            <>
            <motion.div
            className="col-span-12 flex relative"
            key="primary"
            variants={headerVariants}
            initial="initial"
            animate="animate"
            transition={headerVariants.transition}
          >
            <Header />
          </motion.div>
              <motion.div
                className="col-span-5 col-start-4 row-start-2 flex relative"
                key="secondary-3"
                variants={ isMobile ?  mobileVariants : leftVariants }
                initial="initial"
                animate="animate"
                transition={isMobile ?  mobileVariants.transition :leftVariants.transition}
              >
                <Contact />
              </motion.div>

              <motion.div
                className="col-span-4 row-span-7 col-start-9 row-start-2 flex relative"
                key="secondary-4"
                variants={ isMobile ?  mobileVariants : rithVariants}
                initial="initial"
                animate="animate"
                transition={isMobile ?  mobileVariants.transition : rithVariants.transition}
              >
                <AboutMe />
              </motion.div>

              <motion.div
                className="col-span-5 row-span-4 col-start-4 row-start-3 flex relative"
                key="secondary-5"
                variants={isMobile ?  mobileVariants : leftVariants}
                initial="initial"
                animate="animate"
                transition={isMobile ?  mobileVariants.transition : leftVariants.transition}
              >
                <Biography />
              </motion.div>

              <motion.div
                className="col-span-6 row-span-6 row-start-7 flex relative"
                key="secondary-5"
                variants={isMobile ?  mobileVariants : leftVariants}
                initial="initial"
                animate="animate"
                transition={isMobile ?  mobileVariants.transition : leftVariants.transition}
              >
                <Projects />
              </motion.div>

              <motion.div
                className="col-span-2 row-span-2 col-start-7 row-start-7 flex relative"
                key="secondary-7"
                variants={ isMobile ?  mobileVariants : centerVariants}
                initial="initial"
                animate="animate"
                transition={ isMobile ?  mobileVariants.transition : centerVariants.transition}
              >
                <Animation />
              </motion.div>

              <motion.div
                className="col-span-6 row-span-4 col-start-7 row-start-9 flex relative "
                key="secondary-8"
                variants={ isMobile ?  mobileVariants : rithVariants}
                initial="initial"
                animate="animate"
                transition={ isMobile ?  mobileVariants.transition : rithVariants.transition}
              >
                <Info />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;