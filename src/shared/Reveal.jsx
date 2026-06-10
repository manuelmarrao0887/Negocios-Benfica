import { useReveal } from './hooks'

/**
 * Lightweight scroll-reveal wrapper. Fades + slides content up on first view.
 *   <Reveal delay={120}>...</Reveal>
 * Props: as (tag), delay (ms), y (px offset), className, plus any element props.
 */
export function Reveal({
  as: Tag = 'div',
  delay = 0,
  y = 24,
  className = '',
  style,
  children,
  ...rest
}) {
  const [ref, shown] = useReveal()
  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'translateY(0)' : `translateY(${y}px)`,
        transition: `opacity 700ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 700ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        willChange: 'opacity, transform',
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export default Reveal
