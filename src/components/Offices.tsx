import clsx from 'clsx'

function Office({
  name,
  children,
  invert = false,
}: {
  name: string
  children: React.ReactNode
  invert?: boolean
}) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-black' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-black' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<'ul'> & { invert?: boolean }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Pennsylvania" invert={invert}>
          Pittsburgh, PA, USA
        </Office>
      </li>
      <li>
        <Office name="Michigan" invert={invert}>
          Detroit, MI, USA
        </Office>
      </li>
    </ul>
  )
}
