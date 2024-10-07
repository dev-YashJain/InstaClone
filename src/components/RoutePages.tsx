// NavItem.tsx
import { Link } from 'react-router-dom';
import { FC } from 'react'
import classes from './RoutePages.module.css'; // Import your CSS module for styling
import { SvgIconComponent } from '@mui/icons-material'; // Import this type for Material-UI icons

// Define the props interface
interface RoutePagesProps {
    to: string;               // URL to navigate to
    icon: SvgIconComponent;   // Type for Material-UI icons
}

const RoutePages: FC<RoutePagesProps> = ({ to, icon: Icon }) => {
    return (
        <Link to={to} className={classes.RoutePages}>
            <Icon />
        </Link>
    );
};

export default RoutePages;
