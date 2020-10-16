import { MutableRefObject } from 'react';

// Custom Heart Animation
const iconAnimationScaling = {
  0: {
    scale: 1,
  },
  0.25: {
    scale: 1.15,
  },
  0.5: {
    scale: 1,
  },
  0.75: {
    scale: 1.05,
  },
  1: {
    scale: 1,
  },
};

// Function to stop currently active animation
const stopAnimation = (ref: MutableRefObject<any>) => {
  if (ref.current !== null || ref.current !== undefined) {
    ref.current.stopAnimation();
  }
};

interface SmallIconAnimation {
  smallIconRef: MutableRefObject<any>;
  liked: boolean;
}

// Function for small Icon animation
const smallIconAnimation = ({ liked, smallIconRef }: SmallIconAnimation) => {
  stopAnimation(smallIconRef);

  if (liked) {
    smallIconRef.current.animate(iconAnimationScaling, 500);
  } else {
    smallIconRef.current.bounceIn();
  }
};

interface LargeIconAnimation {
  largeIconRef: MutableRefObject<any>;
  type: 'bounceIn' | 'bounceOut';
}

// funciton for Large Icon animation, animation differs based on type
const largeIconAnimation = ({ type, largeIconRef }: LargeIconAnimation) => {
  stopAnimation(largeIconRef);

  return largeIconRef.current[type]();
};

// Animation chain for large Icon Animation sequence
const sequencedLargeIconAnimation = (iconRef: MutableRefObject<any>) => {
  largeIconAnimation({ type: 'bounceIn', largeIconRef: iconRef })
    .then(() => largeIconAnimation({ type: 'bounceOut', largeIconRef: iconRef }));
};

interface ParallelIconAnimation {
  largeHeartIconRef: MutableRefObject<any>;
  smallHeartIconRef: MutableRefObject<any>;
  liked: boolean;
}

// Animation for running small & large icon animation in parallel
const parralelIconAnimation = ({ largeHeartIconRef, smallHeartIconRef, liked }: ParallelIconAnimation) => {
  sequencedLargeIconAnimation(largeHeartIconRef);

  smallIconAnimation({ liked, smallIconRef: smallHeartIconRef });
};

interface IconAnimation {
  largeHeartIconRef: MutableRefObject<any>;
  smallHeartIconRef: MutableRefObject<any>;
  liked: boolean;
  isDoubleClickType: boolean;
  shouldAnimateLargeIcon: boolean;
}

// Main function for animation, exported and used in MediaDetailElement
export const iconAnimation = ({ isDoubleClickType, shouldAnimateLargeIcon, largeHeartIconRef, smallHeartIconRef, liked }: IconAnimation) => {
  if (isDoubleClickType) {
    parralelIconAnimation({ largeHeartIconRef, smallHeartIconRef, liked });
  } else {
    if (!liked && shouldAnimateLargeIcon) {
      sequencedLargeIconAnimation(largeHeartIconRef);
    }
    smallIconAnimation({ liked, smallIconRef: smallHeartIconRef });
  }
};
