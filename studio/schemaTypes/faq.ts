import { defineType, defineField } from 'sanity';

export const faq = defineType({
  name: 'faq',
  title: 'Frequently Asked Questions',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'Order / ID Number',
      type: 'number',
    }),
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
  ],
//   orderings: [
//     {
//       title: 'ID Ascending',
//       by: [{ field: 'id', direction: 'asc' }],
//     },
//   ],
});