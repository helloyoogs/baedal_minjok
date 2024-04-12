import { RefObject, forwardRef, useEffect } from 'react'
import { cPopUpProps } from "@/app/@types/component"

const CPopUp = forwardRef<HTMLDivElement, cPopUpProps>(({ children, className }, ref,) => {
    useEffect(() => {
        if (ref && 'current' in ref && ref.current) {
            ref.current.focus()
        }
    }, [ref])

    return (
        <div className={`cPopUpBg ${className}`}>
                {children}
        </div>
    )
})

CPopUp.displayName = 'CPopUp'

export default CPopUp
