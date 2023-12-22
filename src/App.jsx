import {  useState } from 'react';
import {  SignInButton, SignedIn, SignedOut} from "@clerk/clerk-react"
import './App.css';
import Nav from './components/Nav';
import HeadCard from './components/HeadCard';
import ContCard from './components/ContCard';
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div>
      <SignedOut >
        <SignInButton />
        <p>This content is public. Only signed out users can see the SignInButton above this text.</p>
      </SignedOut>
      <SignedIn>
        <div >
        <div className={`bg-${isDarkMode ? 'slate-950' : 'white'} h-screen w-full transition-all duration-500 ease-in-out`}>
      <Nav isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <div className='flex flex-row justify-around relative bottom-9'>
        <HeadCard url="https://facebook.com" isDarkMode={isDarkMode} colorbar='from-sky-500 to-blue-600' />
        <HeadCard url="https://twitter.com" isDarkMode={isDarkMode} colorbar='from-cyan-500 to-sky-600' />
        <HeadCard url="https://youtube.com" isDarkMode={isDarkMode} colorbar='from-rose-600 to-red-600' />
        <HeadCard url="https://instagram.com" isDarkMode={isDarkMode} colorbar='from-pink-500 to-pink-600' />
      </div>
      <div>
        <h2 className={`text-${isDarkMode ? 'white' : 'black'} ml-16 text-4xl font-semibold mb-4`}>Overview Today</h2>
      </div>
      <div className='grid grid-cols-4 gap-3 ml-16'>
        <ContCard url="https://facebook.com" isDarkMode={isDarkMode} title="Page Views" />
        <ContCard url="https://facebook.com" isDarkMode={isDarkMode} title="Likes" />
        <ContCard url="https://instagram.com" isDarkMode={isDarkMode} title="Profile Views" />
        <ContCard url="https://instagram.com" isDarkMode={isDarkMode} title="Likes" />
        <ContCard url="https://twitter.com" isDarkMode={isDarkMode} title="Retweets" />
        <ContCard url="https://facebook.com" isDarkMode={isDarkMode} title="Likes"  />
        <ContCard url="https://youtube.com" isDarkMode={isDarkMode} title="Likes" />
        <ContCard url="https://youtube.com" isDarkMode={isDarkMode} title="Total Views" />
      </div>
    </div>
        </div>
         
      </SignedIn>
    </div>
  )
  
}

export default App;
