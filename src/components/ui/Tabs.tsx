'use client'

import { useState } from "react";


export const Tabs = ({
  controls, 
  content,
  className = ''
}: {
  controls: string[],
  content: any[],
  className?: string
}) => {
  const [tab, setTab] = useState<number>(0);

  return (
    <div className={className}>
      <div className="w-full">
          <div className="">
              <div className="mb-4 flex space-x-4 p-2 rounded-lg shadow-md">
                  { controls.map((el, i) => {
                    return (
                      <button 
                        key={i} 
                        className={`py-2 px-4 rounded-md ${tab == i ? 'bg-[var(--primary-color)] pointer-events-none' : 'hover:bg-[var(--hover-color)]'}`} 
                        onClick={() => setTab(i)}>{el}</button>
                    )
                  }) }
              </div>
              
              { content.map((el, i) => {
                if (tab == i) {
                  return (
                    <div key={i} className="transition-all duration-300 p-4">
                      <p className="">{el}</p>
                    </div>
                  )
                }
              })}
          </div>
      </div>
  </div>
  )
}
