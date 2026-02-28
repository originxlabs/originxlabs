import { registerSW } from "virtual:pwa-register";

export const registerPwa = () => {
  registerSW({
    immediate: true,
    onRegistered(registration) {
      if (!registration) return;
      setInterval(() => registration.update(), 60 * 60 * 1000);
    },
  });
};

