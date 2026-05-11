import Footer from "./Footer"
import Navbar from "./Navbar"


interface LayoutProps{
    children: React.ReactNode
}

function Layout({children}: LayoutProps) {
  return (
    <div>
        <Navbar/>
        <main className="flex-grow">
            {children}

        </main>
        <Footer/>
      
    </div>
  )
}

export default Layout
