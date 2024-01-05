import { iSpecialCard } from "@/types"


export const SpecialCard = ({ data }: { data: iSpecialCard }) => {
  const { title, price, thumb, direction } = data;
  const directions: any = {
    left: 'justify-start',
    right: 'justify-end',
    center: 'justify-center',
  }

  return (
    <div className="relative inline-block">
      <img className="h-[410px] w-full object-cover" src={thumb} alt="" />
      <div className={`transition-all absolute top-0 left-0 w-full h-full bg-[#0000005e] hover:bg-[#000000a1] flex items-center ${directions[direction] || 'justify-center'}`}>
        <div className="bg-[#3e4b6ed1] inline-block py-10 px-20 text-center">
          <div className="text-2xl">{title}</div>
          <div className="mt-2 text-xl">{price}$</div>
          <button className="mt-6 border-2 border-[var(--hover-color)] py-2 px-3 hover:bg-[var(--hover-color)] rounded-md">Shop now!</button>
        </div>
      </div>
    </div>
  )
}
