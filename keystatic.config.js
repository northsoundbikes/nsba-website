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
    people: collection({
      label: 'People',
      slugField: 'name',
      path: 'src/content/people/*',
      format: { contentField: 'bio' },
      schema: {
        name: fields.slug({ name: { label: 'Name' } }),
        bio: fields.markdoc({ label: 'Bio' }),
        headshot: fields.image({ label: 'Headshot', validation: { required: false } }),
      },
    }),
    projects: collection({
      label: 'Projects',
      slugField: 'name',
      path: 'src/content/projects/*',
      format: { contentField: 'description' },
      schema: {
        name: fields.text({ label: 'Name' }),
        active: fields.checkbox({ label: 'Active' }),
        startDate: fields.datetime({ label: 'Start Date' }),
        endDate: fields.datetime({ label: 'End Date', required: false }),
        pointOfContact: fields.text({ label: 'Point of Contact', required: false }),
        description: fields.markdoc({ label: 'Description' }),
      },
    }),
  },
});