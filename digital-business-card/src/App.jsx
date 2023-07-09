import Info from './components/info'
import About from './components/about'
import Interest from './components/interest'
import Footer from './components/footer'
import './App.css'

export default function App() {
    return (
        <div className = 'main-content'>
            <main className = 'card'>
                <Info />
                <About />
                <Interest />
                <Footer />

            </main>
            
        </div>
        
    )
}