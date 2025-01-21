export const headerVariants = {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 0.3, ease: 'easeIn' },
};

export const leftVariants = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0 },
    transition: { duration: 0.6, delay: 0.3, ease: 'easeIn' },
};

export const centerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6, delay: 0.3, ease: 'easeIn' },
};

export const rithVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, delay: 0.3, ease: 'easeIn' },
};

export const mobileVariants = {
    initial: { opacity: 0, y: 0 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 2, delay: 0.3 },
};
