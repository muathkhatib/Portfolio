import { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';

import { Image } from 'antd';

import { useThemeSwitcher } from 'react-css-theme-switcher';

import { getPersonalImage } from '../../api';

import style from './style';

const HeaderImage = () => {
  const { currentTheme } = useThemeSwitcher();
  const [imageUrl, setImageUrl] = useState(null);
  const width = useSelector((state) => state.screenReducer);

  useEffect(async () => setImageUrl(await getPersonalImage()), []);

  return (
    <div style={{
      display: width > 768 && width < 1100 ? 'none' : null,
      marginTop: '1rem',
      width: width > 768 ? '40%' : '100%',
      height: '40%',
    }}
    >
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
