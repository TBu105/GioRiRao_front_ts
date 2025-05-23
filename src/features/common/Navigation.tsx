import {
  Home,
  Settings,
  Bell,
  Mail,
  LogOut,
  AppWindow,
  Activity,
  Container,
} from "lucide-react"
import { NavLink } from "react-router-dom"
import authApi from "../authentication/authApi"

interface NavItemProps {
  to: string
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  onClick?: () => void
}
const handleLogout = () => {
  authApi.logOut()
}
const NavItem = ({ to, Icon, onClick }: NavItemProps) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `h-12 w-12 flex items-center justify-center rounded-lg transition-colors ${
        isActive ? "bg-rose-400 text-white" : "text-gray-400 hover:bg-gray-800"
      }`
    }
  >
    <Icon width={24} height={24} />
  </NavLink>
)

const Navigation = () => (
  <nav className="w-20 bg-gray-900 p-4 flex flex-col items-center gap-6 h-screen">
    {/* — Avatar vào trang Profile — */}
    <div className="mb-8">
      <NavLink to="/profile">
        <img
          src="/ProfileIcon.jpg"
          alt="User Avatar"
          className="w-10 h-10 rounded-full object-cover"
        />
      </NavLink>
    </div>

    {/* Nhóm các icon điều hướng */}
    <div className="flex flex-col gap-6 flex-grow">
      <NavItem to="/" Icon={Home} />
      <NavItem to="/management" Icon={AppWindow} />
      {/* <NavItem to="/statistics" Icon={Activity} /> */}
      <NavItem to="/Orderlist" Icon={Bell} />
      <NavItem to="/settings" Icon={Settings} />
      <NavItem to="/inventories" Icon={Container} />
    </div>

    {/* Đẩy LogOut xuống dưới */}
    <div className="mt-auto">
      <NavItem to="/login" onClick={handleLogout} Icon={LogOut} />
    </div>
  </nav>
)

export default Navigation
