export const switchCategory = (arr, category) => {
  const { Arte, Musica, Cine, Fotografia, Metaverso } = arr;
  if (category === 'Arte') return Arte;
  if (category === 'Cine') return Cine;
  if (category === 'Musica') return Musica;
  if (category === 'Fotografia') return Fotografia;
  if (category === 'Metaverso') return Metaverso;

  return arr;
};
