import { useEffect, useState } from "react";
import { Toaster as Sonner, toast } from "sonner";
import { useTheme } from "next-themes"; // You can replace this if needed

const Toaster = ({ ...props }) => {
  const { theme: currentTheme, setTheme } = useTheme();
  const [theme, setLocalTheme] = useState(currentTheme || "system");

  useEffect(() => {
    if (currentTheme) {
      setLocalTheme(currentTheme);
    }
  }, [currentTheme]);

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };
