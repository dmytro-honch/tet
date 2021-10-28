export function ifDeviceHasTouch() {
  return 'ontouchstart' in window;
}
