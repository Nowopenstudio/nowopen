export default {
  name: "work",
  type: "document",
  title: 'Work',
  groups: [{
    name: 'infoSet',
    title: 'Info',
    options: { columns: 2 },
  },
  {
    name: 'meta',
    title: 'Meta',
  }],
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Title',
    },
    {
      type: 'string',
      name: 'client',
      title: 'Client',
    },
    {
      type: 'string',
      name: 'loc',
      title: 'Location',
    },
    {
      type: 'string',
      name: 'locX',
      title: 'Location',
    },
      {
      type: 'string',
      name: 'locY',
      title: 'Location',
    },
    {
      type: "object",
      name: "cover",
      title: 'Thumb',
      fields: [

        {
          name: "image",
          type: 'image',
          title: "file",
          validation: (Rule:any)=>Rule.required()
        },
        {
          name: "video",
          type: 'mux.video',
          title: "Video"
        }

      ]

    },
    {
      type: "object",
      name: "head",
      title: 'Header',
      fields: [

        {
          name: "image",
          type: 'image',
          title: "file",
          validation: (Rule:any)=>Rule.required()
        },
        {
          name: "video",
          type: 'mux.video',
          title: "Video"
        }

      ]

    },
    {
      type: 'slug',
      name: 'slug',
      title: 'Slug',
      group: 'infoSet',
       validation: (Rule:any)=>Rule.required(),
      options: {
        source: 'title'
      }

    },
    
    {name:"pass", type:'object',title:'Password Protection', fields:[
      { name:'gatekeep', title: "Gate Keep", type: 'boolean'},
      { name: 'password', title: "Password", type: 'string', hidden: ({ parent }: any) => parent?.gatekeep !== true }
    ]},
    // { name: 'tags', title: 'Tags', type: 'tags',validation: (Rule:any)=>Rule.required(), },
    { name: 'summary', title: 'Summary', type: 'array', of: [{ type: 'block' }] },
    { name: 'about', title: 'About', type: 'array', of: [{ type: 'block' }] },

    {
      type: 'array',
      name: 'content',
      title: 'Content',

      of: [
        {
          name: 'single', title: "Single", type: "object", preview: {
            select: {
              title: 'content',
              media: 'image'
            }
          }, fieldsets: [{
            name: 'content',
            title: 'Content Type',
            options: { columns: 2 }
          },
          ], fields: [
            {
              name: 'content', title: 'Type', type: 'string', initialValue: 'image', fieldset: 'content', options: {
                list: [
                  { title: 'Text', value: 'text' },
                  { title: 'Image', value: 'image' },
                  { title: 'Image Gallery', value: "gallery" },
                  { title: 'Video Upload', value: 'video' },
                  { title: 'Video Embed', value: 'embed' }
                ],


              }
            },
            {
              name: 'columns', title: 'Columns', type: 'string', initialValue: 'full', fieldset: 'content', options: {
                list: [
                  { title: 'Full Width', value: 'full' },
                  { title: 'Half Width', value: 'half' },

                ],


              }
            },
            { name: 'right', title: "Align Column Right", type: 'boolean', hidden: ({ parent }: any) => parent?.columns !== "half" }
            ,

            { name: 'text', title: 'Text', type: 'array', of: [{ type: 'block' }], hidden: ({ parent }: any) => parent?.content !== "text" },
            { name: 'embed', title: 'Embed', type: 'text', hidden: ({ parent }: any) => parent?.content !== "embed" },
            { name: 'image', title: 'Image', type: 'image', hidden: ({ parent }: any) => parent?.content !== "image" },
            {
              name: 'gallery', title: 'Image Gallery', type: 'array', hidden: ({ parent }: any) => parent?.content !== "gallery", of: [{
                type: "object",
                name: "cover",
                title: 'Cover',
                preview: {
                  select: {
                    media: 'image'
                  }
                },
                fields: [

                  {
                    name: "image",
                    type: 'image',
                    title: "file"
                  },
                  {
                    name: "video",
                    type: 'mux.video',
                    title: "Video"
                  }

                ]

              }]
            },
            { name: 'vid', title: 'Video', type: 'mux.video', hidden: ({ parent }: any) => parent?.content !== "video" },
            { name: 'audio', title: "Audio/Controls", type: 'boolean', hidden: ({ parent }: any) => parent?.content !== "video" },
            { name: 'caption', title: 'caption', type: 'array', of: [{ type: 'block' }] },
          ]
        }
      ]
    },
     {
              type: 'color',
              name: 'color',
              title: 'Color'

            },
    {
      name: "orderRank", type: "string", title: "Rank"
    }

  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'client',
      media: 'cover.image'
    }
  }
}