var posts=["2025/01/24/c语言指针复习/","2025/01/22/hello-world/","2026/01/02/移除数组元素/","2026/01/03/螺旋矩阵/","2026/01/01/二分查找/","2026/01/04/长度最小的子数组/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };