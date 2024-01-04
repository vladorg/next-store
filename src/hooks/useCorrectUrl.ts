

export const useCorrectUrl = (url: string | undefined): string => {
  if (!url) return ''

  const correctUrl = url.replaceAll(' ', '_').toLowerCase();

  return correctUrl
};
