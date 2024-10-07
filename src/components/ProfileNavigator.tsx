import { FC } from 'react';
import classes from './ProfileNavigator.module.css'; // Import your CSS Module for styling

interface NavItem {
    Icon: React.ElementType; // Icon component type
    label: string; // Label for the icon
}

interface ProfileNavigatorProps {
    navItems: NavItem[]; // Array of navigation items
    showLabels: boolean; // Flag to control label visibility
}

const ProfileNavigator: FC<ProfileNavigatorProps> = ({ navItems, showLabels }) => {
    return (
        <div className={classes.navigator}>
            {navItems.map((item, index) => (
                <div key={index}>
                    <item.Icon />
                    {showLabels && item.label} {/* Conditionally render label */}
                </div>
            ))}
        </div>
    );
};

export default ProfileNavigator;
