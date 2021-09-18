import { extendTheme, theme as defaultTheme } from "@chakra-ui/react";

export default extendTheme({
  colors: {
    primary: {
      50: "#2447F9",
    },
  },
  shadows: {
    md: "0 5px 10px rgba(17, 17, 17, 0.075)",
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: 500,
        letterSpacing: "tighter",
      },
    },
    Link: {
      variants: {
        link: {
          color: "pink.400",
        },
      },
    },
    Modal: {
      baseStyle: {
        overlay: {
          "@supports (backdrop-filter: blur(2px))": {
            backdropFilter: "blur(2px)",
          },
          "@supports (-webkit-backdrop-filter: blur(2px))": {
            WebkitBackdropFilter: "blur(2px)",
          },
        },
      },
    },
  },

  fonts: {
    body: `'Archivo',${defaultTheme.fonts.body}`,
    heading: `'Manrope',${defaultTheme.fonts.heading}`,
  },

  styles: {
    global: {
      html: {
        scrollBehavior: "smooth",
      },
      "*:focus": {
        boxShadow: "none !important",
      },
      body: {
        cursor: "default",
        fontFamily: "body",
        lineHeight: "base",
        background: "#F3F5F8",
        MozOsxFontSmoothing: "grayscale",
        WebkitFontSmoothing: "antialiased",
        textRendering: "optimizeLegibility",
      },
      "*::placeholder": {
        color: "whiteAlpha.400",
      },
      "*, *::before, &::after": {
        borderColor: "whiteAlpha.300",
        wordWrap: "break-word",
      },

      "#nprogress": {
        pointerEvents: "none",
      },
      "#nprogress .bar": {
        bgGradient: "linear(to-r, whiteAlpha.400, yellow.200)",
        h: "2px",
        left: 0,
        pos: "fixed",
        top: 0,
        w: "full",
        zIndex: 2000,
      },
      ".nprogress-custom-parent": {
        overflow: "hidden",
        position: "absolute",
      },
      ".background-left": {
        position: "fixed",
        bottom: "0px",
        left: 0,
        zIndex: -10,
      },
      ".background-right": {
        position: "fixed",
        bottom: "0px",
        left: "2.5rem",
        zIndex: -10,
      },
    },
  },
});
