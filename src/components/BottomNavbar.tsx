// BottomNavbar.js
import HomeIcon from '@mui/icons-material/Home';
import ReelsIcon from '@mui/icons-material/SlowMotionVideo';
import ProfileIcon from '@mui/icons-material/AccountCircle';
import NavItem from './RoutePages'; // Import the NavItem component
import classes from './BottomNavbar.module.css'; // Updated import for CSS Module

const BottomNavBar = () => {
    return (
        <div className={classes.bottomNavBar}>
            <NavItem to="/" icon={HomeIcon} />
            <NavItem to="/reelPage" icon={ReelsIcon} />
            <NavItem to="/profilePage" icon={ProfileIcon} />
        </div>
    );
};

export default BottomNavBar;
