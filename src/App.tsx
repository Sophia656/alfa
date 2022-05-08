import React, { FC, useState } from 'react';
import ImagesList from './components/ImagesList/ImagesList';
import Navbar from './components/Navbar/Navbar';
import { DataContext } from './context';

const App: FC = () => {
  // показать только лайкнутые/все
  const [showLiked, setShowLiked] = useState(false)

  return (
    <DataContext.Provider
    value={{
      setShowLiked,
      showLiked
    }}
    >
      <Navbar />
      <ImagesList />
    </DataContext.Provider>
  );
};

export default App;