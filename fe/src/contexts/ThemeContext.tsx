// import { ConfigProvider, theme } from "antd";
// import React, { useEffect, useState } from "react";

// const { darkAlgorithm, defaultAlgorithm } = theme;

// type ThemeContextType = {
//   isDark: boolean;
//   toggleTheme: () => void;
// };

// export const ThemeContext = React.createContext<ThemeContextType | null>(null);

// export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const [isDark, setIsDark] = useState<boolean>(() => {
//     const saved = localStorage.getItem("theme");
//     return saved ? JSON.parse(saved) : false;
//   });

//   useEffect(() => {
//     const html = document.documentElement;
//     html.classList.toggle("dark", isDark);
//     localStorage.setItem("theme", JSON.stringify(isDark));
//   }, [isDark]);

//   const toggleTheme = () => setIsDark((prev) => !prev);

//   return (
//     <ThemeContext.Provider value={{ isDark, toggleTheme }}>
//       <ConfigProvider
//         theme={{
//           algorithm: isDark ? darkAlgorithm : defaultAlgorithm,
//           components: {
//             Layout: {
//               headerBg: isDark ? "#1f1f1f" : "#fff",
//               siderBg: isDark ? "#141414" : "#f7f7f7",
//               bodyBg: isDark ? "#1e1e1e" : "#f0f2f5",
//             },
//           },
//         }}
//       >
//         {children}
//       </ConfigProvider>
//     </ThemeContext.Provider>
//   );
// };
// phần tự viết trước
import { ConfigProvider } from "antd";
import React, { useEffect, useState } from "react";

type ThemeContextType = {
  isDark: boolean;
  toggleTheme: () => void;
};

export const ThemeContext = React.createContext<ThemeContextType>({
  isDark: false,
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem("theme");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    const html = document.querySelector("html");
    if (isDark) {
      html?.classList.add("dark");
    } else {
      html?.classList.remove("dark");
    }
    localStorage.setItem("theme", JSON.stringify(isDark));
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        toggleTheme,
      }}
    >
      {/* nêu dùng mặc định, không dùng antd */}
      {/* {children}  */}

      {/* dùng antd */}

      <ConfigProvider
        theme={{
          components: {
            Layout: {
              headerBg: isDark ? "#1f1f1f" : "#fff",
              siderBg: isDark ? "#141414" : "#f7f7f7",
              bodyBg: isDark ? "#1e1e1e" : "#f0f2f5",
              //triggerBg: isDark ? "#141414" : "#f7f7f7",
            },
            Menu: {
              darkItemBg: isDark ? "#141414" : "#f7f7f7",
            },
          },
        }}
      >
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  );
};
