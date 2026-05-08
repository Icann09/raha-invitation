export const fadeVariants = {

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
  },

  zoom: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 4,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  },

  blur: {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1] as const
      },
    },
  },

  rotate: {
    hidden: { opacity: 0, rotate: -5, scale: 0.95 },
    visible: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1] as const
      },
    },
  },

  floatUp: {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  },

  staggerContainer: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  },

  staggerItem: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const
      },
    },
  },

  imageReveal: {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 2,
        ease: [0.22, 1, 0.36, 1] as const
      },
    },
  },

  slideOvershoot: {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
      },
    },
  },

  fadeDelayed: (delay: number) => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay,
      },
    },
  }),

};

export const containerVariantsNoDelay = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0,     // lebih renggang → terasa santai
      delayChildren: 0
    }
  },
  exit: {
    transition: {
      staggerChildren: 0,
      staggerDirection: 0
    }
  }
};

export const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.7,     // lebih renggang → terasa santai
      delayChildren: 0.5
    }
  },
  exit: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1
    }
  }
};

export const itemVariants = {
  hidden: { opacity: 0, y: 70, filter: "blur(8px)", scale: 0.96 },

  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 2.0, // ⬅️ lebih lambat tapi masih smooth
      ease: [0.16, 1, 0.3, 1] // ⬅️ lebih “flowy”
    }
  },

  exit: { 
    opacity: 0, 
    y: -30,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 1, 1]
    }
  }
};