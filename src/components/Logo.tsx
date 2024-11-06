import { useId } from 'react'
import clsx from 'clsx'
import logoImage from '@/images/assets/SDL_Logo_float.svg'


export function Logomark({
  invert = false,
  filled = false,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean
  filled?: boolean
}) {
  let id = useId()

  return (
    <svg className='overflow-visible' viewBox="0 0 16 16" aria-hidden="true" {...props}>
      <image
        href={logoImage.src}
        x="-33"
        y="-7"
        width="100" // Adjust as needed
        height="32" // Adjust as needed
        preserveAspectRatio="xMinYMid meet"
        style={{ filter: invert ? 'invert(1)' : 'none' }}
      />
      {/* <rect
        clipPath={`url(#${id}-clip)`}
        className={clsx(
          'h-8 transition-all duration-300',
          invert ? 'fill-white' : 'fill-neutral-950',
          filled ? 'w-8' : 'w-0 group-hover/logo:w-8',
        )}
      />
      <use
        href={`#${id}-path`}
        className={invert ? 'stroke-white' : 'stroke-neutral-950'}
        fill="none"
        strokeWidth="1.5"
      /> */}
      {/* <defs>
        <path
          id={`${id}-path`}
          d="M 3965 9240 c -71 -6 -86 -14 -145 -75 c -44 -45 -45 -47 -45 -114 c 0 -62 3 -73 31 -108 c 52 -64 84 -80 179 -88 l 85 -7 l 0 -599 c 0 -562 -1 -600 -17 -605 c -201 -65 -542 -247 -769 -409 c -189 -135 -438 -370 -571 -537 c -132 -167 -335 -493 -419 -676 c -120 -258 -201 -528 -252 -837 c -24 -144 -26 -186 -27 -420 c 0 -227 3 -277 23 -395 c 59 -346 173 -682 325 -965 c 79 -146 240 -392 334 -510 c 245 -308 599 -593 987 -795 c 373 -193 598 -264 1041 -329 c 439 -65 938 -19 1380 127 c 635 210 1219 651 1597 1207 c 259 381 432 798 497 1195 c 35 215 41 289 41 486 c 0 230 -11 351 -51 544 c -83 409 -210 717 -444 1080 c -167 259 -331 449 -570 662 c -240 214 -663 463 -950 559 c -22 7 -42 15 -44 16 c -3 2 -6 275 -9 608 l -4 605 l 73 0 c 90 0 142 22 187 76 c 40 48 56 95 48 138 c -8 44 -57 109 -104 141 l -38 25 l -1154 2 c -635 2 -1182 1 -1215 -2 Z m 2345 -150 c 27 -27 25 -46 -8 -79 l -27 -28 l -1150 1 c -860 1 -1155 4 -1170 13 c -12 6 -27 23 -35 38 c -20 37 5 58 78 66 c 31 3 560 7 1175 8 c 1105 1 1117 1 1137 -19 Z m -307 -236 l 27 -6 l 0 -532 c 0 -293 3 -587 6 -653 l 7 -120 l 84 -26 c 46 -15 157 -62 246 -105 c 635 -308 1048 -698 1384 -1307 c 202 -366 327 -834 340 -1270 c 8 -284 -26 -536 -112 -823 c -71 -237 -172 -462 -311 -693 c -187 -311 -452 -604 -749 -830 c -188 -143 -271 -196 -444 -283 c -403 -204 -740 -297 -1182 -326 c -409 -28 -950 66 -1315 228 c -604 268 -1051 643 -1372 1153 c -227 359 -377 762 -439 1176 c -25 168 -25 517 0 668 c 63 372 139 620 271 885 c 268 532 541 856 984 1167 c 190 133 484 288 692 363 c 36 13 71 28 78 33 c 9 7 12 150 12 653 l 0 643 l 58 3 c 113 6 1708 8 1735 2 Z"
        />
        <clipPath id={`${id}-clip`}>
          <use href={`#${id}-path`} />
        </clipPath>
      </defs> */}
    </svg>
  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean
  filled?: boolean
  fillOnHover?: boolean
}) {
  return (
    <svg
      viewBox="0 0 235 32"
      aria-hidden="true"
      className={clsx('overflow-visible', fillOnHover && 'group/logo', className)}
      {...props}    
    >     
      <Logomark
        preserveAspectRatio="xMinYMid meet"
        invert={invert}
        filled={filled}
      /> 
      <text
        x="66"
        y="22"
        fontFamily="Arial" // Change this to your preferred font
        fontSize="20" // Adjust the font size as needed
        fill={invert ? 'white' : 'black'} // Change text color based on invert
      >
        | Summit DevLabs
      </text>
    </svg>
  )
}
