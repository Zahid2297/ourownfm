import { useEffect } from "react";
import StaggeredMenu from "@/components/StaggeredMenu";
import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";

const Navigation = ({ scrollToSection, hideNavbar = false }) => {
  const { theme, toggleTheme } = useTheme();

  // Theme icon component
  const ThemeIcon =
    theme === "dark" ? (
      <Sun color="white" size={22} />
    ) : (
      <Moon color="black" size={22} />
    );

  // Menu items for navigation - following StaggeredMenu documentation format
  const menuItems = [
    {
      label: "Home",
      link: "#home",
      ariaLabel: "Go to home section",
    },
    {
      label: "About",
      link: "#about",
      ariaLabel: "Go to about section",
    },
    {
      label: "Programs",
      link: "#programs",
      ariaLabel: "Go to programs section",
    },
    {
      label: "Why Us",
      link: "#why-us",
      ariaLabel: "Go to why choose us section",
    },
    {
      label: "Contact",
      link: "#contact",
      ariaLabel: "Go to contact section",
    },
  ];

  // Social links - following StaggeredMenu documentation format
  const socialItems = [
    { label: "LinkedIn", link: "https://linkedin.com" },
    { label: "Twitter", link: "https://twitter.com" },
    { label: "Facebook", link: "https://facebook.com" },
  ];

  // Handle smooth scrolling for anchor links
  useEffect(() => {
    const handleClick = (e) => {
      const link = e.target.closest("a[href^='#']");
      if (link) {
        const href = link.getAttribute("href");
        if (href && href.startsWith("#")) {
          e.preventDefault();
          const sectionId = href.replace("#", "");
          scrollToSection(sectionId);
        }
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [scrollToSection]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full pointer-events-none z-[100] transition-opacity duration-300 ${
        hideNavbar ? "opacity-0" : "opacity-100"
      }`}
    >
      <StaggeredMenu
        className="w-full h-full"
        position="right"
        isFixed={true}
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={false}
        menuButtonColor={theme === "dark" ? "#fff" : "#000"}
        openMenuButtonColor={theme === "dark" ? "#fff" : "#000"}
        changeMenuColorOnOpen={true}
        colors={
          theme === "dark" ? ["#ffffff", "#1976D2"] : ["#000000", "#1976D2"]
        }
        logoUrl={theme === "dark" ? "/logo1 white (2).png" : "/logo1 black.png"}
        accentColor={theme === "dark" ? "#3b82f6" : "#2563eb"}
        themeToggle={toggleTheme}
        themeIcon={ThemeIcon}
        theme={theme}
        onMenuOpen={() => {}}
        onMenuClose={() => {}}
      />
    </div>
  );
};

export default Navigation;
