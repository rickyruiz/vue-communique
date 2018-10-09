import { LayoutConfig } from '@/plugin/types'

const layouts: LayoutConfig[] = []

// @ts-ignore: Expected 1-3 arguments, but got 4.
const requireComponent = require.context(
  // Look for files in the communique components directory
  '@/components/communique',
  // Do not look in subdirectories
  false,
  // Only include "CommuniqueLayout-" prefixed .vue files
  /CommuniqueLayout[\w]+\.vue/,
  // Use 'lazy' webpack ContextMode
  'lazy'
)

requireComponent.keys().forEach((fileName: string) => {
  // Get the layout name
  const componentName = fileName
    // Remove the "./" from the beginning
    .replace(/^\.\//, '')
    // Remove the file extension from the end
    .replace(/\.\w+$/, '')
    // Remove the communique layout suffix
    .replace('CommuniqueLayout', '')
    // Convert to kebab-case
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase()

  // Add the layout config
  layouts.push({
    name: componentName,
    component: () => requireComponent(fileName),
  })
})

export default layouts
