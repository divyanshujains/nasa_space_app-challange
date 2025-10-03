import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex  justify-center  gap-4 items-center">
      {" "}
      <p className="text-sm text-muted-foreground">
        {" "}
    &copy; {new Date().getFullYear()} NASA_SPACE_APPS_CHALLENGE. All rights reserved.
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
