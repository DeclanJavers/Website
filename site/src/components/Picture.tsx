// A photo served as AVIF with a WebP fallback, at the width the screen needs.
// width/height are the full-size pixels, so the browser reserves the space before it loads.
interface Props {
  name: string
  widths: number[]
  width: number
  height: number
  sizes: string
  alt: string
  className?: string
  eager?: boolean
}

export default function Picture({ name, widths, width, height, sizes, alt, className, eager }: Props) {
  const set = (ext: string) => widths.map((w) => `/images/${name}-${w}.${ext} ${w}w`).join(', ')
  const largest = widths[widths.length - 1]
  return (
    <picture>
      <source type="image/avif" srcSet={set('avif')} sizes={sizes} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/images/${name}-${largest}.webp`}
        srcSet={set('webp')}
        sizes={sizes}
        width={width}
        height={height}
        alt={alt}
        className={className}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={eager ? 'high' : 'auto'}
      />
    </picture>
  )
}
