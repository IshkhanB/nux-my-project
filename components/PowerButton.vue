<template>
  <div class="power-switch">
  <input type="checkbox" />
  <div class="button">
    <svg class="power-off">
      <use xlink:href="#line" class="line" />
      <use xlink:href="#circle" class="circle" />
    </svg>
    <svg class="power-on">
      <use xlink:href="#line" class="line" />
      <use xlink:href="#circle" class="circle" />
    </svg>
  </div>
</div>

<!-- SVG -->
<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
  <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" id="line">
    <line x1="75" y1="34" x2="75" y2="58"/>
  </symbol>
  <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" id="circle">
    <circle cx="75" cy="80" r="35"/>
  </symbol>
</svg>

</template>
<style scoped>
.power-switch {
  --color-invert: red;
  --color-white: #ffffff;
  --width: 150px;    
  --height: 150px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--width);
  height: var(--height);
  .button {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &:after {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      background: radial-gradient(circle closest-side, var(--color-white), transparent);
      filter: blur(20px);
      opacity: 0;
      transition: opacity 1s ease, transform 1s ease;
      transform: perspective(1px) translateZ(0);
      backface-visibility: hidden;
    }
    .power-on,
    .power-off {
      height: 100%;
      width: 100%;
      position: absolute;
      z-index: 1;
      fill: none;
      stroke: var(--color-invert);
      stroke-width: 8px;
      stroke-linecap: round;
      stroke-linejoin: round;
      .line {
        opacity: .2;
      }
      .circle {
        opacity: .2;
        transform: rotate(-58deg);
        transform-origin: center 80px;
        stroke-dasharray: 220;
        stroke-dashoffset: 40;
      }
    }
    .power-on {
      filter: drop-shadow(0px 0px 6px rgba(255,255,255,.8));
      .line {
        opacity: 0;
        transition: opacity .3s ease 1s;
      }
      .circle {
        opacity: 1;
        stroke-dashoffset: 220;
        transition: transform 0s ease, stroke-dashoffset 1s ease 0s;
      }
    }
  }
  input {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 2;
    cursor: pointer;
    opacity: 0;
    &:checked {
      + .button {
        &:after {
          opacity: 0.15;
          transform: scale(2) perspective(1px) translateZ(0);
          backface-visibility: hidden;
          transition: opacity .5s ease, transform .5s ease;
        }
        .power-on,
        .power-off {
          animation: click-animation .3s ease forwards;
          transform: scale(1);
          stroke: var(--color-white);
          .line {
            animation: line-animation .8s ease-in forwards;
          }
          .circle {
            transform: rotate(302deg);
          }
        }
        .power-on {
          .line {
            opacity: 1;
            transition: opacity .05s ease-in .55s;
          }
          .circle {
            transform: rotate(302deg);
            stroke-dashoffset: 40;
            transition: transform .4s ease .2s, stroke-dashoffset .4s ease .2s;
          }
        }
      }
    }
  }
}

@keyframes line-animation {
  0% {
    transform: translateY(0);
  }
  10% {
    transform: translateY(10px);
  }
  40% {
    transform: translateY(-25px);
  }
  60% {
    transform: translateY(-25px);
  }
  85% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes click-animation {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(.9);
  }
  100% {
    transform: scale(1);
  }
}


body {
  background: #1B1A00;
  height: 100vh;
  font: 400 16px 'Poppins', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  .socials {
    position: fixed;
    display: block;
    left: 20px;
    bottom: 20px;
    > a {
      display: block;
      width: 30px;
      opacity: .2;
      transform: scale(var(--scale, .8));
      transition: transform .3s cubic-bezier(0.38,-0.12, 0.24, 1.91);
      &:hover {
        --scale: 1;
      }
    }
  }
}
</style>