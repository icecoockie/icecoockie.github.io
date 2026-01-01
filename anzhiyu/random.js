var posts=["2025/01/24/c语言指针复习/","2026/01/01/二分查找/","2025/01/22/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };