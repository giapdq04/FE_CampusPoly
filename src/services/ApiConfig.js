const API_URL = 'http://10.0.2.2:3000/api/v1/';

export const GET_ALL_POST = API_URL + 'posts/get-all-post';
export const GET_POST_ID = API_URL + 'posts/get-post-by-id/';
export const GET_POST_BY_USERID = API_URL + 'posts/get-post-by-userID';
export const GET_USER_ID = API_URL + 'users/get-user-by-id/';
export const LOGIN_WITH_GOOGLE = API_URL + 'users/login-with-google';
export const PUT_UPDATE_USER = API_URL + 'users/update-user/';
export const ADD_POST = API_URL + 'posts/add-post';
export const GET_CONVERSATION_BY_USER = API_URL + 'conversations/get-user-conversation/';
export const GET_MESSAGE_BY_CONVERSATION = API_URL + 'messages/get-message-by-conversation/';
export const ADD_MESSAGE = API_URL + 'messages/add-message';
export const GET_SEARCH = API_URL + 'searchpluss/search-plus';
export const ADD_FRIEND = API_URL + 'friends/add-friend';
export const UPDATE_FRIEND = API_URL + 'friends/update-friend';
export const GET_FRIEND_BY_USERID = API_URL + 'friends/get-friend-by-userID';
export const ADD_REPORT = API_URL + 'reports/add-report';
export const ADD_COMMENT = API_URL + 'comments/add-comment-to-post';
export const LIKE_POST = API_URL + 'likes/add-like-to-post';
export const UNLIKE_POST = API_URL + 'likes/remove-like-from-post';
export const GET_NOTIFICATIONS_BY_USERID = API_URL + 'notifications/get-notifications-by-user-id';
export const READ_NOTIFICATION = API_URL + 'notifications/read-notification';
export const READ_ALL_NOTIFICATION = API_URL + 'notifications/read-all-notification';
export const POST_CONVERSATION = API_URL + 'conversations/post-conversation';
export const UPDATE_MESSAGE = API_URL + 'messages/update-message';
export const GET_HASHTAG = API_URL + 'hashtags/search-hashtag';
export const REMOVE_FRIEND = API_URL + 'friends/remove-friend';
export const GET_POST_BY_USER_INTERACTION = API_URL + 'posts/get-posts-by-user-interaction';
export const INTERACTION_SCORE = API_URL + 'userpreferences/interaction-scoring';
export const GET_SEARCH_POST_BY_HASHTAG = API_URL + 'searchpluss/search-by-hashtag';
