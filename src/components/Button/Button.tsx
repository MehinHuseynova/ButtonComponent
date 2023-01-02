import React from 'react'
import csx from 'classnames'
import './Button.style.scss'

interface ButtonProps {
    variant?: 'outlined' | 'text';
    disabled?: boolean;
    size?: 'sm' | 'md' | 'lg';
    color?: 'default' | 'primary' | 'secondary' | 'danger';
    noShadow?: boolean;
    startIcon?: JSX.Element;
    endIcon?: JSX.Element;
    noPointerEvent?:boolean
}

export const Button: React.FC<ButtonProps> = ({ variant, disabled, size, color, noShadow, startIcon, endIcon,noPointerEvent }) => {
    const suffix = 'btn'

    const classNames = {
        disabled, noShadow,noPointerEvent, ...variant && {[`${variant}`]: true}, ...size && {[`${size}`]: true}, ...color && {[`${color}`]: true}
    }

    return (
        <>
            <button className={csx(suffix, classNames)}><div className='btnContent'>{startIcon} Default {endIcon}</div></button>
        </>
    )
}
