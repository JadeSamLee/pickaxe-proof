
import { cn } from '@/lib/utils';

interface TrustBadgeProps {
  type: 'none' | 'iron' | 'gold' | 'diamond';
  className?: string;
}

const TrustBadge = ({ type, className }: TrustBadgeProps) => {
  if (type === 'none') return null;
  
  const badgeClasses = {
    iron: "badge-iron",
    gold: "badge-gold",
    diamond: "badge-diamond",
  };
  
  const badgeLabels = {
    iron: "Iron",
    gold: "Gold",
    diamond: "Diamond",
  };
  
  return (
    <div className={cn(
      "pixel-border inline-flex items-center px-3 py-1 animate-bounce-subtle",
      badgeClasses[type],
      className
    )}>
      <span className="font-minecraft text-xs mr-1">⭐</span>
      <span className="font-minecraft text-xs">{badgeLabels[type]} Badge</span>
    </div>
  );
};

export default TrustBadge;
