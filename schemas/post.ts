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
            marks: {
              // Annotations can be any object structure – e.g. a link or a footnote.
              annotations: [
                {
                  title: 'URL',
                  name: 'link',
                  type: 'object',
                  fields: [
                    {
                      title: 'URL',
                      name: 'href',
                      type: 'url',
                      validation: (Rule:any) => Rule.uri({
                        scheme: ['http', 'https', 'mailto', 'tel']
                      })
                    }
                  ]
                }
              ]
            }
          },
          {
            type: 'image',
          },
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