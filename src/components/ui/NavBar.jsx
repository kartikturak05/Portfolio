import { useNavigate } from 'react-router-dom';

function NavBar(){
    const navigate = useNavigate();

    const handleNavigation = (hash) => {
    if (window.location.pathname === '/') {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const section = document.querySelector(hash);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    }
  };

    return (
        <div className="fixed top-0 left-0 w-full z-50 flex justify-around  items-center px-6 h-16   bg-transparent mt-12">

            <div className="flex items-center  bg-opacity-90 backdrop-blur-sm border-b py-4 md:px-10 px-5 rounded-full  border-0 border-gray-100">
                <ul className="flex md:space-x-8 space-x-4">
                    <li className="text-gray-100  hover:text-blue-400 cursor-pointer md:text-2xl text-xl" onClick={() => handleNavigation('#home')}>Home</li>
                    <li className="text-gray-100 hover:text-blue-400 cursor-pointer md:text-2xl text-xl" onClick={() => handleNavigation('#about')}>About</li>
                    <li className="text-gray-100 hover:text-blue-400 cursor-pointer md:text-2xl text-xl" onClick={() => handleNavigation('#projects')}>Projects</li>
                    <li className="text-gray-100 hover:text-blue-400 cursor-pointer md:text-2xl text-xl" onClick={() => handleNavigation('#contact')}>Contact</li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;