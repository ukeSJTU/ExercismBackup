// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 */
export function removeDuplicates(playlist) {
  return Array.from(new Set(playlist));
}

/**
 * Checks whether a playlist includes a track.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {boolean} whether the track is in the playlist
 */
export function hasTrack(playlist, track) {
  const playlistSet = new Set(playlist);
  return playlistSet.has(track);
}

/**
 * Adds a track to a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function addTrack(playlist, track) {
  const playlistSet = new Set(playlist);
  playlistSet.add(track);
  return Array.from(playlistSet);
}

/**
 * Deletes a track from a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function deleteTrack(playlist, track) {
  const playlistSet = new Set(playlist);
  playlistSet.delete(track);
  return Array.from(playlistSet);
}

/**
 * Lists the unique artists in a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} list of artists
 */
export function listArtists(playlist) {
  const artists = playlist.map(track => {
    // Split by " - " and take the last part (artist name)
    const parts = track.split(' - ');
    return parts[parts.length - 1];
  });
  
  // Use Set to get unique artists, then convert back to array
  return Array.from(new Set(artists));
}
