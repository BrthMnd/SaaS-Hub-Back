export function useError(message, info = null) {
  return {
    message,
    info,
  };
}
