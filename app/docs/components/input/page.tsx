import type { Metadata, NextPage } from 'next'
import InputDocs from '.'
import { DocsContentLayout } from '../../../components/DocsContentLayout'

export const metadata: Metadata = {
  description:
    'Input Component is a fundamental user interface element used to collect user input or data in various forms, such as text, numbers, dates, or selections. It provides a space where users can type or select information, allowing them to interact with the application and provide necessary inputs.',
  title: 'Input - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <InputDocs />
    </DocsContentLayout>
  )
}

export default page
