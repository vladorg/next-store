

export const HeroBanner = () => {

  return (
    <div className="h-full col-span-3 relative">
      <img className="w-full object-cover h-[410px]" src="https://images.unsplash.com/photo-1620288650879-20db0eb38c05?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <a className="absolute bottom-0 left-0 p-6 bg-[var(--overlay-color)] w-full text-xl font-bold hover:underline" href="#">
        Special discount in 10% for new clients!
      </a>
    </div>
  )
}
