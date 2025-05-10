// radialIconsClasses.ts

export const radialIconsClasses = {
  wrapper: 'flex items-center justify-center',

  container: 'relative w-[400px] h-[400px] rounded-full',

  glow: `
    absolute 
    flex
    items-center
    justify-center
    -translate-x-1/2 
    -translate-y-1/2 
    w-[400px] 
    h-[400px] 
    z-0 
    pointer-events-none
    bg-[radial-gradient(ellipse_at_center,_rgba(83,177,253,0.25)_0%,_transparent_75%)] 
    blur-[10px] 
    opacity-95
    animate-pulse-glow
  `,

  lines: `
    absolute 
    left-1/2 
    top-1/2 
    -translate-x-1/2 
    -translate-y-1/2 
    z-10 
    pointer-events-none
  `,

  centerWrapper: `
  absolute 
  left-1/2 
  top-1/2 
  z-30
  -translate-x-1/2 
  -translate-y-1/2 
  w-40 
  h-40 
  rounded-full 
  flex 
  items-center 
  justify-center
  `,

  centerIcon: `
    p-5
    rounded-full 
    border 
    border-white
    border-opacity-20
    pointer-events-none
    shadow-[0_0_60px_30px_rgba(83,177,253,0.4)] 
    bg-[radial-gradient(ellipse_at_center,_rgba(83,177,253,0.4)_0%,_transparent_150%)] 
  `,

  iconWrapper: `
  absolute 
  z-10 
  bg-transparent
  `,

  iconInner: `
    w-12 h-12 
    rounded-full 
    shadow-md 
    flex 
    items-center 
    justify-center 
    text-sm 
    font-bold 
    text-black
  `
}
