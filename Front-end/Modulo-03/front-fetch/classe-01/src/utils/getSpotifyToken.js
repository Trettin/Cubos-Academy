const CLIENT_ID = "9d18c669d92746d8a91f3528757a1e0d";
const CLIENT_SECRET = "980a006f553248b9a627f8ac3ef91cf3";

const baseURL = (id, secret) =>
  `https://accounts.spotify.com/api/token?grant_type=client_credentials&client_id=${id}&client_secret=${secret}`;

// Dina's class fetch method
// async function getSpotfyToken() {
//     const response = await fetch(baseURL(CLIENT_ID, CLIENT_SECRET), {
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/x-www-form-urlencoded'
//       }
//     });

//     const {access_token, token_type} = await response.json();
//     return `${token_type} ${access_token}`
//   }


// Trying another syntax fetch method
//   async function getSpotfyToken() {
//     return fetch(baseURL(CLIENT_ID, CLIENT_SECRET), {
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/x-www-form-urlencoded'
//       }
//     })
//     .then(response=> response.json())
//     .then(({access_token, token_type}) => `${token_type} ${access_token}`);
//   }

export default async function getSpotifyToken() {
  try {
    return fetch(baseURL(CLIENT_ID, CLIENT_SECRET), {
        method: 'POST',
        headers: {
          'Content-type': 'application/x-www-form-urlencoded'
        }
      })
      .then(response=> response.json())
      .then(({access_token, token_type}) => `${token_type} ${access_token}`);

  } catch (error) {
    console.log(error);
    throw error;
  }
}