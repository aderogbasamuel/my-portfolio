import Lottie from 'lottie-react';

const AnimationLottie = ({ animationPath, width = '95%' }) => {
  return (
    <Lottie
      animationData={animationPath}
      loop
      autoplay
      style={{ width }}
    />
  );
};

export default AnimationLottie;
