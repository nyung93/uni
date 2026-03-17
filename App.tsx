
import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { MainPage } from './views/MainPage';
import { Dashboard } from './views/Dashboard';
import { Competency } from './views/Competency';
import { Academic } from './views/Academic';
import { Counseling } from './views/Counseling';
import { Job } from './views/Job';
import { HS_Employment } from './views/HS_Employment';
import { MenuType, MENU_STRUCTURE } from './types';

function App() {
  const [activeMenu, setActiveMenu] = useState<MenuType>(MenuType.HOME);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Set default submenu when menu changes if not already set
  useEffect(() => {
    const subMenus = MENU_STRUCTURE[activeMenu];
    if (subMenus.length > 0 && (!activeSubMenu || !subMenus.includes(activeSubMenu))) {
      setActiveSubMenu(subMenus[0]);
    } else if (subMenus.length === 0) {
      setActiveSubMenu(null);
    }
  }, [activeMenu]);

  const handleNavigate = (menu: MenuType, subMenu?: string) => {
    setActiveMenu(menu);
    if (subMenu) setActiveSubMenu(subMenu);
  };

  const renderContent = () => {
    const props = { subPage: activeSubMenu || undefined };

    switch (activeMenu) {
      case MenuType.HOME:
        return (
          <MainPage 
            onLogin={() => setIsLoggedIn(true)} 
            isLoggedIn={isLoggedIn}
            onNavigate={handleNavigate}
          />
        );
      case MenuType.DASHBOARD:
        return <Dashboard />;
      case MenuType.COMPETENCY:
        return <Competency {...props} />;
      case MenuType.ACADEMIC:
        return <Academic {...props} />;
      case MenuType.COUNSELING:
        return <Counseling {...props} />;
      case MenuType.JOB:
        return <Job {...props} />;
      case MenuType.HS_EMPLOYMENT:
        return <HS_Employment {...props} />;
      default:
        return (
          <MainPage 
            onLogin={() => setIsLoggedIn(true)} 
            isLoggedIn={isLoggedIn}
            onNavigate={handleNavigate}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7] font-sans text-gray-900 selection:bg-indigo-100 selection:text-indigo-900 flex flex-col">
      <Navigation 
        activeMenu={activeMenu} 
        setActiveMenu={setActiveMenu} 
        activeSubMenu={activeSubMenu}
        setActiveSubMenu={setActiveSubMenu}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
      
      <main className="pt-24 pb-10 px-4 md:px-8 flex-1">
        <div className="max-w-[1280px] mx-auto min-h-[calc(100vh-80px)]">
          {renderContent()}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
