// يحوّل أي رابط YouTube إلى رابط embed
export function toEmbed(url: string): string {
  const m = url.match(/(?:youtu\.be\/|v=|embed\/)([\w-]{11})/);
  return m ? `https://www.youtube-nocookie.com/embed/${m[1]}` : url;
}
