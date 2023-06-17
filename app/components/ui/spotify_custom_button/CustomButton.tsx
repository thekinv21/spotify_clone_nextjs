import { forwardRef } from 'react'

interface CustomButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const CustomButton = forwardRef<HTMLButtonElement, CustomButtonProps>(
	({ className, children, disabled, type = 'button', ...props }, ref) => {
		return (
			<button
				type={type}
				className={className}
				disabled={disabled}
				ref={ref}
				{...props}
			>
				{children}
			</button>
		)
	}
)

CustomButton.displayName = 'Button'

export default CustomButton
