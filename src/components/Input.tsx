import { cn } from '@/lib/utils'
import React from 'react'

const Input = ({
    id,
    onchange,
    value,
    label,
    type,
    name,
    className,
    placeholder
}: {
    id: string
    onchange: any
    value: any
    label?: string
    type: string
    name: string
    className: string
    placeholder: string
}) => {
    return (
        <div className='flex flex-col justify-center'>
            <label htmlFor={id}><span className='ml-2 px-2 relative top-3 bg-background font-extrabold text-emerald-600'>{label}</span></label>
            <input id={id} onChange={onchange} value={value} type={type} name={name} className={className != "" ?
                cn("border rounded-md font-regular px-4 pb-3 pt-4 w-full focus:outline-none peer", className) :
                "border rounded-md px-4 pb-3 pt-4 w-full font-regular focus:outline-none peer"
            } placeholder={placeholder} />
        </div>
    )
}

export default Input
