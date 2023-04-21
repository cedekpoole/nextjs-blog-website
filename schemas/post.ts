const post = {
    title: 'Post',
    name: 'post',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string',
      },
      {
        name: 'coverImage',
        title: 'Cover image',
        type: 'image',
        options: {
            hotspot: true,
        }
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
      },
      {
        name: 'publishedAt',
        title: 'Published at',
        type: 'datetime',
      },
      {
        name: 'body',
        title: 'Body',
        type: 'array',
        of: [
          {
            type: 'block',
          },
          {
            type: 'image',
          }
        ],
      },
    ],
    preview: {
      select: {
        title: 'title',
      },
    },
  }
  
  export default post