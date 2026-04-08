"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface CommandItem {
  id: string;
  title: string;
  category: string;
  href: string;
}

const COMMANDS: CommandItem[] = [
  { id: "1", title: "Home", category: "Navigation", href: "/" },
  { id: "2", title: "Services", category: "Navigation", href: "/services" },
  { id: "3", title: "Industries", category: "Navigation", href: "/industries" },
  { id: "4", title: "Insights", category: "Navigation", href: "/insights" },
  { id: "5", title: "About", category: "Navigation", href: "/about" },
  { id: "6", title: "Careers", category: "Navigation", href: "/careers" },
  { id: "7", title: "Contact", category: "Navigation", href: "/contact" },
];

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const filteredCommands = COMMANDS.filter(
    (cmd) =>
      cmd.title.toLowerCase().includes(search.toLowerCase()) ||
      cmd.category.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Open on Ctrl+K or Cmd+K
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
      }

      // Only handle navigation keys when palette is open
      if (!isOpen) return;

      switch (e.key) {
        case "Escape":
          setIsOpen(false);
          break;
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev < filteredCommands.length - 1 ? prev + 1 : prev
          );
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
          break;
        case "Enter":
          e.preventDefault();
          if (filteredCommands[selectedIndex]) {
            const href = filteredCommands[selectedIndex].href;
            setIsOpen(false);
            setSearch("");
            router.push(href);
          }
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, selectedIndex, filteredCommands, router]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [search]);

  return (
    <>
      {/* Keyboard shortcut button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 left-8 z-40 flex items-center gap-2 px-4 py-2 rounded-lg border border-nexova-graphite bg-nexova-black/40 backdrop-blur-lg text-nexova-silver hover:border-nexova-accent transition-colors group"
        aria-label="Open command palette"
      >
        <Search className="w-4 h-4 group-hover:text-nexova-accent transition-colors" />
        <span className="hidden sm:inline text-sm">Ctrl K</span>
      </button>

      {/* Command Palette Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Modal */}
            <motion.div
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg z-50"
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <div className="rounded-xl border border-nexova-graphite bg-gradient-to-b from-nexova-charcoal to-nexova-dark backdrop-blur-xl shadow-2xl overflow-hidden">
                {/* Search Input */}
                <div className="flex items-center gap-3 px-4 py-3 border-b border-nexova-graphite">
                  <Search className="w-5 h-5 text-nexova-accent flex-shrink-0" />
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search commands..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="flex-1 bg-transparent text-nexova-light placeholder-nexova-silver outline-none text-sm"
                  />
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-nexova-silver hover:text-nexova-accent transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Results */}
                <div className="max-h-96 overflow-y-auto py-2">
                  {filteredCommands.length > 0 ? (
                    filteredCommands.map((cmd, index) => (
                      <motion.button
                        key={cmd.id}
                        onClick={() => {
                          setIsOpen(false);
                          setSearch("");
                          router.push(cmd.href);
                        }}
                        className={`w-full px-4 py-3 text-left transition-colors ${
                          index === selectedIndex
                            ? "bg-nexova-accent/10 border-l-2 border-nexova-accent"
                            : "hover:bg-nexova-graphite/50"
                        }`}
                        initial={false}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-nexova-light font-medium text-sm">
                              {cmd.title}
                            </p>
                            <p className="text-nexova-silver text-xs">
                              {cmd.category}
                            </p>
                          </div>
                        </div>
                      </motion.button>
                    ))
                  ) : (
                    <div className="px-4 py-8 text-center text-nexova-silver">
                      <p className="text-sm">No commands found</p>
                    </div>
                  )}
                </div>

                {/* Footer */}
                {filteredCommands.length > 0 && (
                  <div className="flex items-center justify-end gap-2 px-4 py-3 border-t border-nexova-graphite text-xs text-nexova-silver">
                    <span className="flex items-center gap-1">
                      <kbd className="px-2 py-1 rounded bg-nexova-graphite">
                        ↑↓
                      </kbd>
                      Navigate
                    </span>
                    <span className="flex items-center gap-1">
                      <kbd className="px-2 py-1 rounded bg-nexova-graphite">
                        ↵
                      </kbd>
                      Select
                    </span>
                    <span className="flex items-center gap-1">
                      <kbd className="px-2 py-1 rounded bg-nexova-graphite">
                        Esc
                      </kbd>
                      Close
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
