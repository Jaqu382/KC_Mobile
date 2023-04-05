import { useSelector } from 'react-redux';
import { useMemo } from 'react';

const useDynamicStyles = () => {
  const appFontSize = useSelector((state) => state.fontSize.fontSize);
  const isDarkModeEnabled = useSelector((state) => state.darkMode.isEnabled);

  const dynamicStyles = useMemo(() => {
    const textColor = isDarkModeEnabled ? 'white' : 'black';
    const backgroundColor = isDarkModeEnabled ? 'black' : 'white';

    return {
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor,
      },
      text: {
        fontSize: appFontSize,
        color: textColor,
      },
    };
  }, [appFontSize, isDarkModeEnabled]);

  return dynamicStyles;
};

export default useDynamicStyles;