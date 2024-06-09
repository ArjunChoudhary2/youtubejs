const API_KEY = 'AIzaSyD-kgguA0mKtD7oGGzO8_poY83oa4HZl7Y'

export const POPULAR_VIDEOS = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=48&regionCode=IN&key=' + API_KEY;


//++'&key=' + API_KEY

export const getVideo = (id) => {
  let url = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id='+id + '&key=' + API_KEY
    return url
}

export const getChannel = (channelId) => {
  let url = 'https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id='+ channelId + '&key=' + API_KEY
    return url
} 

