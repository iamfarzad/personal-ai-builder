
import React from 'react';
import { 
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu
} from '@/components/ui/sidebar';

interface SidebarNavGroupProps {
  label: string;
  children: React.ReactNode;
}

const SidebarNavGroup: React.FC<SidebarNavGroupProps> = ({ label, children }) => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{label}</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {children}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export default SidebarNavGroup;
