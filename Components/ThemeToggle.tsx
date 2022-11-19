import { useDarkMode } from '#/lib/use-dark-mode';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { IoMoonSharp } from '@react-icons/all-files/io5/IoMoonSharp';
import { IoSunnyOutline } from '@react-icons/all-files/io5/IoSunnyOutline';
import styles from './styles.module.css'

type Props = {size:string};

function ThemeToggle({size}: Props) {
  const [hasMounted, setHasMounted] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { systemTheme, theme, setTheme } = useTheme();
  const onToggleDarkMode = React.useCallback(
    (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      if (isDarkMode) {
        setTheme('light');
      } else {
        setTheme('dark');
      }
      toggleDarkMode();
    },
    [isDarkMode, setTheme, toggleDarkMode],
  );

  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  useEffect;
  return <div>  {hasMounted && (
    <a
        className={styles.toggleDarkMode}
        href="#"
        role="button"
        onClick={onToggleDarkMode}
        title="Toggle dark mode"
    >
        {isDarkMode ? <IoSunnyOutline style={{ height: size, width: size }}  /> : <IoMoonSharp style={{ height: size, width: size }} />}
    </a>
)}</div>;
}

export default ThemeToggle;
