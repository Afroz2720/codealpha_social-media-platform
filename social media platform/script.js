// Follow/Unfollow functionality
let isFollowed = false;

function followUser() {
  const followButton = document.getElementById("follow-btn");
  const followersCount = document.getElementById("followers-count");
  let count = parseInt(followersCount.textContent);

  isFollowed = !isFollowed;
  if (isFollowed) {
    followButton.textContent = "Unfollow";
    count++;
  } else {
    followButton.textContent = "Follow";
    count--;
  }
  followersCount.textContent = count;
  alert(isFollowed ? "You are now following Jane!" : "You have unfollowed Jane.");
}

// Like functionality
let postLikes = {
  post1: 0,
  post2: 0,
  post3: 0,
  post4: 0
};

function likePost(postId) {
  postLikes[postId]++;
  document.getElementById(`likes-count-${postId}`).textContent = postLikes[postId];
  alert("Post liked!");
}

// Toggle comment visibility
function toggleComments(postId) {
  const commentSection = document.getElementById(`comments-${postId}`);
  const commentText = prompt("Enter your comment:");

  if (commentText) {
    const newComment = document.createElement("div");
    newComment.classList.add("comment");
    newComment.textContent = commentText;
    commentSection.appendChild(newComment);
  }
}
