import { useRef, useEffect, useCallback } from "react";

// 스크롤하면 페이드인 하는 애니메이션
export const useScrollFadeIn = (direction, duration, delay, changePercent) => {
  // 해당 컴포넌트 가져오기
  const element = useRef();

  // direction 선택
  const hanldeDirection = (name) => {
    switch (name) {
      case "up":
        return `translate3d(0, ${changePercent}%, 0)`;
      case "down":
        return `tranlate3d(0, -${changePercent}%, 0)`;
      case "left":
        return `translate3d(${changePercent}%, 0, 0)`;
      case "right":
        return `translate3d(-${changePercent}%, 0, 0)`;
        derault: return;
    }
  };

  // 설정해둔 컴포넌트를 만날때마다 함수가 재실행되도록 callback하기
  const onScroll = useCallback(
    ([entry]) => {
      const { current } = element;
      if (entry.isIntersecting) {
        current.style.transitionProperty = "all";
        current.style.transitionDuration = `${duration}s`;
        current.style.transitionTimingFunction = "cubic-bezier(0, 0, 0.2, 1)";
        current.style.transitionDelay = `${delay}s`;
        current.style.opacity = 1;
        current.style.transform = "translate3d(0, 0, 0)";
      }
    },
    [delay, duration]
  );

  // intersection-observer로 컴포넌트 위치 observe하기
  useEffect(() => {
    let observer;

    if (element.current) {
      observer = new IntersectionObserver(onScroll, { threshold: 0.05 });
      observer.observe(element.current);
    }

    return () => observer && observer.disconnect();
  }, [onScroll]);

  return {
    ref: element,
    style: { opacity: 0, transform: hanldeDirection(direction) },
  };
};

export default useScrollFadeIn;
