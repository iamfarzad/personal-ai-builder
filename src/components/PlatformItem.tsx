
import React from 'react';

interface PlatformItemProps {
  name: string;
  url: string;
  logo: string;
}

const PlatformItem = ({ name, url, logo }: PlatformItemProps) => {
  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center gap-3 transition-all duration-300 hover:opacity-90 hover:-translate-y-1 p-2"
    >
      <div className="h-20 w-20 rounded-lg bg-white shadow-sm flex items-center justify-center p-3 border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
        <img 
          src={logo} 
          alt={`${name} logo`} 
          className="max-h-14 max-w-14 object-contain"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = ""; // Clear the broken image
            target.style.display = 'none';
            const parent = target.parentElement;
            if (parent) {
              const textSpan = document.createElement('span');
              textSpan.className = 'text-2xl font-semibold text-gray-700 dark:text-gray-300';
              textSpan.textContent = name.substring(0, 2).toUpperCase();
              parent.appendChild(textSpan);
            }
          }}
        />
      </div>
      <span className="text-sm font-medium text-muted-foreground text-center w-28 truncate" title={name}>
        {name}
      </span>
    </a>
  );
};

export default PlatformItem;
