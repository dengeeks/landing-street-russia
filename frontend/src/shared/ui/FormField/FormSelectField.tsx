import {
  useState,
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle
} from 'react'
import styles from './FormField.module.css'
import Icon from '@/shared/icon'

interface BaseProps {
  label?: string
  name: string
  placeholder?: string
  required?: boolean
  options?: string[]
  error?: string
  value?: string
  onChange?: (value: string) => void
  onBlur?: () => void
}

const FormSelectField = forwardRef<HTMLDivElement, BaseProps>(({ label, name, placeholder = ' ', required = false, error, options = [], value = '', onChange, onBlur, ...rest }, ref) => {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useImperativeHandle(ref, () => containerRef.current!, [])

  const handleSelect = (option: string) => {
    onChange?.(option)
    setOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false)
        onBlur?.()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [onBlur])

  return (
    <div
      className={`${styles.wrapper} ${error ? styles.error : ''}`}
      ref={containerRef}
    >
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}{required && '*'}
        </label>
      )}

      <div
        id={name}
        className={`${styles.select} ${styles.input} ${!value ? styles.placeholder : ''}`}
        onClick={() => setOpen(prev => !prev)}
        tabIndex={0}
        onBlur={onBlur}
        {...rest}
      >
        <span>{value || placeholder}</span>
        <Icon icon="chevron" className={open ? 'top' : ''} />
      </div>

      {open && (
        <ul className={styles.options}>
          {options.map(opt => (
            <li
              key={opt}
              className={styles.option}
              onClick={() => handleSelect(opt)}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}

      {(error) && (
        <span className={styles.hint}>{error}</span>
      )}
    </div>
  )
})

FormSelectField.displayName = 'FormSelectField'

export default FormSelectField
