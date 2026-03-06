import { useEffect } from 'react';
import { useAppSelector } from '../model/store';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const themeMode = useAppSelector((state) => state.theme.mode);

  useEffect(() => {
    // Устанавливаем data-атрибут на корневом элементе html
    document.documentElement.setAttribute('data-theme', themeMode);

    // Также можно добавить/удалить класс на body
    if (themeMode === 'dark') {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  }, [themeMode]);

  return <>{children}</>;
};