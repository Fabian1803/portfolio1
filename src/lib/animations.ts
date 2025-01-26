export const headerVariants = {
    animate: { opacity: [0,.2,1], y: [-100,-85,0] },
    transition: { duration: 0.5, delay: 0.6, ease: 'easeIn' },
};

export const leftVariants = {
    animate: { opacity: [0,.2,1], x: [-100,-85,0] },
    exit: { opacity: 0 },
    transition: { duration: 0.6, delay: 0.6, ease: 'easeIn' },
};

export const centerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6, delay: 0.6, ease: 'easeIn' },
};

export const rithVariants = {
    animate: { opacity: [0,.2,1], x: [100,85,0] },
    transition: { duration: 0.5, delay: 0.6, ease: 'easeIn' },
};

export const mobileVariants = {
    initial: { opacity: 0, y: 0 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 2, delay: 0.3 },
};
