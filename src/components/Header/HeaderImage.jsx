import { useState, useEffect } from 'react';
import { Image } from 'antd';
import { useThemeSwitcher } from 'react-css-theme-switcher';

import { getPersonalImage } from '../../api';

import style from './style';

const HeaderImage = () => {
  const { currentTheme } = useThemeSwitcher();
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(async () => setImageUrl(await getPersonalImage()), []);

  return (
    <div style={style.headerImageContainer}>
      <Image
        preview={false}
        src={imageUrl || 'https://cdn.dribbble.com/users/1186261/screenshots/3718681/_______.gif'}
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
