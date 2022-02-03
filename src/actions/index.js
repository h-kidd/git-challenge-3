import axios from 'axios';

export const getResult = username => {
  return async dispatch => {
      try {
          const gitInfo = await fetchGitInfo(username);
          return(gitInfo)
      } catch (err) {
          console.warn(err.message);
      };
  };
};

const fetchGitInfo = async ([ username ]) => {
  try {
      const { data } = await axios.get(`https://api.github.com/users/${username}/repos`);
      return data;
  } catch(err) {
      throw new Error(err.message)
  }
}