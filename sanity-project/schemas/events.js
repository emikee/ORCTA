export default {
    name: 'event',
    type: 'document',
    title: 'Events',
    fields: [
      {
        name: 'image',
        type: 'image',
        title: 'Image'
        },
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'date',
        type: 'string',
        title: 'Date'
      },
      {
        name: 'time',
        type: 'string',
        title: 'Time'
      },
      {
        name: 'desc',
        type: 'string',
        title: 'Description'
      },
      {
        name: 'linkname',
        type: 'string',
        title: 'Link Name (optional)'
      },
      {
        name: 'linkurl',
        type: 'string',
        title: 'Link URL (optional)'
      },
      {
        name: 'active',
        type: 'string',
        title: 'Active?',
        initialValue: 'us-south',
        options: {
            list: [
                { title: 'Yes (shows event)', value: 'yes' },
                { title: 'No (hides event)', value: 'no' },
            ],
            layout: 'radio'
        }
      },
    ]
  }