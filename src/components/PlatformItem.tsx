
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
      className="flex flex-col items-center gap-2 transition-opacity hover:opacity-80"
    >
      <div className="h-12 w-12 rounded-md bg-white flex items-center justify-center p-1 shadow-sm">
        <img 
          src={logo} 
          alt={`${name} logo`} 
          className="max-h-10 max-w-10 object-contain"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.style.display = 'none';
            const parent = target.parentElement;
            if (parent) {
              const textSpan = document.createElement('span');
              textSpan.className = 'text-xs font-medium overflow-hidden text-ellipsis max-w-[40px]';
              textSpan.textContent = name.split(' ')[0];
              parent.appendChild(textSpan);
            }
          }}
        />
      </div>
      <span className="text-xs text-muted-foreground">
        {name.length > 12 ? name.substring(0, 10) + '...' : name}
      </span>
    </a>
  );
};

export default PlatformItem;
