import { FC } from 'react';
import classes from './ReelIcons.module.css'; // Import your CSS Module for styling

interface ReelItem {
    Icon: React.ElementType; // Icon component type
}

interface ReelIconsProps {
    reelItems: ReelItem[]; // Array of reel items
}

const ReelIcons: FC<ReelIconsProps> = ({ reelItems }) => {
    return (
        <div className={classes.reelIcons}>
            {reelItems.map((item, index) => (
                <div key={index}>
                    <item.Icon />
                </div>
            ))}
        </div>
    );
};

export default ReelIcons;
