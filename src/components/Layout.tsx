import Footer from "./Footer"
import Navbar from "./Navbar"


interface LayoutProps{
    children: React.ReactNode
}

function Layout({children}: LayoutProps) {
  return (
    <div className="bg-[#1A0F1E]">
        <Navbar/>
        <main className="grow">
            {children}

        </main>
        <Footer/>
      
    </div>
  )
}

export default Layout
