import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
// import {documentInternationalization} from '@sanity/document-internationalization'

export default defineConfig({
  name: 'default',
  title: 'Acc Blog',

  projectId: 'eahe87w1',
  dataset: 'production',

  plugins: [structureTool(), visionTool(),
    // documentInternationalization({
    //   // Required configuration
    //   supportedLanguages: [
    //     {id: 'es', title: 'Spanish'},
    //     {id: 'en', title: 'English'},
    //     {id: 'arb', title: 'Arabic'},
    //     {id: 'pt', title: 'Portuguese'},
    //     {id: 'fr', title: 'French'},
    //     {id: 'de', title: 'German'}
    //   ],
    //   schemaTypes: ['accountingBlog'],
    // })
  ],

  schema: {
    types: schemaTypes,
  },
})
