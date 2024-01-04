'use client'

import { ToastPosition, Toaster } from "react-hot-toast"

export const ToasterProvider = ({ children, position }: { children: React.ReactNode, position: ToastPosition }) => (
  <>
    {children}
    
    <Toaster position={position} toastOptions={ { duration: 3000 } } />
  </>
)
