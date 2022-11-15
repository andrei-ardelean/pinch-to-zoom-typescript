 // get distance between two touches on the screen
 const getDistanceBetweenTouches = (event: TouchEvent): number => {
  const x = event.touches[0].pageX - event.touches[1].pageX;
  const y = event.touches[0].pageY - event.touches[1].pageY;
  return Math.hypot(x, y);
};

export const handlePinchToZoom = (event: any): void => {
  const element: any = document.getElementById(event.target.id);
  const opacityLayer: any = document.getElementById(`${event.target.id}OpacityLayer`);
  const maxScale = 4;
  const startPoint: any = {};

  element.addEventListener("touchstart", (touchEvent: any) => {
    if (touchEvent.touches.length === 2) {
      touchEvent.preventDefault(); // prevent page scroll

      // calculate where the fingers have started on the X and Y axis
      startPoint.x = (touchEvent.touches[0].pageX + touchEvent.touches[1].pageX) / 2;
      startPoint.y = (touchEvent.touches[0].pageY + touchEvent.touches[1].pageY) / 2;
      startPoint.distance = getDistanceBetweenTouches(touchEvent);
    }
  });

  element.addEventListener("touchmove", (touchEvent: any) => {
    if (touchEvent.touches.length === 2) {
      touchEvent.preventDefault(); // prevent page scroll

      // calculate the scale of the image
      const deltaDistance = getDistanceBetweenTouches(touchEvent);
      const scale = deltaDistance / startPoint.distance;
      const elementScale = Math.min(Math.max(1, scale), maxScale);

      // calculate how much the fingers have moved on the X and Y axis (x2 for accelarated movement)
      const deltaX = ((touchEvent.touches[0].pageX + touchEvent.touches[1].pageX) / 2 - startPoint.x) * 2;
      const deltaY = ((touchEvent.touches[0].pageY + touchEvent.touches[1].pageY) / 2 - startPoint.y) * 2;

      // transform the image to make it grow and move with fingers
      const transform = `translate3d(${deltaX}px, ${deltaY}px, 0) scale(${elementScale})`;
      element.style.transform = transform;
      element.style.WebkitTransform = transform;
      element.style.zIndex = "9999";

      // show opacity layer
      opacityLayer.style.width = "100vw";
      opacityLayer.style.height = "100vh";
    }
  });

  element.addEventListener("touchend", () => {
    // reset image to its original format
    element.style.transform = "";
    element.style.WebkitTransform = "";
    element.style.zIndex = "";

    // hide opacity layer
    opacityLayer.style.width = "0";
    opacityLayer.style.height = "0";
  });
};