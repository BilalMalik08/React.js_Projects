import "./lightDarkMode.css";
import useLocalStorage from "./useLocalStorage";

export default function LightDarkMode() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  return (
    <div className="light-dark-mode">
      <div className="light-dark-mode-container">
        {" "}
        <p>Hello World!</p>
        <button>Change Theme</button>
      </div>
    </div>
  );
}
