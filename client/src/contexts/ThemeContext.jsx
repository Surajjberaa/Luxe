import { useEffect, useState } from "react";


const useTheme = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');

        if (localTheme) {
            setTheme(localTheme);
            document.documentElement.classList.add(localTheme);
        }
        else {
            document.documentElement.classList.add('light');
            window.localStorage.setItem('theme', theme
            );
        }
    }, []);
    
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        console.log(newTheme);
        setTheme(newTheme);
        document.documentElement.classList.remove('dark', 'light');
        document.documentElement.classList.add(newTheme);
        window.localStorage.setItem('theme', newTheme);
}

return [theme, toggleTheme];

}

export default useTheme;