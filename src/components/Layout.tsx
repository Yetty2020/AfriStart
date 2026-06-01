import Footer from "./Footer"
import Navbar from "./Navbar"
import CustomCursor from "./CustomCursor"


interface LayoutProps{
    children: React.ReactNode
}

function Layout({children}: LayoutProps) {
  return (
    <div className="bg-[#1A0F1E] cursor-none">
      <CustomCursor/>
        <Navbar/>
        <main className="grow">
            {children}

        </main>
        <Footer/>
      
    </div>
  )
}

export default Layout
