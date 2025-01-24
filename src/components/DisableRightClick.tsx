import { useEffect } from 'react';
const DisableRightClick: React.FC = () => {
  useEffect(() => {
    const handleRightClick = (e: MouseEvent) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleRightClick);
    return () => {
      document.removeEventListener("contextmenu", handleRightClick);
    };
  }, []);
  return null;
};

export default DisableRightClick;
