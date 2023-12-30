import { IconBuy } from "../ui/icons/IconBuy";
import { IconEdit } from "../ui/icons/IconEdit";
import { IconMoney } from "../ui/icons/IconMoney";
import { IconTrash } from "../ui/icons/IconTrash";
import { IconUser } from "../ui/icons/IconUser";

export const AdminDashboard = () => {

  return (
    <>
      <div>
        <h2 className="font-bold">Statistics</h2>
        <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          <div className="bg-[var(--primary-color)] to-white/5 p-4 rounded-lg">
            <div className="flex flex-row space-x-4 items-center">
              <div>
                <IconUser />
              </div>
              <div>
                <p className="text-sm font-medium uppercase leading-4">Members</p>
                <p className="text-white font-bold text-xl inline-flex items-center space-x-2">
                  <span>28</span>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[var(--primary-color)] to-white/5 p-4 rounded-lg">
            <div className="flex flex-row space-x-4 items-center">
              <div>
                <IconBuy />
              </div>
              <div>
                <p className="text-sm font-medium uppercase leading-4">Orders</p>
                <p className="text-white font-bold text-xl inline-flex items-center space-x-2">
                  <span>28</span>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[var(--primary-color)] to-white/5 p-4 rounded-lg">
            <div className="flex flex-row space-x-4 items-center">
              <div>
                <IconMoney />
              </div>
              <div>
                <p className="text-sm font-medium uppercase leading-4">Incomes</p>
                <p className="text-white font-bold text-xl inline-flex items-center space-x-2">
                  <span className="text-[var(--green-color)]">1532340$</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="font-bold">Last orders</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
          { Array.from({ length: 8 }).map((el, i) => (
            <a key={i} href="#" className="bg-[var(--primary-color)] hover:bg-[var(--hover-color)] rounded-lg flex flex-row items-center">
              <span className="text-3xl p-4">💰</span>
              <span className="block p-2">
                <span className="inline-block w-full text-xl text-[var(--green-color)] font-bold">348$</span>
                <span className="inline-block w-full font-medium">Amber Gates</span>
                <span className="inline-block w-full text-sm">24 Nov 2022</span>
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h2 className="font-bold">Last members</h2>
        <div className="overflow-x-auto mt-4">
          <table className="w-full whitespace-nowrap">
            <thead className="bg-[var(--primary-color)]">
              <tr>
                <th className="py-3 px-2 rounded-l-lg">Name</th>
                <th className="py-3 px-2">Email</th>
                <th className="py-3 px-2">Group</th>
                <th className="py-3 px-2">Status</th>
                <th className="py-3 px-2 rounded-r-lg">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center border-b border-gray-700">
                <td className="py-3 px-2 font-bold">
                  <div className="inline-flex space-x-3 items-center">
                    <span><img className="rounded-full w-8 h-8" src="https://images.generated.photos/tGiLEDiAbS6NdHAXAjCfpKoW05x2nq70NGmxjxzT5aU/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTM4ODM1LmpwZw.jpg" alt="" /></span>
                    <span>Thai Mei</span>
                  </div>
                </td>
                <td className="py-3 px-2">thai.mei@abc.com</td>
                <td className="py-3 px-2">User</td>
                <td className="py-3 px-2">Approved</td>
                <td className="py-3 px-2">
                  <div className="inline-flex items-center space-x-3">
                    <button className="hover:bg-[var(--hover-color)] rounded-full p-2">
                      <IconEdit />
                    </button>
                    <button className="hover:bg-[var(--hover-color)] rounded-full p-2">
                      <IconTrash />
                    </button>
                  </div>
                </td>
              </tr>     
              <tr className="text-center">
                <td className="py-3 px-2 font-bold">
                  <div className="inline-flex space-x-3 items-center">
                    <span><img className="rounded-full w-8 h-8" src="https://images.generated.photos/tGiLEDiAbS6NdHAXAjCfpKoW05x2nq70NGmxjxzT5aU/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTM4ODM1LmpwZw.jpg" alt="" /></span>
                    <span>Thai Mei</span>
                  </div>
                </td>
                <td className="py-3 px-2">thai.mei@abc.com</td>
                <td className="py-3 px-2">User</td>
                <td className="py-3 px-2">Approved</td>
                <td className="py-3 px-2">
                  <div className="inline-flex items-center space-x-3">
                    <button className="hover:bg-[var(--hover-color)] rounded-full p-2">
                      <IconEdit />
                    </button>
                    <button className="hover:bg-[var(--hover-color)] rounded-full p-2">
                      <IconTrash />
                    </button>
                  </div>
                </td>
              </tr>      
            </tbody>            
          </table>
        </div>
      </div> 
    </>
  )
}
