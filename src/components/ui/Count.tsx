'use client'

import { useState } from "react"

export const Count = ({
  className = '',
  value,
  maxValue,
  onChange,
}: {
  className?: string,
  value: number,
  maxValue: number,
  onChange: Function
}) => {
  const increaseHandler = () => {
    if (value < maxValue) {
      onChange(value + 1) 
    }     
  }

  const decreaseHandler = () => {
    if (value > 1) {
      onChange(value - 1)
    }    
  }

  return (
    <div className={className}>
      <label className="text-sm" htmlFor="count">Count: (max: {maxValue})</label>
      <div className="flex items-center mt-1">
          <button className="focus:outline-none flex justify-center items-center w-8 h-8 bg-[var(--primary-color)] hover:bg-[var(--hover-color)] rounded-full" onClick={decreaseHandler}>
            -
          </button>
          <span className="text-lg mx-4">{value}</span>
          <button className="focus:outline-none flex justify-center items-center w-8 h-8 bg-[var(--primary-color)] hover:bg-[var(--hover-color)] rounded-full" onClick={increaseHandler}>
            +
          </button>
      </div>
  </div>
  )
}
