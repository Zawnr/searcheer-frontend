import confetti from 'canvas-confetti';

// Utility to trigger a confetti burst
export function triggerConfetti() {
  confetti({
    particleCount: 80,
    spread: 70,
    origin: { y: 0.6 },
    zIndex: 9999,
    colors: ['#3F67F9', '#F93F67', '#FFD600', '#fff'],
    shapes: ['circle', 'square'],
    scalar: 1.1,
  });
}
