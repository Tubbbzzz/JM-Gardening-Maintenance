const cursorEl = document.querySelector(".cursor");

window.onpointermove = (e) => {
   e.stopPropagation();
   let curX = e.clientX;
   let curY = e.clientY;

   cursorEl.animate(
      {
         left: `${curX}px`,
         top: `${curY}px`,
      },
      { duration: 50, fill: "forwards" }
   );
};