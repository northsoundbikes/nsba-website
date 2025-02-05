// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    events: collection({
      label: 'Events',
      slugField: 'title',
      path: 'src/content/events/*',
      format: { contentField: 'description' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        startDate: fields.datetime({ label: 'Start date' }),
        endDate: fields.datetime({ label: 'End date' }),
        location: fields.text({ label: 'Location' }),
        description: fields.markdoc({ label: 'Description' }),
      },
    }), 
    posts: collection({
      label: 'People',
      slugField: 'name',
      path: 'src/content/people/*',
      format: { contentField: 'bio' },
      schema: {
        name: fields.slug({ name: { label: 'Name' } }),
        bio: fields.markdoc({ label: 'Bio' }),
      },
    })
  },
});