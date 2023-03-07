import { Builder } from '@builder.io/react';
import dynamic from 'next/dynamic';

Builder.registerComponent(
  dynamic(() => import('./MyCustomComponent')),
  {
    name: 'ExampleCustomComponent',
    inputs: [
      {
        name: 'title',
        type: 'string',
        defaultValue: 'I am a React component!',
      },
      {
        name: 'description',
        type: 'string',
        defaultValue: 'Find my source in /pages/[...page].js',
      },
    ],
  }
);


// Register a custom insert menu to organize your custom componnets
// https://www.builder.io/c/docs/custom-components-visual-editor#:~:text=than%20this%20screenshot.-,organizing%20your%20components%20in%20custom%20sections,-You%20can%20create
Builder.register('insertMenu', {
    name: 'My Components',
    items: [{ item: 'ExampleCustomComponent', name: 'My React Component' }],
  });
  