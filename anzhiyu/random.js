var posts=["2025/01/22/hello-world/","2025/01/24/c语言指针复习/","2026/01/01/二分查找/","2026/01/01/计算机复试——二分查找/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };