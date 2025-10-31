import React from 'react'

type ButtonVariant = 'primary' | 'secondary'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  variant?: ButtonVariant
}

export default function Button({ text, variant = 'primary', className = '', ...props }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold transition-colors duration-200'
  const variants = {
    primary: 'bg-primary hover:bg-accent text-black',
    secondary: 'bg-white/10 hover:bg-white/20 text-white',
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {text}
    </button>
  )
}