
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  SidebarMenuItem,
  SidebarMenuButton
} from '@/components/ui/sidebar';
import { LucideIcon } from 'lucide-react';

interface SidebarNavItemProps {
  href: string;
  label: string;
  icon: LucideIcon;
  tooltip?: string;
}

const SidebarNavItem: React.FC<SidebarNavItemProps> = ({ 
  href, 
  label, 
  icon: Icon, 
  tooltip 
}) => {
  const location = useLocation();
  const isActive = location.pathname === href;
  
  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild isActive={isActive} tooltip={tooltip || label}>
        <Link to={href}>
          <Icon className="mr-2" size={16} />
          <span>{label}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};

export default SidebarNavItem;
