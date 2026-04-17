export const fadeVariants = {
  upOpening: {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  },
  up: {
    hidden: { opacity: 0, y: -80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  },

  down: {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  },

  left: {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  },

  right: {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  },

  in : {
    hidden: {
    opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 10,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  }
};