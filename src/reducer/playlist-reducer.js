export const playlistReducer = (state, action) => {
  const { playlists } = state;
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_PLAYLIST":
      if (playlists.filter((item) => item._id === payload._id).length === 1)
        return {
          ...state,
          playlists: [...playlists.filter((item) => item._id !== payload._id)],
        };
      return {
        ...state,
        playlists: [...playlists, payload],
      };
    // case "GET_PLAYLISTS":
    //   return payload;
    // case "CREATE_PLAYLIST":
    //   return [...playlists, payload];
    // case "UPDATE_PLAYLIST":
    //   return playlists.map((playlist) =>
    //     playlist._id === payload._id
    //       ? {
    //           ...playlist,
    //           name: payload.name,
    //           description: payload.description,
    //         }
    //       : playlist
    //   );
    case "REMOVE_FROM_PLAYLIST":
      return {
        ...state,
        playlists: [...playlists.filter((item) => item._id !== payload._id)],
      };
    //   return playlists.map((playlist) =>
    //     playlist._id === payload.playlist._id
    //       ? {
    //           ...playlist,
    //           videos: playlist.videos.filter(
    //             (video) => video._id !== payload.videoId
    //           ),
    //         }
    //       : playlist
    //   );
    // case "DELETE_PLAYLIST":
    //   return playlists.filter((playlist) => playlist._id !== payload._id);
    default:
      return state;
  }
};
