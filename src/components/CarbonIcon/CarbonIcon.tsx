import { FC, useEffect, useState } from 'react';
import * as Icons from '@carbon/icons-react';
import { CarbonIconProps } from '@/components/CarbonIcon/index';

const CarbonIcon: FC<CarbonIconProps> = ({ iconName }) => {
  const [IconComponent, setIconComponent] = useState<React.ElementType | null>(null);

  useEffect(() => {
    //TODO: Fix types
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const icon = Icons[iconName];

    if (icon) {
      setIconComponent(icon);
    } else {
      console.error(`Icon ${iconName} not found`);
      setIconComponent(null);
    }
  }, [iconName]);

  if (!IconComponent) {
    // TODO: Provide skeleton once ready
    return <span>...</span>;
  }

  return <IconComponent />;
};

export default CarbonIcon;
