const todosData = [
  {
      "todo_id": 3,
      "imageUrl": "https://nearbyentertainment.s3-us-west-1.amazonaws.com/2.jpg",
      "liked": 0,
      "description": "Fugit unde eos maiores harum asperiores quia.",
      "kind": "Garden",
      "price": 491,
      "rating": 1.8,
      "review": 258
  },
  {
      "todo_id": 5,
      "imageUrl": "https://nearbyentertainment.s3-us-west-1.amazonaws.com/4.jpg",
      "liked": 0,
      "description": "Consequatur tenetur fugiat nesciunt sit eos numquam quo.",
      "kind": "Garden",
      "price": 964,
      "rating": 0.4,
      "review": 344
  },
  {
      "todo_id": 9,
      "imageUrl": "https://nearbyentertainment.s3-us-west-1.amazonaws.com/8.jpg",
      "liked": 0,
      "description": "Est aspernatur numquam dolorem quod ex optio.",
      "kind": "Baby",
      "price": 170,
      "rating": 2.9,
      "review": 448
  },
  {
      "todo_id": 11,
      "imageUrl": "https://nearbyentertainment.s3-us-west-1.amazonaws.com/10.jpg",
      "liked": 0,
      "description": "Ut corrupti consequatur.",
      "kind": "Outdoors",
      "price": 275,
      "rating": 0.2,
      "review": 152
  },
  {
      "todo_id": 15,
      "imageUrl": "https://nearbyentertainment.s3-us-west-1.amazonaws.com/14.jpg",
      "liked": 0,
      "description": "Ea quia autem consequuntur at ut asperiores.",
      "kind": "Health",
      "price": 223,
      "rating": 2.4,
      "review": 392
  },
  {
      "todo_id": 41,
      "imageUrl": "https://nearbyentertainment.s3-us-west-1.amazonaws.com/40.jpg",
      "liked": 0,
      "description": "Blanditiis distinctio omnis autem commodi.",
      "kind": "Baby",
      "price": 839,
      "rating": 2.3,
      "review": 299
  },
  {
      "todo_id": 42,
      "imageUrl": "https://nearbyentertainment.s3-us-west-1.amazonaws.com/41.jpg",
      "liked": 0,
      "description": "Ut ut et nemo et sit sint.",
      "kind": "Home",
      "price": 707,
      "rating": 3.6,
      "review": 107
  },
  {
      "todo_id": 52,
      "imageUrl": "https://nearbyentertainment.s3-us-west-1.amazonaws.com/51.jpg",
      "liked": 0,
      "description": "Optio atque quia totam.",
      "kind": "Health",
      "price": 828,
      "rating": 0.7,
      "review": 411
  },
  {
      "todo_id": 54,
      "imageUrl": "https://nearbyentertainment.s3-us-west-1.amazonaws.com/53.jpg",
      "liked": 0,
      "description": "Tenetur similique aut quia fuga harum veritatis odio qui et.",
      "kind": "Toys",
      "price": 508,
      "rating": 3.6,
      "review": 207
  },
  {
      "todo_id": 60,
      "imageUrl": "https://nearbyentertainment.s3-us-west-1.amazonaws.com/59.jpg",
      "liked": 0,
      "description": "Sit eos asperiores sit excepturi recusandae ipsa.",
      "kind": "Clothing",
      "price": 29,
      "rating": 1.7,
      "review": 427
  },
  {
      "todo_id": 61,
      "imageUrl": "https://nearbyentertainment.s3-us-west-1.amazonaws.com/60.jpg",
      "liked": 0,
      "description": "Similique reiciendis dolorem asperiores nihil nobis distinctio eum mollitia.",
      "kind": "Kids",
      "price": 326,
      "rating": 4.1,
      "review": 465
  },
  {
      "todo_id": 69,
      "imageUrl": "https://nearbyentertainment.s3-us-west-1.amazonaws.com/68.jpg",
      "liked": 0,
      "description": "Repellendus voluptatem cum consequatur eaque voluptas.",
      "kind": "Music",
      "price": 684,
      "rating": 5,
      "review": 440
  },
  {
      "todo_id": 72,
      "imageUrl": "https://nearbyentertainment.s3-us-west-1.amazonaws.com/71.jpg",
      "liked": 0,
      "description": "Soluta occaecati aut dolores blanditiis rem repudiandae blanditiis repellendus assumenda.",
      "kind": "Games",
      "price": 829,
      "rating": 2.6,
      "review": 216
  },
  {
      "todo_id": 73,
      "imageUrl": "https://nearbyentertainment.s3-us-west-1.amazonaws.com/72.jpg",
      "liked": 0,
      "description": "Ut fugiat eum voluptatum quod aliquam voluptas est.",
      "kind": "Jewelery",
      "price": 585,
      "rating": 1.3,
      "review": 183
  },
  {
      "todo_id": 79,
      "imageUrl": "https://nearbyentertainment.s3-us-west-1.amazonaws.com/78.jpg",
      "liked": 0,
      "description": "Sint voluptates reiciendis nihil ducimus officiis et aliquid.",
      "kind": "Games",
      "price": 775,
      "rating": 2.7,
      "review": 205
  },
  {
      "todo_id": 82,
      "imageUrl": "https://nearbyentertainment.s3-us-west-1.amazonaws.com/81.jpg",
      "liked": 0,
      "description": "Ea neque totam quia necessitatibus commodi repudiandae.",
      "kind": "Automotive",
      "price": 473,
      "rating": 2.2,
      "review": 355
  },
  {
      "todo_id": 85,
      "imageUrl": "https://nearbyentertainment.s3-us-west-1.amazonaws.com/84.jpg",
      "liked": 0,
      "description": "Blanditiis in rem.",
      "kind": "Tools",
      "price": 64,
      "rating": 4.4,
      "review": 298
  },
  {
      "todo_id": 88,
      "imageUrl": "https://nearbyentertainment.s3-us-west-1.amazonaws.com/87.jpg",
      "liked": 0,
      "description": "Illo eligendi accusamus molestias vero rem odio unde aut.",
      "kind": "Electronics",
      "price": 240,
      "rating": 4.2,
      "review": 371
  },
  {
      "todo_id": 90,
      "imageUrl": "https://nearbyentertainment.s3-us-west-1.amazonaws.com/89.jpg",
      "liked": 0,
      "description": "Dolor nisi quis et tempora dignissimos.",
      "kind": "Outdoors",
      "price": 408,
      "rating": 2.6,
      "review": 173
  }
]
export default todosData;