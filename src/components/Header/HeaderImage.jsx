import { Image } from 'antd';
import { useThemeSwitcher } from 'react-css-theme-switcher';

import style from './style';

const HeaderImage = () => {
  const { currentTheme } = useThemeSwitcher();

  return (
    <div style={style.headerImageContainer}>
      <Image
        preview={false}
        src="https://media-exp1.licdn.com/dms/image/C4E03AQFqYNjTUttR7A/profile-displayphoto-shrink_800_800/0/1636644923612?e=1645056000&v=beta&t=VRfznZpb4A15e2OdcJdr81k0TYVD0rWb1PWVViaRtvk"
        alt="Personal Image"
        style={{
          ...style.HeaderImage,
          mixBlendMode: currentTheme === 'dark' ? 'lighten' : null,
        }}
      />
    </div>
  );
};

export default HeaderImage;
