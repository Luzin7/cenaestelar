export const urlSlugMaker = (url: string) => {
  const slugUrl = url.replace(/[^aA-zZ-Z0-9]+/g, "-").replace(/^-+|-+$/g, "");

  return slugUrl;
};
